<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TyreBrand;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TyreBrandsController extends Controller
{
    public function index()
    {
        $brands = TyreBrand::orderBy('brand', 'ASC')->get();

        return Inertia::render('Admin/Brands', [
            'brands' => $brands
        ]);
    }

    public function store(Request $request)
    {
        $brand = $request->validate([
            'brand' => ['required', 'string'],
        ]);

        TyreBrand::create($brand);

        return redirect()->back()->with('flash.success.admin', 'Brand has been successfully added');
    }

    public function destroy($brand_id)
    {
        TyreBrand::destroy($brand_id);

        return redirect()->back()->with('flash.success.admin', 'Brand has been successfully deleted');
    }
}
