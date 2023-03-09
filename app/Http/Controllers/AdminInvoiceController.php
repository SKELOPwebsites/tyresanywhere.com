<?php

namespace App\Http\Controllers;

use App\Mail\InvoiceMail;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class AdminInvoiceController extends Controller
{
    public function index(Request $request)
    {
        if($request->session()->has('pdf_details')) {
            return Inertia::render('Admin/PDFInvoice', [
                'details' => $request->session()->get('pdf_details')
            ]);
        }
        return Inertia::render('Admin/PDFInvoice');
    }

    public function session(Request $request)
    {
        dd($request->session()->all());
    }

    public function store(Request $request)
    {
        $details = $this->getDetails($request);

        $request->session()->put('pdf_details', $details);

        return redirect()->to('/admin/pdf-invoice/preview');
    }

    public function previewInvoice(Request $request)
    {
        if (!$request->session()->has('pdf_details')) {
            return redirect()->to('/admin/pdf-invoice');
        }

        return Inertia::render('Admin/PDFInvoiceConfirm', [
            'details' => $request->session()->get('pdf_details')
        ]);
    }

    public function streamInvoice(Request $request)
    {
        if (!$request->session()->has('pdf_details')) {
            abort(400);
        }

        $invoice = PDF::loadView('admin-invoice', $request->session()->get('pdf_details'));

        return $invoice->stream('invoice.pdf');
    }

    public function send(Request $request)
    {
        $details = $this->getDetails($request);

        $invoice = PDF::loadView('admin-invoice', $details);

        Mail::to($details['recipient_email'])->send(new InvoiceMail($invoice->output(), $details['name']));
        Mail::to(config('mail.from.address'))->send(new InvoiceMail($invoice->output(), $details['name']));

        $request->session()->remove('pdf_details');
        return redirect('/admin/pdf-invoice')->with('flash.success.admin', 'Invoice has been successfully sent!');
    }

    public function getDetails(Request $request)
    {
        $details = $request->validate([
            'date' => ['required', 'date'],
            'name' => ['required', 'string'],
            'email' => ['required', 'email'],
            'phone' => ['nullable', 'numeric'],
            'address' => ['nullable', 'string'],
            'town' => ['nullable', 'string'],
            'postcode' => ['nullable', 'string'],
            'fitting_address' => ['nullable', 'string'],
            'fitting_town' => ['nullable', 'string'],
            'fitting_postcode' => ['nullable', 'string'],
            'registration' => ['nullable', 'string'],
            'fitting' => ['nullable', 'numeric'],
            'callout' => ['nullable', 'numeric'],
            'disposal' => ['nullable', 'numeric'],
            'callout_type' => ['required', 'string'],
            'tyres' => ['nullable', 'array'],
            'items' => ['nullable', 'array'],
            'payment_type' => ['required', 'string'],
            'amount_to_pay' => ['nullable', 'numeric'],
            'recipient_email' => ['required', 'email'],
        ]);

        if(!$details['amount_to_pay']){
            $details['amount_to_pay'] = 0;
        }

        $details['total'] = 0;

        if($details['tyres']) {
            $qty = 0;
            foreach($details['tyres'] as $key => $tyre){
                $details['total'] += $tyre['total'];
                $qty += $tyre['qty'];
            }

            if($details['fitting']){
                $details['total'] += $qty * $details['fitting'];
            }
            if($details['disposal']){
                $details['total'] += $qty * $details['disposal'];
            }

            $details['tyre_qty'] = $qty;
        }

        if($details['callout']) {
            $details['total'] += $details['callout'];
        }

        if($details['items']) {
            foreach($details['items'] as $key => $item){
                $details['total'] += $item['total'];
            }
        }

        return $details;
    }
}
