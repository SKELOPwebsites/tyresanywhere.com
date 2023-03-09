<?php

namespace App\Http\Controllers;

use App\Models\Tyre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index(Request $request)
    {
        $tyre = null;

        if($request->session()->has('cart.tyre')) {
            // get the tyres from session
            $tyres_in_session = $request->session()->get('cart.tyre');

            $tyre = Tyre::where('id', $tyres_in_session['id'])->first()->toArray();
            $tyre = [...$tyre, 'quantity' => $tyres_in_session['quantity']];
        }

        // calculate subtotal and number of items
        $subtotal = 0;
        $items = 0;

        if($tyre) {
            if($tyre['quantity'] >= 4) {
                $subtotal += ($tyre['quantity'] * $tyre['price_offer']);
            } else{
                $subtotal += ($tyre['quantity'] * $tyre['price']);
            }

            $items += $tyre['quantity'];
        }

        // send the data over to frontend
        return Inertia::render('Checkout/Cart', [
            'cart' => $tyre,
            'subtotal' => number_format($subtotal, 2),
            'items' => $items,
        ]);
    }

    public function removeDetails(Request $request)
    {
        $request->session()->forget('cart.details');
        $request->session()->forget('cart.timeslot');
        return Redirect::to('/cart');
    }

    public function store(Request $request)
    {
        // assume we are getting tyre_id
        $request->validate([
            'tyre_id' => ['required', 'numeric'],
            'quantity' => ['required', 'numeric', 'min:2', 'max:5'],
        ]);

        $request->session()->put('cart.tyre', [
            'id' => $request['tyre_id'],
            'quantity' => $request['quantity']
        ]);

        return Redirect::back()->with('flash.success.cart.add', 'Item successfully added to your cart.');
    }

    public function changeQuantity(Request $request)
    {
        // assume we are getting tyre_id
        $request->validate([
            'tyre_id' => ['required', 'numeric'],
            'quantity' => ['required', 'numeric', Rule::in([0, 2, 3, 4, 5])]
        ]);

        $data = $request->session()->get('cart.tyre');
        $data['quantity'] = $request['quantity'];

        if($request['quantity'] <= 0) {
            $request->session()->remove('cart');
        }else {
            $request->session()->put('cart.tyre', $data);
        }

        return Redirect::back()->with('flash.success.cart.add', 'Quantity successfully updated.');
    }

    public function removeCart(Request $request)
    {
        $request->session()->forget('cart');
        return Redirect::to('/cart');
    }
}
