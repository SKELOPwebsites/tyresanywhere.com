<?php

namespace App\Http\Controllers;

use App\Mail\OrderMail;
use App\Models\Configuration;
use App\Models\Order;
use App\Models\OrderSnapshot;
use App\Models\Postcode;
use App\Models\ServiceFee;
use App\Models\Timeslot;
use App\Models\Tyre;
use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use DateTime;
use DateTimeZone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Ramsey\Uuid\Type\Time;

class PaymentController extends Controller
{
    public function purchase(Request $request)
    {
        // do validation o n the data
        $request->validate([
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'numeric', 'digits:11'],
            'registration' => ['required', 'string', 'max:9'],
            'addressLine1' => ['required', 'string', 'max:255'],
            'town' => ['required', 'string', 'max:255'],
            'postcode' => ['required', 'string', 'max:255'],
            'fitting_addressLine1' => ['required', 'string', 'max:255'],
            'fitting_town' => ['required', 'string', 'max:255'],
            'fitting_postcode' => ['required', 'string', 'max:255'],

            'timeslot.day' => ['required', 'numeric', 'digits:2'],
            'timeslot.month' => ['required', 'numeric', 'digits:2'],
            'timeslot.year' => ['required', 'numeric', 'digits:4'],
            'timeslot.from' => ['required', 'string', Rule::in(['6AM', '8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM'])],
            'timeslot.to' => ['required', 'string', Rule::in(['8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM', '10PM'])],

            'payment_method_id' => ['required'],
            'cart' => ['required', 'string'],
        ]);

        //validate fitting postcode
        $this->checkPostcodeIsValid($request);

        //validate timeslot
        $this->validateTimeslot($request);

        $user = new User();
        $user->firstname = $request['firstname'];
        $user->lastname = $request['lastname'];
        $user->email = $request['email'];
        $user->phone = $request['phone'];
        $user->registration = strtoupper($request['registration']);
        $user->address_1 = $request['addressLine1'];
        $user->town = $request['town'];
        $user->postcode = strtoupper($request['postcode']);
        $user->fitting_address_1 = $request['fitting_addressLine1'];
        $user->fitting_town = $request['fitting_town'];
        $user->fitting_postcode = strtoupper($request['fitting_postcode']);
        $user->save();

        //create timeslot
        $timeslot = new Timeslot();
        $timeslot->user_id = $user->id;
        $timeslot->slot_from = $request['timeslot']['from'];
        $timeslot->slot_to = $request['timeslot']['to'];
        $timeslot->day = $request['timeslot']['day'];
        $timeslot->month = $request['timeslot']['month'];
        $timeslot->year = $request['timeslot']['year'];
        $timeslot->price = $request['timeslot']['price'];
        $timeslot->save();

        $cart = json_decode($request->input('cart'), true);

        $tyre = Tyre::where('id', $cart['tyre']['id'])->first()->toArray();
        $tyre_total = $cart['tyre']['quantity'] >= 4 ? number_format($cart['tyre']['quantity'] * $tyre['price_offer'], 2) : number_format($cart['tyre']['quantity'] * $tyre['price'], 2);

        // calculate subtotal and number of items
        $subtotal = 0;
        $tyres = 0;

        $subtotal += floatval($tyre_total);
        $subtotal += $timeslot->price;


        $fitting = ServiceFee::where('name', 'fitting_r' . $tyre['rim'])->first();
        $callout = ServiceFee::where('name', 'callout_r' . $tyre['rim'])->first();
        $disposal = ServiceFee::where('name', 'tyre_disposal')->first();

        $total = ($subtotal + ($fitting->price * $cart['tyre']['quantity']) + $callout->price + ($disposal->price * $cart['tyre']['quantity'])) * 100;

        $deposit_percentage = Configuration::where('key', 'deposit_percentage')->first()->value;

        $total_later = round($total * ((100-$deposit_percentage)/100));
        $total_to_pay = round($total * ($deposit_percentage/100));

