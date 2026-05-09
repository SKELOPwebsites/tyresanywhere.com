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
    return Inertia::render('Main/Index');
});
Route::get('/mobile-tyre-fitting', function () {
    return Inertia::render('Main/MobileTyreFitting');
});
Route::get('/tyres', function () {
    return Inertia::render('Main/Tyres');
});
Route::get('/mobile-tyre-repair', function () {
    return Inertia::render('Main/MobileTyreRepair');
});
Route::get('/commercial-tyres', function () {
    return Inertia::render('Main/CommercialTyres');
});
Route::get('/breakdown-recovery', function () {
    return Inertia::render('Main/BreakdownRecovery');
});
Route::get('/our-terms-and-conditions', function () {
    return Inertia::render('Main/TermsAndConditions');
});
Route::get('/privacy-policy', function () {
    return Inertia::render('Main/PrivacyPolicy');
});
Route::get('/sitemap', function () {
    $areas = CoveredAreas::orderBy('slug', 'asc')->get()->groupBy(function($area) {
        return strtoupper(substr($area['slug'], 0, 1));
    })->toArray();

    ksort($areas); // Sort the groups alphabetically by key (A-Z)

    return Inertia::render('Main/Sitemap', [
        'areas' => $areas
    ]);
});
Route::get('/search-tyres', function () {
    return Inertia::render('Main/SearchTyres');
});
Route::get('/locations/{area:slug}', function (CoveredAreas $area) {
    return Inertia::render('Main/Location', [
        'location' => ucwords($area->area),
        'slug' => $area->slug
    ]);
});

Route::get('/contact-us', [ContactController::class, 'index']);
Route::post('/contact-us', [ContactController::class, 'store']);


Route::get('/tyre/{size}', [TyresController::class, 'index']);

Route::post('/tyre/filter', [TyresController::class, 'filter']);

////search for a tyre
//Route::post('/search-tyres', [TyresController::class, 'store']);
//
////display searched tyre
//Route::get('/search', [TyresController::class, 'index']);


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
