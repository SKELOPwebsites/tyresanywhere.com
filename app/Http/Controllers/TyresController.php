<?php

namespace App\Http\Controllers;

use App\Models\Postcode;
use App\Models\Tyre;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class TyresController extends Controller
{
//    public function storePostcodeSizeForm($size, Request $request)
//    {
//        $this->storePostcode($request);
//
//        return Redirect::to('/tyre/'.$size);
//
//    }
    public function index($size, Request $request)
    {
        $width = substr($size, 0, 3);
        $profile = substr($size, 3, 2);
        $rim = substr($size, 5, 2);

        $validator = Validator::make([
            'width' => $width,
            'profile' => $profile,
            'rim' => $rim,
        ], [
            'width' => ['required', 'numeric'],
            'profile' => ['required', 'numeric'],
            'rim' => ['required', 'numeric'],
        ]);

        if ($validator->fails()) {
            return Redirect::to('/')->withErrors($validator)->withInput();
        }

        if(!$request->session()->has('cart.postcode') && $request->has('postcode')) {
            $this->storePostcode($request);
        }
        else if(!$request->session()->has('cart.postcode')){
            return Redirect::to('/')->with('flash.errors.postcode', 'Please provide a postcode');
        }

        $validated = $validator->validated();

        $tyres = Tyre::where('width', $validated['width'])
            ->where('profile', $validated['profile'])
            ->where('rim', $validated['rim'])
            ->where('enabled', '=', 1) ;

        $tyresCopy = $tyres->orderBy('quality', 'desc')->get()->toArray();

        $recommended_brands = ['Continental', 'Goodyear', 'Michelin', 'Pirelli', 'Bridgestone','Avon', 'Dunlop', 'Yokohama'];
        $recommended_tyres = [];

        for($i = 0; $i < (count($tyresCopy) * 2); $i++) {
            if(count($recommended_tyres) >= 2) break;
            foreach ($recommended_brands as $key => $brand) {
                if ($tyresCopy[$i]['brand'] === $brand) {
                    array_push($recommended_tyres, $tyresCopy[$i]);
                    if(count($recommended_tyres) >= 2) break;
                    unset($tyresCopy[$i]);
                    unset($recommended_brands[$key]);
                    $tyresCopy = array_values($tyresCopy);
                    $recommended_brands = array_values($recommended_brands);
                }
            }
        }

        $tyre_filters = null;
        if($request->session()->has('tyre_filters')){
            $tyre_filters = $request->session()->get('tyre_filters');

            if($tyre_filters['brand']) {
                $tyres->where('brand', $tyre_filters['brand']);
            }
            if($tyre_filters['tyre_type']) {
                $tyres->where(function (Builder $query) use ($tyre_filters){
                    foreach ($tyre_filters['tyre_type'] as $key => $type) {
                        if($key === 0) {
                            $query->where('usage', $type);
                        }
                        else {
                            $query->orWhere('usage', $type);
                        }
                    }
                });
            }
            if($tyre_filters['tyre_quality']) {
                $tyres->where(function (Builder $query) use ($tyre_filters){
                    foreach ($tyre_filters['tyre_quality'] as $key => $quality) {
                        if($key === 0) {
                            $query->where('quality', $quality);
                        }
                        else {
                            $query->orWhere('quality', $quality);
                        }
                    }
                });
            }
            if($tyre_filters['tyre_attr']) {
                $tyres->where(function (Builder $query) use ($tyre_filters){
                    foreach ($tyre_filters['tyre_attr'] as $key => $attr) {
                        if($key === 0) {
                            $query->where($attr, '=', 1);
                        }
                        else {
                            $query->orWhere($attr, '=', 1);
                        }
                    }
                });
            }
        }

        $tyres = $tyres->orderBy('quality', 'desc')->get()->toArray();

        $filter_count = 0;

        if($tyre_filters) {
            foreach ($tyre_filters as $key => $filter) {
                if(is_array($filter)){
                    $filter_count += count($filter);
                }else if($filter) {
                    $filter_count += 1;
                }
            }
        }

        return Inertia::render('Checkout/Products', [
            'tyres' => $tyres,
            'recommended_tyres' => $recommended_tyres,
            'filters' => $tyre_filters,
            'products_count' => count($tyres),
            'filter_count' => $filter_count,
        ]);
    }

    public function chooseTyreSize(Request $request)
    {
        $vehicleDetails = $request->session()->get('vehicleDetails');
        $tyreRecordList = $request->session()->get('tyreRecordList');

        return Inertia::render('Checkout/ConfirmTyreSize', [
            'vehicleDetails' => $vehicleDetails,
            'tyreRecordList' => $tyreRecordList
        ]);
    }

    public function searchCarReg(Request $request)
    {
        $request->validate([
            'registration' => ['required', 'string'],
            'postcode' => ['required', 'string'],
        ]);

        if(!$request->session()->has('cart.postcode')) {
            $this->storePostcode($request);
        }

        $curl = curl_init();

        // Set API Key
        $ApiKey = "2c90ac03-bed4-4329-99b2-ba4baecf7170";

        // Construct URL String
        $url = "https://uk1.ukvehicledata.co.uk/api/datapackage/%s?v=2&api_nullitems=1&key_vrm=%s&auth_apikey=%s";
        $url = sprintf($url, "TyreData", str_replace(' ', '', $request->registration), $ApiKey); // Syntax: sprintf($url, "PackageName", "VRM", ApiKey);

        curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET"
        ));

        // Execute cURL session and store the response in $response
        $response = curl_exec($curl);

        // If the operation failed, store the error message in $error
        $error = curl_error($curl);

        // Close cURL session
        curl_close($curl);

        // If there was an error, print it to screen. Otherwise, unserialize response and print to screen.
        if ($error) {
            return redirect()->back()->with('flash.errors.registration', 'Unexpected error, please try again later');
        }

        $decoded = json_decode($response, true);

        $vehicleDetails = $decoded['Response']['DataItems']['VehicleDetails'];
        $car = $vehicleDetails['BuildYear'] . ' ' . $vehicleDetails['Make'] . ' ' . $vehicleDetails['Model'];

        $tyreRecordList = $decoded['Response']['DataItems']['TyreDetails']['RecordList'];

        $request->session()->put('vehicleDetails', $vehicleDetails);
        $request->session()->put('tyreRecordList', $tyreRecordList);

        return \redirect()->to('/choose-tyre-size');
    }

    public function filter(Request $request)
    {
        $request->session()->put('tyre_filters', $request->all());

        return \redirect()->back();
    }


    private function storePostcode(Request $request)
    {
        if(!$this->validatePostcode($request['postcode'])){
            return Redirect::to('/')->with('flash.errors.postcode', 'Please enter a valid postcode');
        }
        if(!$this->checkPostcodeCovered($request['postcode'])){
            return Redirect::to('/')->with('flash.errors.postcode', 'We do not cover this area at the moment!');
        }

        $request->session()->put('cart.postcode', $request->get('postcode'));
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
