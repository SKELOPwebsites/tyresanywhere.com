<?php

namespace App\Http\Controllers;

use App\Models\LocalStock;
use App\Models\TyreBrand;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminLocalStockController extends Controller
{
    public function index()
    {
        $tyres = LocalStock::all()->toArray();
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

        return Inertia::render('Admin/ManageLocalStock', [
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
            'brands' => $tyre_brands
        ]);
    }

    public function store(Request $request)
    {
        $details = $request->validate([
            'width' => ['required', 'numeric'],
            'profile' => ['required', 'numeric'],
            'rim' => ['required', 'numeric'],
            'brand' => ['required', 'string'],
            'cost' => ['required', 'numeric'],
            'quantity' => ['required', 'numeric'],
            'model' => ['nullable', 'string'],
            'notes' => ['nullable', 'string'],
        ]);
        LocalStock::create($details);

        return redirect()->to('/admin/manage-local-stock');
    }

    public function update(Request $request, $tyre_id)
    {
        $tyre = LocalStock::where('id', $tyre_id)->first();

        $tyre->width = $request->get('width');
        $tyre->profile = $request->get('profile');
        $tyre->rim = $request->get('rim');
        $tyre->brand = $request->get('brand');
        $tyre->model = $request->get('model');
        $tyre->cost = $request->get('cost');
        $tyre->quantity = $request->get('quantity');
        $tyre->notes = $request->get('notes');

        $tyre->save();

        return redirect()->to('/admin/manage-local-stock');
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

    public function destroy(Request $request, $tyre_id)
    {
        LocalStock::destroy($tyre_id);

        return redirect()->to('/admin/manage-local-stock');
    }
}
