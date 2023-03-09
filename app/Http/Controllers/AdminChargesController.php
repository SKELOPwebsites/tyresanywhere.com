<?php

namespace App\Http\Controllers;

use App\Models\ServiceFee;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminChargesController extends Controller
{
    public function index()
    {
        $service_fees = ServiceFee::all()->toArray();

        return Inertia::render('Admin/Charges', [
            'service_fees' => $service_fees,
        ]);
    }

    public function update(Request $request, $service_fee_id)
    {
        $details = $request->validate([
            'price' => ['required', 'numeric']
        ]);

        ServiceFee::where('id', $service_fee_id)->first()->update($details);

        return redirect()->back()->with('flash.success.admin', 'Service Fee has been successfully updated');
    }
}
