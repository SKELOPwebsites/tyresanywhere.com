<?php

namespace App\Http\Controllers;

use App\Mail\OrderMail;
use App\Models\Order;
use App\Models\Postcode;
use App\Models\ServiceFee;
use App\Models\Timeslot;
use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use DateTime;
use DateTimeZone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\URL;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

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
            'addressLine2' => ['nullable', 'string', 'max:255'],
            'town' => ['required', 'string', 'max:255'],
            'postcode' => ['required', 'string', 'max:255'],
            'fitting_addressLine1' => ['required', 'string', 'max:255'],
            'fitting_addressLine2' => ['nullable', 'string', 'max:255'],
            'fitting_town' => ['required', 'string', 'max:255'],
            'fitting_postcode' => ['required', 'string', 'max:255'],

            'timeslot.day' => ['required', 'numeric', 'digits:2'],
            'timeslot.month' => ['required', 'numeric', 'digits:2'],
            'timeslot.year' => ['required', 'numeric', 'digits:4'],
            'timeslot.from' => ['required', 'string', Rule::in(['6AM', '8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM'])],
            'timeslot.to' => ['required', 'string', Rule::in(['8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM', '10PM'])],

            'payment_method_id' => ['required'],
            'amount' => ['required', 'numeric'],
            'cart' => ['required', 'string'],
        ]);

        //validate fitting postcode
        $this->checkPostcodeIsValid($request);

        //validate timeslot
        $this->validateTimeslot($request);

        $user = User::create([
            'firstname' => $request['firstname'],
            'lastname' => $request['lastname'],
            'email' => $request['email'],
            'phone' => $request['phone'],
            'registration' => strtoupper($request['registration']),
            'address_1' => $request['addressLine1'],
            'address_2' => $request['addressLine2'],
            'town' => $request['town'],
            'postcode' => strtoupper($request['postcode']),
            'fitting_address_1' => $request['fitting_addressLine1'],
            'fitting_address_2' => $request['fitting_addressLine2'],
            'fitting_town' => $request['fitting_town'],
            'fitting_postcode' => strtoupper($request['fitting_postcode']),
        ]);

        //create timeslot
        $timeslot = Timeslot::create([
            'user_id' => $user['id'],
            'slot_from' => $request['timeslot']['from'],
            'slot_to' => $request['timeslot']['to'],
            'day' => $request['timeslot']['day'],
            'month' => $request['timeslot']['month'],
            'year' => $request['timeslot']['year'],
            'price' => $request['timeslot']['price'],
        ]);


        try {
            $user->createOrGetStripeCustomer();

            $payment = $user->charge(
                $request->input('amount'),
                $request->input('payment_method_id')
            );

            $payment = $payment->asStripePaymentIntent();

            $order = $user->orders()
                ->create([
                    'transaction_id' => $payment->charges->data[0]->id,
                    'total' => $payment->charges->data[0]->amount
                ]);

            $cart = json_decode($request->input('cart'), true);

            $order->tyres()
                ->attach($cart['tyre']['id'], ['quantity' => $cart['tyre']['quantity']]);


            $order->load('tyres');

            // clear cart
            $request->session()->forget('cart');

            Mail::to($request['email'])->send(new OrderMail($order['id']));
            Mail::to(config('mail.from.address'))->send(new OrderMail($order['id']));

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

        // get the tyres from session
        $tyres = $order['tyres']->toArray();
        $user = $order->user;
        $timeslot = $user->timeslot;

        // calculate subtotal and number of items
        $subtotal = $timeslot['price'];
        $items = 0;

        foreach($tyres as $tyre) {
            if($tyre['pivot']['quantity'] >= 4) {
                $subtotal += ($tyre['pivot']['quantity'] * $tyre['price_offer']);
            } else{
                $subtotal += ($tyre['pivot']['quantity'] * $tyre['price']);
            }
            $items += $tyre['pivot']['quantity'];
        }

        $fitting = ServiceFee::where('name', 'fitting_r' . $tyre['rim'])->first();
        $callout = ServiceFee::where('name', 'callout_r' . $tyre['rim'])->first();
        $disposal = ServiceFee::where('name', 'tyre_disposal')->first();

        $total = $subtotal + ($fitting->price * $items) + $callout->price + ($disposal->price * $items);

        return Inertia::render('Checkout/OrderSummary', [
            'order_summary' => $order,
            'summary' => [
                'items' => $items,
                'subtotal' => number_format($subtotal, 2),
                'fitting' => number_format($items * $fitting->price, 2),
                'fitting_cost' => number_format($fitting->price, 2),
                'callout' => number_format($callout->price, 2),
                'disposal' => number_format($items * $disposal->price, 2),
                'disposal_cost' => number_format($disposal->price, 2),
                'total' => number_format($total, 2),
                'total_later' => number_format(($total * 0.75), 2),
                'total_today' => number_format(($total * 0.25), 2),
                'total_later_pence' => round(($total * 75)),
                'total_today_pence' => round(($total * 25)),
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
            'cart' => $tyres,
        ]);
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
