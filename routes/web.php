<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\TyresController;
use App\Models\CoveredAreas;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', function () {
    $areas = CoveredAreas::orderBy('area', 'asc')->get();

    return Inertia::render('Index', [
        'areas' => $areas->toArray()
    ]);
});
Route::get('/mobile-tyre-fitting', function () {
    $areas = CoveredAreas::orderBy('area', 'asc')->get();

    return Inertia::render('MobileTyreFitting', [
        'areas' => $areas->toArray()
    ]);
});
Route::get('/tyres', function () {
    $areas = CoveredAreas::orderBy('area', 'asc')->get();

    return Inertia::render('Tyres', [
        'areas' => $areas->toArray()
    ]);
});
Route::get('/mobile-tyre-repair', function () {
    $areas = CoveredAreas::orderBy('area', 'asc')->get();

    return Inertia::render('MobileTyreRepair', [
        'areas' => $areas->toArray()
    ]);
});
Route::get('/commercial-tyres', function () {
    $areas = CoveredAreas::orderBy('area', 'asc')->get();

    return Inertia::render('CommercialTyres', [
        'areas' => $areas->toArray()
    ]);
});
Route::get('/our-terms-and-conditions', function () {
    return Inertia::render('TermsAndConditions');
});
Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
});
Route::get('/sitemap', function () {
    return Inertia::render('Sitemap');
});
Route::get('/search-tyres', function () {
    return Inertia::render('SearchTyres');
});
Route::get('/locations/{area:slug}', function (CoveredAreas $area) {
    $areas = CoveredAreas::orderBy('area', 'asc')->get();

    return Inertia::render('Location', [
        'areas' => $areas,
        'location' => $area->area,
        'slug' => $area->slug,
    ]);
});

Route::get('/contact-us', [ContactController::class, 'index']);
Route::post('/contact-us', [ContactController::class, 'store']);

//search for a tyre
Route::post('/search-tyres', [TyresController::class, 'store']);

//display searched tyre
Route::get('/search', [TyresController::class, 'index']);


Route::get('/cart', [CartController::class, 'index']);
Route::post('/cart/remove-details', [CartController::class, 'removeDetails']);
Route::post('/cart/add', [CartController::class, 'store']);
Route::post('/cart/quantity', [CartController::class, 'changeQuantity']);
Route::post('/cart/remove', [CartController::class, 'removeCart']);

// checkout routes
//Route::get('/checkout', [CheckoutController::class, 'index']);
//Route::post('/checkout', [CheckoutController::class, 'toPayment']);
//
//Route::get('/checkout/timeslots', [CheckoutController::class, 'fittingTimeslots']);
//Route::post('/checkout/timeslots/select', [CheckoutController::class, 'selectTimeslot']);
//
//Route::post('/checkout/remove-details', [CheckoutController::class, 'removeDetails']);
//
//Route::post('/checkout/purchase', [PaymentController::class, 'purchase']);
//
//Route::get('/order-summary/{order_id}', [PaymentController::class, 'summary'])->name('order-summary');
//
//Route::get('/invoice', [PaymentController::class, 'invoice']);


require __DIR__.'/admin.php';
