<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\ServiceFee;
use App\Models\Timeslot;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\CarbonTimeZone;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AdminOrdersController extends Controller
{
    public function activeIndex()
    {
        $orders = Order::with('user.timeslot')
            ->get()
            ->filter(function($order) {
                $carbon = new Carbon($order->user->timeslot->year . '-' . $order->user->timeslot->month . '-' . $order->user->timeslot->day . ' ' . $order->user->timeslot->slot_from, new CarbonTimeZone('Europe/London'));
                return $carbon->isFuture();
            });

        return Inertia::render('Admin/Orders', [
            'orders' => $orders->toArray(),
        ]);
    }
    public function pastIndex()
    {
        $orders = Order::with('user.timeslot')
            ->get()
            ->filter(function($order) {
                $carbon = new Carbon($order->user->timeslot->year . '-' . $order->user->timeslot->month . '-' . $order->user->timeslot->day . ' ' . $order->user->timeslot->slot_from, new CarbonTimeZone('Europe/London'));
                return $carbon->isPast();
            });

        return Inertia::render('Admin/Orders', [
            'orders' => $orders->toArray(),
        ]);
    }

    function pdfInvoice($order_id) {
        $order = Order::where('id', $order_id)->with('user.timeslot')->first();

        if(!$order){
            return Redirect::to('/admin');
        }

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
            'order_id' => $order->id,
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

        return $invoice->stream('invoice.pdf');
    }
}
