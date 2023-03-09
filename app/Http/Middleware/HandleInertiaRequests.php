<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'flash' => [
                'errors' => [
                    'postcode' => fn () => $request->session()->get('flash.errors.postcode'),
                    'timeslot' => fn () => $request->session()->get('flash.errors.timeslot'),
                    'auth' => fn () => $request->session()->get('flash.errors.auth')
                ],
                'success' => [
                    'cart' => [
                        'add' => fn () => $request->session()->get('flash.success.cart.add'),
                    ],
                    'admin' => fn () => $request->session()->get('flash.success.admin')
                ],
                'checkout' => [
                    'timeslots' => fn () => $request->session()->get('flash.checkout.timeslots'),
                ]
            ],
            'cart' => [
                'tyre' => fn () => $request->session()->get('cart.tyre'),
                'timeslot' => fn () => $request->session()->get('cart.timeslot'),
                'postcode' => fn () => $request->session()->get('cart.postcode'),
            ],
            'tyre_sizes' => DB::table('tyre_sizes')->select('width', 'profile', 'rim')->get()
        ]);
    }
}
