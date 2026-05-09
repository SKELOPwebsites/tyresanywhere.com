<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\ServiceFee;
use App\Models\Timeslot;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\CarbonTimeZone;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class OrdersController extends Controller
{
    public function activeIndex()
    {
        $orders = Order::with(['user.timeslot', 'tyres'])
            ->join('users', 'users.id', '=', 'orders.user_id')
            ->join('timeslots', 'timeslots.user_id', '=', 'users.id')
            ->select('orders.*') // To ensure only order fields are selected
            ->orderByRaw("STR_TO_DATE(CONCAT(timeslots.year, '-', LPAD(timeslots.month, 2, '0'), '-', LPAD(timeslots.day, 2, '0'), ' ', timeslots.slot_from), '%Y-%m-%d %l%p') ASC")
            ->get()
            ->filter(function($order) {
                $carbon = new Carbon($order->user->timeslot->year . '-' . $order->user->timeslot->month . '-' . $order->user->timeslot->day . ' ' . $order->user->timeslot->slot_from, new CarbonTimeZone('Europe/London'));
                return $carbon->isFuture();
            });


        return Inertia::render('Admin/Orders', [
            'orders' => $orders->toArray()
        ]);
    }
    public function pastIndex()
    {
        $orders = Order::with(['user.timeslot', 'tyres'])
            ->join('users', 'users.id', '=', 'orders.user_id')
            ->join('timeslots', 'timeslots.user_id', '=', 'users.id')
            ->select('orders.*') // To ensure only order fields are selected
            ->orderByRaw("STR_TO_DATE(CONCAT(timeslots.year, '-', LPAD(timeslots.month, 2, '0'), '-', LPAD(timeslots.day, 2, '0'), ' ', timeslots.slot_from), '%Y-%m-%d %l%p') ASC")
            ->get()
            ->filter(function($order) {
                $carbon = new Carbon($order->user->timeslot->year . '-' . $order->user->timeslot->month . '-' . $order->user->timeslot->day . ' ' . $order->user->timeslot->slot_from, new CarbonTimeZone('Europe/London'));
                return $carbon->isPast();
            });

        return Inertia::render('Admin/Orders', [
            'orders' => $orders->toArray()
        ]);
    }

    public function showInvoice($order_id)
    {
        $filePath = "invoices/invoice_$order_id.pdf";
        if (!Storage::exists($filePath)) {
            dd('not found');
            return \redirect()->back();
        }

        return Storage::response($filePath, "invoice_{$order_id}.pdf", [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="invoice_'.$order_id.'.pdf"'
        ]);
    }
}
