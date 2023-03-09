<?php

namespace App\Http\Controllers;

use App\Models\Postcode;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminPostcodesController extends Controller
{
    public function index()
    {
        $postcodes = Postcode::orderBy('outcode', 'asc')->get()->toArray();

        return Inertia::render('Admin/Postcodes', [
            'postcodes' => $postcodes,
        ]);
    }

    public function store(Request $request)
    {
        $postcode = $request->validate([
            'outcode' => ['required', 'string'],
        ]);

        Postcode::create($postcode);

        return redirect()->back()->with('flash.success.admin', 'Postcode has been successfully added');
    }

    public function destroy($postcode)
    {
        Postcode::destroy($postcode);

        return redirect()->back()->with('flash.success.admin', 'Postcode has been successfully deleted');
    }
}
