<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Configuration;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ConfigController extends Controller
{
    public function index()
    {
        $configs = Configuration::all();
        return Inertia::render('Admin/Configurations', [
            'configs' => $configs
        ]);
    }

    public function update(Request $request, $config_id)
    {
        $config = Configuration::where('id', $config_id)->first();

        if($config->validation){
            $details = $request->validate([
                'value' => $config->validation
            ]);
            $config->update($details);
        }else {
            $config->update($request->get('value'));
        }

        return redirect()->back()->with('flash.success.admin', 'Configurations has been successfully updated');
    }

}
