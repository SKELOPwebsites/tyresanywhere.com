<?php

namespace App\Http\Controllers;

use App\Models\TyreSize;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminTyreSizesController extends Controller
{
    public function index()
    {
        $sizes = TyreSize::orderBy('rim', 'ASC')->orderBy('width', 'ASC')->orderBy('profile', 'ASC')->get();

        return Inertia::render('Admin/ManageTyreSizes', [
            'sizes' => $sizes,
        ]);
    }

    public function store(Request $request)
    {
        $size = $request->validate([
            'width' => ['required', 'numeric'],
            'profile' => ['required', 'numeric'],
            'rim' => ['required', 'numeric'],
        ]);

        TyreSize::create($size);

        return redirect()->back()->with('flash.success.admin', 'Size has been successfully added');
    }

    public function destroy($size)
    {
        TyreSize::destroy($size);

        return redirect()->back()->with('flash.success.admin', 'Size has been successfully deleted');
    }
}
