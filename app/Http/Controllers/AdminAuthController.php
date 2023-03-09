<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class AdminAuthController extends Controller
{
    public function create()
    {
        return Inertia::render('Admin/LogIn');
    }

    public function store(Request $request)
    {
        //dd(bcrypt('Yonus33977241'));
        $request->validate([
            'username' => ['required', 'string', Rule::exists('admins', 'username')],
            'password' => ['required', 'string'],
            'remember_me' => ['required', 'boolean']
        ]);

        $username = $request['username'];
        $password = $request['password'];
        $remember = $request['remember_me'];

        if (Auth::attempt(['username' => $username, 'password' => $password], $remember)) {
            return redirect('/admin');
        }

        //return redirect()->back();
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerate();

        return redirect('/admin/login');
    }
}