        try {
            $user->createOrGetStripeCustomer();

            $payment = $user->charge(
                $total_to_pay,
                $request->input('payment_method_id')
            );

//            $payment = $payment->asStripePaymentIntent();


            $order = $user->orders()
                ->make([
                    'transaction_id' => $payment->id,
                    'total' => $payment->amount,
                    'remaining' => $total_later,
                ]);
            $order->save();

            $order->tyres()
                ->attach($cart['tyre']['id'], ['quantity' => $cart['tyre']['quantity']]);


            $order->load('tyres');


            Mail::to($request['email'])->send(new OrderMail($order['id']));
            Mail::to(config('mail.from.address'))->send(new OrderMail($order['id']));

            // create order snapshot
            $snapshot = OrderSnapshot::create([
                'order_id' => $order->id,
                'tyre' => json_encode($order['tyres']->toArray()[0]),
                'services' => json_encode([
                    'fitting' => $fitting->price,
                    'callout' => $callout->price,
                    'disposal' => $disposal->price,
                ]),
                'deposit_percentage' => $deposit_percentage,
            ]);


            // create invoice
            $invoice = $this->generateInvoice($order);

            $fileName = 'invoice_'.$order->id.'.pdf';
            Storage::put('invoices/' . $fileName, $invoice->output());

            // clear cart
            $request->session()->forget('cart');

            return Redirect::to(URL::temporarySignedRoute('order-summary', now()->addMinutes(30), $order['id']));

        } catch (\Exception $e) {
            // handle exception
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function summary(Request $request, $orderId)
    {
        if(!$request->hasValidSignature()) {
            abort(401);
        }
        $order = Order::where('id', $orderId)->first();
        if(!$order){
            return Redirect::to('/');
        }
        $orderSnapshot = OrderSnapshot::where('order_id', $orderId)->first();
        if(!$orderSnapshot){
            return Redirect::to('/');
        }

        $tyre = json_decode($orderSnapshot['tyre'], true);
        $services = json_decode($orderSnapshot['services'], true);

        // get the tyres from session
        $user = $order->user;
        $timeslot = $user->timeslot;

        // calculate subtotal and number of items
        $subtotal = $timeslot['price'];

        if($tyre['pivot']['quantity'] >= 4) {
            $subtotal += ($tyre['pivot']['quantity'] * $tyre['price_offer']);
        } else{
            $subtotal += ($tyre['pivot']['quantity'] * $tyre['price']);
        }

        $fitting = $services['fitting'];
        $callout = $services['callout'];
        $disposal = $services['disposal'];

        $total = $subtotal + ($fitting * $tyre['pivot']['quantity']) + $callout + ($disposal * $tyre['pivot']['quantity']);
        $deposit_percentage = $orderSnapshot['deposit_percentage'];

        return Inertia::render('Checkout/OrderSummary', [
            'order_summary' => $order,
            'summary' => [
                'items' => $tyre['pivot']['quantity'],
                'subtotal' => number_format($subtotal, 2),
                'fitting' => number_format($tyre['pivot']['quantity'] * $fitting, 2),
                'fitting_cost' => number_format($fitting, 2),
                'callout' => number_format($callout, 2),
                'disposal' => number_format($tyre['pivot']['quantity'] * $disposal, 2),
                'disposal_cost' => number_format($disposal, 2),
                'total' => number_format($total, 2),
                'total_later' => number_format(($total * ((100-$deposit_percentage) / 100)), 2),
                'total_today' => number_format(($total * ($deposit_percentage / 100)), 2),
                'total_later_pence' => round(($total * (100-$deposit_percentage))),
                'total_today_pence' => round(($total * $deposit_percentage)),
                'txn_id' => $order['transaction_id']
            ],
            'user' => [
                'firstname' => $user['firstname'],
                'lastname' => $user['lastname'],
                'registration' => $user['registration'],
                'fitting_address_1' => $user['fitting_address_1'],
                'fitting_address_2' => $user['fitting_address_2'],
                'fitting_town' => $user['fitting_town'],
                'fitting_postcode' => $user['fitting_postcode'],
            ],
            'timeslot' => [
                'slot_from' => $timeslot['slot_from'],
                'slot_to' => $timeslot['slot_to'],
                'day' => $timeslot['day'],
                'month' => $timeslot['month'],
                'year' => $timeslot['year'],
                'price' => $timeslot['price'],
            ],
            'cart' => $tyre,
        ]);
    }

    function generateInvoice($order) {
        $tyre = $order['tyres']->toArray()[0];
        $user = $order->user;
        $timeslot = $user->timeslot;

        // calculate subtotal and number of items
        $subtotal = $timeslot['price'];

        $qty = $tyre['pivot']['quantity'];
        if($qty >= 4) {
            $subtotal += ($qty * $tyre['price_offer']);
        } else{
            $subtotal += ($qty * $tyre['price']);
        }

        $fitting = ServiceFee::where('name', 'fitting_r' . $tyre['rim'])->first();
        $callout = ServiceFee::where('name', 'callout_r' . $tyre['rim'])->first();
        $disposal = ServiceFee::where('name', 'tyre_disposal')->first();

        $total = $subtotal + ($fitting->price * $qty) + $callout->price + ($disposal->price * $qty);

        $paid = number_format(($order->total / 100), 2);
        $remaining = $total - $paid;

        $invoice = PDF::loadView('invoice', [
            'tyre' => $tyre,
            'order_id' => 55,//$order->id,
            'order_date' => $order->created_at->format('d/m/Y'),
            'user' => $user,
            'timeslot' => $timeslot,
            'fitting' => $fitting->price,
            'callout' => $callout->price,
            'disposal' => $disposal->price,
            'total' => number_format($total, 2),
            'paid' => number_format($paid, 2),
            'remaining' => number_format($remaining, 2)
        ]);

        return $invoice;
    }

    function checkPostcodeIsValid(Request $request) {
        if(!$request->session()->has('cart.postcode')) {
            $request->session()->forget('cart');
            return Redirect::to('/cart');
        }

        $postcode = $request->session()->get('cart.postcode');

        if(!$this->validatePostcode($postcode)){
            return Redirect::to('/')->with('flash.errors.postcode', 'Please enter a valid postcode');
        }
        if(!$this->checkPostcodeCovered($postcode)){
            return Redirect::to('/')->with('flash.errors.postcode', 'We do not cover this area at the moment!');
        }
        return true;
    }

    private function validatePostcode($postcode)
    {
        $url = 'https://api.postcodes.io/postcodes/'. $postcode .'/validate';
        return json_decode(file_get_contents($url))->result;
    }

    private function checkPostcodeCovered($postcode)
    {
        $url = 'https://api.postcodes.io/postcodes/' . $postcode;
        $result = json_decode(file_get_contents($url))->result;
        return Postcode::where('outcode', $result->outcode)->exists();
    }

    function validateTimeslot(Request $request) {
        $timeslot = $request['timeslot'];
        $dateStr = $request['year'] . '-' . $request['month'] . '-' . $request['day'];

        try {
            $date = new DateTime($dateStr, new DateTimeZone('Europe/London'));
        } catch (\Exception $e) {
            $request->session()->forget('cart.timeslot');
            $request->session()->forget('cart.details');
            return Redirect::to('/checkout')->with('flash.errors.timeslot', 'Something went wrong! Please try again later...');
        }

        $prices = $this->getTimeslotInfo($date)['prices'];
        $info = $this->getTimeslotInfo($date)['info'];

        $this->checkTimeslotIsValid($timeslot, $info['urgent'], $request);

        // add to session
        $type = $request['from'] === '6AM' && $request['to'] === '10PM' ? 'anytime' : 'specific';
        if($type === 'anytime') $price = $prices['anytime'];
        else if($type === 'specific') $price = $prices['specific'];
        else {
            $request->session()->forget('cart.timeslot');
            $request->session()->forget('cart.details');
            return Redirect::to('/checkout')->with('flash.errors.timeslot', 'Please select a valid timeslot');
        };

        if($price !== $timeslot['price']){
            $request->session()->forget('cart.timeslot');
            $request->session()->forget('cart.details');
            return Redirect::to('/checkout')->with('flash.errors.timeslot', 'Something went wrong! Please try again later...');
        }

        return true;
    }

    private function getTimeslotInfo(DateTime $date)
    {
        $today = new DateTime("now", new DateTimeZone('Europe/London'));
        $isToday = (new DateTime("now", new DateTimeZone('Europe/London')))->format('Y-m-d') === $date->format('Y-m-d');
        $isTomorrow = (new DateTime("now", new DateTimeZone('Europe/London')))->add(new DateInterval('P1D'))->format('Y-m-d') === $date->format('Y-m-d');
        $isInTwoDays = (new DateTime("now", new DateTimeZone('Europe/London')))->add(new DateInterval('P2D'))->format('Y-m-d') === $date->format('Y-m-d');

        // if it is today before 1pm

        $isUrgent = false;
        if(($isToday && $today->format('G') < 13) || ($isTomorrow && $today->format('G') > 12)) {
            $isUrgent = true;
        }

        $lessUrgent = false;
        if(($isTomorrow && !$isUrgent) || $isInTwoDays) {
            $lessUrgent = true;
        }

        if($isUrgent) {
            $priceSpecific = ServiceFee::where('name', 'timeslot_urgent')->first()->price;
            $priceAnytime = ServiceFee::where('name', 'timeslot_urgent')->first()->price;
        }else if($lessUrgent) {
            $priceSpecific = ServiceFee::where('name', 'timeslot_specific')->first()->price;
            $priceAnytime = ServiceFee::where('name', 'timeslot_all_day')->first()->price;
        }else{
            $priceSpecific = 0;
            $priceAnytime = 0;
        }

        return [
            'prices' => [
                'anytime' => $priceAnytime,
                'specific' => $priceSpecific,
            ],
            'info' => [
                'urgent' => $isUrgent,
                'lessUrgent' => $lessUrgent,
            ]
        ];
    }

    private function checkTimeslotIsValid($timeslot, $urgent, Request $request)
    {
        $taken = Timeslot::where(['day' => $timeslot['day'], 'month' => $timeslot['month'], 'year' => $timeslot['year'], 'slot_from' => $timeslot['from'], 'slot_to' => $timeslot['to']])->first();

        if($taken) {
            $request->session()->forget('cart.timeslot');
            $request->session()->forget('cart.details');
            return Redirect::to('/checkout')->with('flash.errors.timeslot', 'This slot is already taken!');
        }

        $takenSlots = Timeslot::where(['day' => $timeslot['day'], 'month' => $timeslot['month'], 'year' => $timeslot['year']])->first();
        if($urgent && $takenSlots) {
            $request->session()->forget('cart.timeslot');
            $request->session()->forget('cart.details');
            return Redirect::to('/checkout')->with('flash.errors.timeslot', 'This slot is already taken!');
        }

        return true;
    }
}
