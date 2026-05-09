<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tyre;
use App\Models\TyreBrand;
use App\Models\TyreSize;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class TyresController extends Controller
{
    public function index(Request $request)
    {
        $tyres = Tyre::all()->toArray();
        $tyre_brands = TyreBrand::all()->pluck('brand')->toArray();

        $r14 = $this->sortTyres($tyres, 14);
        $r15 = $this->sortTyres($tyres, 15);
        $r16 = $this->sortTyres($tyres, 16);
        $r17 = $this->sortTyres($tyres, 17);
        $r18 = $this->sortTyres($tyres, 18);
        $r19 = $this->sortTyres($tyres, 19);
        $r20 = $this->sortTyres($tyres, 20);
        $r21 = $this->sortTyres($tyres, 21);
        $r22 = $this->sortTyres($tyres, 22);
        $com = $this->sortTyres($tyres, null, true);

        return Inertia::render('Admin/ManageProducts', [
            'tyres' => [
                'R14' => $r14,
                'R15' => $r15,
                'R16' => $r16,
                'R17' => $r17,
                'R18' => $r18,
                'R19' => $r19,
                'R20' => $r20,
                'R21' => $r21,
                'R22' => $r22,
                'Com' => $com,
            ],
            'brands' => $tyre_brands,
        ]);
    }

    function sortTyres($tyres, $rim, $commercial = false) {
        if($commercial) {
            $tyres = array_filter($tyres, function($tyre) {
                return $tyre['commercial'] === 1;
            });
        } else {
            $tyres = array_filter($tyres, function($tyre) use ($rim) {
                return $tyre['rim'] == $rim && !$tyre['commercial'];
            });
        }
        $tyres = array_values($tyres);

        usort($tyres, function($a, $b) {
            return [$a['width'], $a['profile']]
                <=>
                [$b['width'], $b['profile']];
        });
        if($commercial) {
            usort($tyres, function($a, $b) {
                return [$a['rim']]
                    <=>
                    [$b['rim']];
            });
        }

        $out = [];

        foreach($tyres as $tyre) {
            if(array_key_exists($tyre['width'] . '/' . $tyre['profile'] . ' R' . $tyre['rim'], $out)) {
                array_push($out[$tyre['width'] . '/' . $tyre['profile'] . ' R' . $tyre['rim']], $tyre);
            } else {
                $out = [
                    ...$out,
                    $tyre['width'] . '/' . $tyre['profile'] . ' R' . $tyre['rim'] => [0 => $tyre]
                ];
            }
        }

        return [...$out, 'count' => count($tyres)];

        return $tyres;
    }

    public function create(Request $request)
    {
        $request->validate([
            'copy' => ['nullable', Rule::exists('tyres', 'id')]
        ]);

        $tyre = null;
        if($request->has('copy')) {
            $tyre = Tyre::where('id', $request['copy'])->first()->toArray();
        }

        $tyre_brands = TyreBrand::all()->pluck('brand')->toArray();

        $tyre_sizes = TyreSize::orderBy('rim', 'ASC')->orderBy('width', 'ASC')->orderBy('profile', 'ASC')->get()->makeHidden(['id'])->toArray();
        $tyre_sizes = array_map(function ($size) {
            return $size['width'] . '/' . $size['profile'] . ' R' . $size['rim'];
        }, $tyre_sizes);

        if($tyre) {
            return Inertia::render('Admin/Tyre/Copy', [
                'tyre' => $tyre,
                'tyre_brands' => $tyre_brands,
                'tyre_sizes' => $tyre_sizes
            ]);
        }
        else {
            return Inertia::render('Admin/Tyre/Create', [
                'tyre_brands' => $tyre_brands,
                'tyre_sizes' => $tyre_sizes
            ]);
        }
    }

    public function store(Request $request)
    {
        $details = $request->validate([
            'brand' => ['required', 'string'],
            'model' => ['required', 'string'],
            'size' => ['required', 'string'],
            'speed' => ['required', 'string'],
            'fuel' => ['required', 'string', 'size:1'],
            'wet' => ['required', 'string', 'size:1'],
            'noise' => ['required', 'numeric' ],
            'quality' => ['required', 'string', Rule::in(['budget', 'midrange', 'premium'])],
            'usage' => ['required', 'string', Rule::in(['passenger', '4x4', 'passenger_4x4', 'commercial', 'other'])],
            'extra_load' => ['required', 'boolean'],
            'runflat' => ['required', 'boolean'],
            'season' => ['required', 'string', Rule::in(['none', 'all-season', 'summer', 'winter'])],
            'price' => ['required', 'numeric'],
            'price_offer' => ['required', 'numeric'],
        ]);

        $details = [
            ...$details,
            'width' => explode('/', $details['size'])[0],
            'profile' => explode('/', explode(' ', $details['size'])[0])[1],
            'rim' => explode('R', $details['size'])[1],
            'commercial' => $details['usage'] === 'commercial',
        ];
        unset($details['size']);

        Tyre::create($details);

        return redirect()->back()->with('flash.success.admin', 'Tyre has been successfully added');
    }

    public function edit(Request $request, $tyre_id)
    {
        $tyre = Tyre::where('id', $tyre_id)->first()->toArray();
        $tyre_brands = TyreBrand::all()->pluck('brand')->toArray();

        $tyre_sizes = TyreSize::orderBy('rim', 'ASC')->orderBy('width', 'ASC')->orderBy('profile', 'ASC')->get()->makeHidden(['id'])->toArray();
        $tyre_sizes = array_map(function ($size) {
            return $size['width'] . '/' . $size['profile'] . ' R' . $size['rim'];
        }, $tyre_sizes);

        return Inertia::render('Admin/Tyre/Edit', [
            'tyre' => $tyre,
            'tyre_brands' => $tyre_brands,
            'tyre_sizes' => $tyre_sizes
        ]);
    }

    public function update(Request $request, $tyre_id)
    {
        $details = $request->validate([
            'width' => ['required', 'numeric'],
            'profile' => ['required', 'numeric'],
            'rim' => ['required', 'numeric'],
            'commercial' => ['required', 'boolean'],
            'brand' => ['required', 'string'],
            'model' => ['required', 'string'],
            'quality' => ['required', 'string', Rule::in(['budget', 'midrange', 'premium'])],
            'speed' => ['required', 'string'],
            'usage' => ['required', 'string', Rule::in(['passenger', '4x4', 'passenger_4x4', 'commercial', 'other'])],
            'season' => ['required', 'string', Rule::in(['none', 'all-season', 'summer', 'winter'])],
            'extra_load' => ['required', 'boolean'],
            'runflat' => ['required', 'boolean'],
            'fuel' => ['required', 'string', 'size:1'],
            'wet' => ['required', 'string', 'size:1'],
            'noise' => ['required', 'numeric' ],
            'price' => ['required', 'numeric'],
            'price_offer' => ['required', 'numeric'],
        ]);

        Tyre::where('id', $tyre_id)->first()->update($details);

        return redirect()->back()->with('flash.success.admin', 'Tyre has been successfully updated');
    }

    public function destroy(Request $request, $tyre_id)
    {
        Tyre::destroy($tyre_id);

        return redirect()->back()->with('flash.success.admin', 'Tyre has been successfully deleted');
    }

    public function enable(Request $request, $tyre_id)
    {
        $request->validate([
            'enabled' => ['required', 'boolean'],
        ]);

        $tyre = Tyre::where('id', $tyre_id)->first();

        $tyre->enabled = $request->get('enabled');
        $tyre->save();

        return redirect()->back();
    }

    public function bulkAdjust(Request $request)
    {
        return Inertia::render('Admin/BulkAdjustProducts');
    }

    public function bulkPrice(Request $request)
    {
        $validated = $request->validate([
            'add' => ['required', 'numeric'],
            'query' => ['required', Rule::in(['Everything','R14','R15','R16','R17','R18','R19','R20','R21','R22','Commercial'])],
            'cols' => ['required', Rule::in(['all','price','price_offer'])],
        ]);

        if(in_array($validated['query'], ['R14','R15','R16','R17','R18','R19','R20','R21','R22'])) {
            $query = preg_replace("/[^0-9]/", "", $validated['query'] );

            if($validated['cols'] === 'all') {
                Tyre::where('rim', '=', $query)
                    ->where('commercial', '=', 0)
                    ->update(['price' => DB::raw('price + '.$request->get('add')), 'price_offer' => DB::raw('price_offer + '.$request->get('add'))]);
            }else {
                Tyre::where('rim', '=', $query)
                    ->where('commercial', '=', 0)
                    ->update([$validated['cols'] => DB::raw($validated['cols'].' + '.$request->get('add'))]);
            }
        }
        if($validated['query'] === 'Commercial'){
            if($validated['cols'] === 'all') {
                Tyre::where('commercial', '=', 1)
                    ->update(['price' => DB::raw('price + '.$request->get('add')), 'price_offer' => DB::raw('price_offer + '.$request->get('add'))]);
            }else {
                Tyre::where('commercial', '=', 1)
                    ->update([$validated['cols'] => DB::raw($validated['cols'].' + '.$request->get('add'))]);
            }
        }
        if($validated['query'] === 'Everything'){
            if($validated['cols'] === 'all') {
                Tyre::query()->update(['price' => DB::raw('price + '.$request->get('add')), 'price_offer' => DB::raw('price_offer + '.$request->get('add'))]);
            }else {
                Tyre::query()->update([$validated['cols'] => DB::raw($validated['cols'].' + '.$request->get('add'))]);
            }
        }

        return redirect()->back()->with('flash.success.admin', 'Changes successful');
    }

    public function bulkAction(Request $request)
    {
        $validated = $request->validate([
            'bulkAction' => ['required', Rule::in(['enable', 'disable', 'delete'])],
            'query' => ['required', Rule::in(['Everything','R14','R15','R16','R17','R18','R19','R20','R21','R22','Commercial'])],
        ]);

        if (in_array($validated['bulkAction'], ['enable', 'disable'])){
            $enabled = $validated['bulkAction'] === 'enable' ? 1 : 0;

            if(in_array($validated['query'], ['R14','R15','R16','R17','R18','R19','R20','R21','R22'])) {
                $query = preg_replace("/[^0-9]/", "", $validated['query'] );

                Tyre::where('rim', '=', $query)
                    ->where('commercial', '=', 0)
                    ->update(['enabled' => $enabled]);
            }
            if($validated['query'] === 'Commercial'){
                Tyre::where('commercial', '=', 1)
                    ->update(['enabled' => $enabled]);
            }
            if($validated['query'] === 'Everything'){
                Tyre::query()
                    ->update(['enabled' => $enabled]);
            }
        }

        // delete action
        if($validated['bulkAction'] === 'delete') {
            if(in_array($validated['query'], ['R14','R15','R16','R17','R18','R19','R20','R21','R22'])) {
                $query = preg_replace("/[^0-9]/", "", $validated['query'] );

                Tyre::where('rim', '=', $query)
                    ->where('commercial', '=', 0)
                    ->delete();
            }
            if($validated['query'] === 'Commercial'){
                Tyre::where('commercial', '=', 1)
                    ->delete();
            }
            if($validated['query'] === 'Everything'){
                Tyre::truncate();
            }
        }

        //redirect with message
        return redirect()->back()->with('flash.success.admin', 'Changes successful');
    }
}
