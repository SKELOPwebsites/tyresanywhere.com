<?php

namespace App\Http\Controllers;

use App\Models\Postcode;
use App\Models\ServiceFee;
use App\Models\Timeslot;
use App\Models\Tyre;
use DateInterval;
use DatePeriod;
use DateTime;
use DateTimeZone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function index(Request $request)
    {
        if(!$request->session()->has('cart.tyre') || !$request->session()->get('cart.tyre')) {
            $request->session()->remove('cart');
            return Redirect::to('/cart');
        }
        $this->checkPostcodeIsValid($request);

        $tyre = $this->getCart($request->session()->get('cart.tyre'));
        $timeslot = $request->session()->get('cart.timeslot');

        // calculate subtotal and number of items
        $subtotal = 0;
        $tyres = 0;

        $subtotal += $tyre['total'];
        $tyres += $tyre['quantity'];

        if($timeslot) {
            $subtotal += $timeslot['price'];
        }

        $fitting = ServiceFee::where('name', 'fitting_r' . $tyre['rim'])->first();
        $callout = ServiceFee::where('name', 'callout_r' . $tyre['rim'])->first();
        $disposal = ServiceFee::where('name', 'tyre_disposal')->first();

        $total = $subtotal + ($fitting->price * $tyres) + $callout->price + ($disposal->price * $tyres);

        if($request->session()->has('cart.details')){
            return Inertia::render('Checkout/Checkout', [
                'tyre' => $tyre,
                'summary' => [
                    'subtotal' => number_format($subtotal, 2),
                    'fitting' => number_format($tyres * $fitting->price, 2),
                    'fitting_cost' => number_format($fitting->price, 2),
                    'callout' => number_format($callout->price, 2),
                    'disposal' => number_format($tyres * $disposal->price, 2),
                    'disposal_cost' => number_format($disposal->price, 2),
                    'total' => number_format($total, 2),
                    'total_later' => number_format(($total * 0.75), 2),
                    'total_today' => number_format(($total * 0.25), 2),
                    'total_later_pence' => round(($total * 75)),
                    'total_today_pence' => round(($total * 25)),
                ],
                'fitting_details' => $request->session()->get('cart.details'),
                'timeslot' => $request->session()->get('cart.timeslot')
            ]);
        }else {
            //$slots = $this->fittingTimeslots(0);

            return Inertia::render('Checkout/PreCheckout', [
                'tyre' => $tyre,
                'summary' => [
                    'subtotal' => number_format($subtotal, 2),
                    'fitting' => number_format($tyres * $fitting->price, 2),
                    'fitting_cost' => number_format($fitting->price, 2),
                    'callout' => number_format($callout->price, 2),
                    'disposal' => number_format($tyres * $disposal->price, 2),
                    'disposal_cost' => number_format($disposal->price, 2),
                    'total' => number_format($total, 2),
                    'total_later' => number_format(($total * 0.75), 2),
                    'total_today' => number_format(($total * 0.25), 2),
                ]
            ]);
        }
    }

    function toPayment(Request $request) {
        $request->validate([
            'phone' => ['required', 'numeric', 'digits:11'],
            'email' => ['required', 'email'],
            'postcode' => ['nullable'],
            'addressLine1' => ['required', 'string', 'max:255'],
            'addressLine2' => ['nullable', 'string', 'max:255'],
            'town' => ['required', 'string', 'max:255'],
            'registration' => ['required', 'string', 'max:9'],
        ]);

        $this->checkPostcodeIsValid($request);

        if(!$request->session()->has('cart.timeslot')) {
            return Redirect::to('/checkout')->with('flash.errors.timeslot', 'Please select a suitable timeslot to continue');
        }

        $timeslot = $request->session()->get('cart.timeslot');
        $dateStr = $timeslot['year'] . '-' . $timeslot['month'] . '-' . $timeslot['day'];

        try {
            $date = new DateTime($dateStr, new DateTimeZone('Europe/London'));
        } catch (\Exception $e) {
            $request->session()->forget('cart.timeslot');
            return Redirect::to('/checkout')->with('flash.errors.timeslot', 'Something went wrong! Please try again later...');
        }

        $prices = $this->getTimeslotInfo($date)['prices'];
        $info = $this->getTimeslotInfo($date)['info'];

        $timeslotValid = $this->checkTimeslotIsValid($timeslot, $info['urgent'], $request);

        if(!$timeslotValid) {
            return Redirect::to('/checkout')->with('flash.errors.timeslot', 'This slot is already taken!');
        }

        $type = $timeslot['from'] === '6AM' && $timeslot['to'] === '10PM' ? 'anytime' : 'specific';
        if($type === 'anytime') $price = $prices['anytime'];
        else if($type === 'specific') $price = $prices['specific'];
        else {
            $request->session()->forget('cart.timeslot');
            return Redirect::to('/checkout')->with('flash.errors.timeslot', 'Please select a valid timeslot');
        };

        if($timeslot['price'] !== $price) {
            $request->session()->forget('cart.timeslot');
            return Redirect::to('/checkout')->with('flash.errors.timeslot', 'Something went wrong! Please try again later...');
        }

        $request->session()->put('cart.details', [
            'phone' => $request['phone'],
            'email' => $request['email'],
            'addressLine1' => $request['addressLine1'],
            'addressLine2' => $request['addressLine2'],
            'town' => $request['town'],
            'postcode' => $request->session()->get('cart.postcode'),
            'registration' => $request['registration'],
        ]);

        return Redirect::to('/checkout');
    }

    function selectTimeslot(Request $request) {
        $timeslot = $request->validate([
            'day' => ['required', 'numeric', 'digits:2'],
            'month' => ['required', 'numeric', 'digits:2'],
            'year' => ['required', 'numeric', 'digits:4'],
            'from' => ['required', 'string', Rule::in(['6AM', '8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM'])],
            'to' => ['required', 'string', Rule::in(['8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM', '10PM'])],
        ]);

        $dateStr = $request['year'] . '-' . $request['month'] . '-' . $request['day'];

        try {
            $date = new DateTime($dateStr, new DateTimeZone('Europe/London'));
        } catch (\Exception $e) {
            $request->session()->forget('cart.timeslot');
            return Redirect::to('/checkout')->with('flash.errors.timeslot', 'Something went wrong! Please try again later...');
        }

        $prices = $this->getTimeslotInfo($date)['prices'];
        $info = $this->getTimeslotInfo($date)['info'];

        $timeslotValid = $this->checkTimeslotIsValid($timeslot, $info['urgent'], $request);

        if(!$timeslotValid) {
            return Redirect::to('/checkout')->with('flash.errors.timeslot', 'This slot is already taken!');
        }

        // add to session
        $type = $request['from'] === '6AM' && $request['to'] === '10PM' ? 'anytime' : 'specific';
        if($type === 'anytime') $price = $prices['anytime'];
        else if($type === 'specific') $price = $prices['specific'];
        else {
            $request->session()->forget('cart.timeslot');
            return Redirect::to('/checkout')->with('flash.errors.timeslot', 'Please select a valid timeslot');
        };

        // check if exists
        if($request->session()->has('cart.timeslot')){
            $data = $request->session()->get('cart.timeslot');
            $exists = $data['day'] === $timeslot['day'] && $data['month'] === $timeslot['month'] && $data['year'] === $timeslot['year'] && $data['from'] === $timeslot['from'] && $data['to'] === $timeslot['to'];

            if(!$exists) {
                $request->session()->put('cart.timeslot', [
                    'day' => $timeslot['day'],
                    'month' => $timeslot['month'],
                    'year' => $timeslot['year'],
                    'from' => $timeslot['from'],
                    'to' => $timeslot['to'],
                    'price' => $price,
                ]);
            } else{
                return Redirect::to('/checkout')->with('flash.errors.timeslot', 'You have already selected that timeslot!');
            }

        }else {
            $request->session()->put('cart.timeslot', [
                'day' => $timeslot['day'],
                'month' => $timeslot['month'],
                'year' => $timeslot['year'],
                'from' => $timeslot['from'],
                'to' => $timeslot['to'],
                'price' => $price,
            ]);
        }

        return Redirect::to('/checkout');
    }

    public function removeDetails(Request $request)
    {
        $request->session()->forget('cart.details');
        return Redirect::to('/checkout');
    }

    public function fittingTimeslots(Request $request)
    {
        $request->validate([
            'week' => ['required', 'numeric', 'min:0', 'max:3']
        ]);
        $week = $request['week'];

        $from = new DateTime("now", new DateTimeZone('Europe/London'));

        // if the time now is 1pm, don't show today's timeslots
        if($from->format('G') > 12) {
            $from->add(DateInterval::createFromDateString('1 day'));
        }

        // if it is saturday, add 2 days, if sunday, add 1 day
        if($from->format('D') === 'Sat') $from->add(DateInterval::createFromDateString('2 day'));
        else if($from->format('D') === 'Sun') $from->add(DateInterval::createFromDateString('1 day'));

        $daysToAdd = ($week * 5);
        $from->add(new DateInterval('P'. $daysToAdd . 'D'));

        //return $this->getTimeSlot($from);
        return Redirect::back()->with('flash.checkout.timeslots', $this->getTimeSlot($from));
    }

    private function getTimeSlot(DateTime $from)
    {
        $to = (new DateTime($from->format('Y-m-d'), new DateTimeZone('Europe/London')))->add(new DateInterval('P5D'));

        $interval = DateInterval::createFromDateString('1 day');
        $period = new DatePeriod($from, $interval, $to);

        $dates = [];
        foreach ($period as $key => $dt) {
            $prices = $this->getTimeslotInfo($dt)['prices'];
            $info = $this->getTimeslotInfo($dt)['info'];

            $takenSlots = Timeslot::where(['day' => $dt->format('d'), 'month' => $dt->format('m'), 'year' => $dt->format('Y')])->get()->toArray();

            if($info['urgent']) {
                $timeslots = [
                    0 => [
                        'from' => '6AM',
                        'to' => '10PM',
                        'type' => 'anytime',
                        'taken' => (count($takenSlots) > 0),
                    ]
                ];
            } else {
                $timeslots = $this->timeslots(120, '06:00', '22:00');
                array_unshift($timeslots, '6AM-10PM');

                $timeslots = array_map(function($timeslot) use($takenSlots) {
                    $from = explode('-', $timeslot)[0];
                    $to = explode('-', $timeslot)[1];

                    $type = $from === '6AM' && $to === '10PM' ? 'anytime' : 'specific';

                    $taken = false;
                    foreach($takenSlots as $takenSlot) {
                        if($from === $takenSlot['slot_from'] && $to === $takenSlot['slot_to']) $taken = true;
                    }

                    return [
                        'from' => $from,
                        'to' => $to,
                        'type' => $type,
                        'taken' => $taken
                    ];

                }, $timeslots);
            }

            array_push($dates, [
                'date' => $dt->format("d-m-Y"),
                'day' => $dt->format("d"),
                'month' => $dt->format("m"),
                'year' => $dt->format("Y"),
                'day_text' => $dt->format("D"),
                'long_date' => $dt->format("l d F Y"),
                'price_specific' => $prices['specific'],
                'price_anytime' => $prices['anytime'],
                'timeslots' => $timeslots
            ]);
        }

        $slots = $this->timeslots(120, '06:00', '22:00', ' - ');
        array_unshift($slots, '6AM - 10PM');

        return [
            'from' => $from->format('M jS'),
            'to' => $to->add(DateInterval::createFromDateString('-1 day'))->format('M jS'),
            'slots' => $slots,
            'dates' => $dates
        ];
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
            return false;
        }

        $takenSlots = Timeslot::where(['day' => $timeslot['day'], 'month' => $timeslot['month'], 'year' => $timeslot['year']])->first();

        if($urgent && $takenSlots) {
            return false;
        }

        return true;
    }

    private function getCart($tyre_cart)
    {
        $tyre = Tyre::where('id', $tyre_cart['id'])->first()->toArray();

        $total = $tyre_cart['quantity'] >= 4 ? number_format($tyre_cart['quantity'] * $tyre['price_offer'], 2) : number_format($tyre_cart['quantity'] * $tyre['price'], 2);
        return [...$tyre, 'quantity' => $tyre_cart['quantity'], 'total' => $total, 'type' => 'tyre'];
    }

    function timeslots($duration, $start, $end, $seperator = '-')
    {
        $start = new DateTime($start);
        $end = new DateTime($end);
        $interval = new DateInterval("PT" . $duration . "M");
        $slots = array();

        for ($intStart = $start; $intStart < $end; $intStart->add($interval)) {
            $endPeriod = clone $intStart;
            $endPeriod->add($interval);
            if ($endPeriod > $end) {
                break;
            }

            $slots[] = $intStart->format("gA") . "$seperator" . $endPeriod->format("gA");
        }

        return $slots;
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
}
