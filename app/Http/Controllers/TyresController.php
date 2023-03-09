<?php

namespace App\Http\Controllers;

use App\Models\Postcode;
use App\Models\Tyre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class TyresController extends Controller
{
    public function index(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'width' => ['required', 'numeric'],
            'profile' => ['required', 'numeric'],
            'rim' => ['required', 'numeric'],
            'postcode' => ['required', 'string'],
        ]);

        if ($validator->fails()) {
            return Redirect::to('/')->withErrors($validator)->withInput();
        }

        if(!$this->validatePostcode($request['postcode'])){
            return Redirect::to('/')->with('flash.errors.postcode', 'Please enter a valid postcode');
        }
        if(!$this->checkPostcodeCovered($request['postcode'])){
            return Redirect::to('/')->with('flash.errors.postcode', 'We do not cover this area at the moment!');
        }

        //add postcode to session
        $request->session()->put('cart.postcode', $request['postcode']);

        $validated = $validator->validated();

        $tyres = Tyre::where('width', $validated['width'])
            ->where('profile', $validated['profile'])
            ->where('rim', $validated['rim'])
            ->orderBy('price')
            ->get();

        return Inertia::render('Checkout/Products', [
            'tyres' => $tyres
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'width' => ['required', 'numeric'],
            'profile' => ['required', 'numeric'],
            'rim' => ['required', 'numeric'],
            'postcode' => ['required', 'string'],
        ]);
        if(!$this->validatePostcode($request['postcode'])){
            return Redirect::back()->with('flash.errors.postcode', 'Please enter a valid postcode');
        }
        if(!$this->checkPostcodeCovered($request['postcode'])){
            return Redirect::back()->with('flash.errors.postcode', 'We do not cover this area at the moment!');
        }

        $width = $request['width'];
        $profile = $request['profile'];
        $rim = $request['rim'];
        $postcode = str_replace(' ', '', $request['postcode']);

        return Redirect::to("/search?width=$width&profile=$profile&rim=$rim&postcode=$postcode");
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
