<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\LocalStock;
use App\Models\TyreBrand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class LocalStockController extends Controller
{
    public $selected_category = null;

    public function index(Request $request, $selected_category = null)
    {
        $this->selected_category = $selected_category;

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

        $total_stocks = 0;
        $total_sold_stocks = 0;
        $total_value = 0;
        foreach($tyres as $tyre) {
            $total_stocks += $tyre['quantity'];
            $total_sold_stocks += $tyre['sold'];
            $total_value += $tyre['quantity'] * $tyre['cost'];
        }
        $stock_size = count($r14) + count($r15) + count($r16) + count($r17) + count($r18) + count($r19) + count($r20) + count($r21) + count($r22) + count($com);



        return Inertia::render('Admin/ManageLocalStock', [
            'selected_category' => $selected_category,
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
                'com' => $com,
            ],
            'total_stocks' => $total_stocks,
            'total_sold_stocks' => $total_sold_stocks,
            'total_value' => number_format($total_value, 2),
            'stock_size' => $stock_size,
            'brands' => $tyre_brands,
            'insert_id' => $request->session()->get('insert_id'),
        ]);
    }

    public function store(Request $request)
    {
        $details = $request->validate([
            'width' => ['required', 'numeric'],
            'profile' => ['required', 'numeric'],
            'rim' => ['required', 'numeric'],
            'commercial' => ['required', 'boolean'],
            'brand' => ['required', 'string'],
            'cost' => ['required', 'numeric', 'min:0'],
            'quantity' => ['required', 'numeric', 'min:0'],
            'model' => ['nullable', 'string'],
            'notes' => ['nullable', 'string'],
            'sold' => ['nullable', 'numeric', 'min:0'],
        ]);

        $tyre = LocalStock::create($details);
        $id = $tyre->id;

        $request->session()->put('insert_id', $id);
        return redirect()->to('/admin/inventory/show/R'.$details['rim']);
    }

    public function update(Request $request, $tyre_id)
    {
        $request->validate([
            'width' => ['required', 'numeric'],
            'profile' => ['required', 'numeric'],
            'rim' => ['required', 'numeric'],
            'commercial' => ['required', 'boolean'],
            'brand' => ['required', 'string'],
            'cost' => ['required', 'numeric', 'min:0'],
            'quantity' => ['required', 'numeric', 'min:0'],
            'model' => ['nullable', 'string'],
            'notes' => ['nullable', 'string'],
            'sold' => ['nullable', 'numeric', 'min:0'],
        ]);

        $tyre = LocalStock::where('id', $tyre_id)->first();

        $tyre->width = $request->get('width');
        $tyre->profile = $request->get('profile');
        $tyre->rim = $request->get('rim');
        $tyre->commercial = $request->get('commercial');
        $tyre->brand = $request->get('brand');
        $tyre->model = $request->get('model');
        $tyre->cost = $request->get('cost');
        $tyre->quantity = $request->get('quantity');
        $tyre->notes = $request->get('notes');
        $tyre->sold = $request->get('sold');

        $tyre->save();

        return redirect()->back();
    }

    public function updateColor(Request $request)
    {
        $color = $request->get('color');
        $data = $request->get('data');

        foreach($data as $col) {
            $tyre = LocalStock::where('id', $col['id'])->first();
            if($color === "default") {
                $tyre->{$col['column']} = '';
            }else {
                $tyre->{$col['column']} = $color;
            }
            $tyre->save();
        }

        return redirect()->back();
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

        return $tyres;
    }

    public function destroy(Request $request, $tyre_id)
    {
        LocalStock::destroy($tyre_id);

        return redirect()->back();
    }

    public function search(Request $request)
    {
        $search_results = null;
        if($request->width && $request->profile && $request->rim) {
            $search_results = LocalStock::where('width', $request->get('width'))
                ->where('profile', $request->get('profile'))
                ->where('rim', $request->get('rim'))
                ->orderBy('brand')
                ->get();
        }

        return Inertia::render('Admin/SearchInventory', [
            'search_results' => $search_results
        ]);
    }
    public function processSearch(Request $request)
    {
        $request->validate([
            'width' => ['required'],
            'profile' => ['required'],
            'rim' => ['required'],
        ]);

        $width = $request->width;
        $profile = $request->profile;
        $rim = $request->rim;

        return Redirect::to("/admin/inventory/search/?width=$width&profile=$profile&rim=$rim");
    }

    public function sellTyre(Request $request) {
        $id = $request->get('id');

        $tyre = LocalStock::where('id', $id)->first();

        if($tyre->quantity > 0) {
            $tyre->quantity -= 1;
            $tyre->sold += 1;
        }

        $tyre->save();

        return redirect()->back();
    }
}
