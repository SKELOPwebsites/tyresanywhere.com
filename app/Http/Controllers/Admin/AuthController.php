<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function create()
    {
        //dd(bcrypt('MtJuJrSAS'));
        return Inertia::render('Admin/Login');
    }

    public function store(Request $request)
    {
        $request->validate([
            'username' => ['required', 'string', Rule::exists('admins', 'username')],
            'password' => ['required', 'string'],
            'remember_me' => ['required', 'boolean']
        ]);

        $username = $request['username'];
        $password = $request['password'];
        $remember = $request['remember_me'];

        if (Auth::attempt(['username' => $username, 'password' => $password], $remember)) {
            return redirect('/admin/inventory');
        }

        return redirect()->back();
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerate();

        return redirect('/admin/login');
    }
}
