<?php

namespace App\Http\Controllers;

use App\Models\Tyre;
use App\Models\TyreBrand;
use App\Models\TyreSize;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class AdminTyresController extends Controller
{
    public function index(Request $request)
    {
        $tyres = Tyre::all()->toArray();

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

        return Inertia::render('Admin/ManageInventory', [
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
            ]
        ]);
    }

    function sortTyres($tyres, $rim, $commercial = false) {
        if($commercial) {
            $tyres = array_filter($tyres, function($tyre) {
                return $tyre['commercial'] === 1;
            });
        } else {
            $tyres = array_filter($tyres, function($tyre) use ($rim) {
                return $tyre['rim'] == $rim;
            });
        }
        $tyres = array_values($tyres);

        usort($tyres, function($a, $b) {
            return [$a['width'], $a['profile']]
                <=>
                [$b['width'], $b['profile']];
        });

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
                'tyre_sizes' => $tyre_sizes,
            ]);
        }
        else {
            return Inertia::render('Admin/Tyre/Create', [
                'tyre_brands' => $tyre_brands,
                'tyre_sizes' => $tyre_sizes,
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
            'season' => ['required', 'string', Rule::in(['none', 'all-season', 'summer', 'winter'])],
            'header' => ['required', 'string'],
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

        $details['header'] = $details['header'] === 'default' ? $details['quality'] : $details['header'];

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
            'tyre_sizes' => $tyre_sizes,
        ]);
    }

    public function update(Request $request, $tyre_id)
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
            'season' => ['required', 'string', Rule::in(['none', 'all-season', 'summer', 'winter'])],
            'header' => ['required', 'string'],
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

        $details['header'] = $details['header'] === 'default' ? $details['quality'] : $details['header'];

        Tyre::where('id', $tyre_id)->first()->update($details);

        return redirect()->back()->with('flash.success.admin', 'Tyre has been successfully updated');
    }

    public function destroy(Request $request, $tyre_id)
    {
        Tyre::destroy($tyre_id);

        return redirect()->back()->with('flash.success.admin', 'Tyre has been successfully deleted');
    }
}
