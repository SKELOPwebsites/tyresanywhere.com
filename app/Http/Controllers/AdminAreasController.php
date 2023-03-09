<?php

namespace App\Http\Controllers;

use App\Models\CoveredAreas;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AdminAreasController extends Controller
{
    public function index()
    {
        $areas = CoveredAreas::orderBy('area', 'asc')->get()->toArray();

        return Inertia::render('Admin/CoveredAreas', [
            'areas' => $areas,
        ]);
    }

    public function store(Request $request)
    {
        $area = $request->validate([
            'area' => ['required', 'string'],
        ]);

        $area = [
            ...$area,
            'slug' => Str::slug($area['area']),
        ];

        CoveredAreas::create($area);

        return redirect()->back()->with('flash.success.admin', 'Covered Area has been successfully added');
    }

    public function destroy($postcode)
    {
        CoveredAreas::destroy($postcode);

        return redirect()->back()->with('flash.success.admin', 'Covered Area has been successfully deleted');
    }

}
