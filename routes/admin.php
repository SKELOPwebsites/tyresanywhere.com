<?php

use App\Http\Controllers\Admin\AreasController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\ChargesController;
use App\Http\Controllers\Admin\ConfigController;
use App\Http\Controllers\Admin\InvoiceController;
use App\Http\Controllers\Admin\LocalStockController;
use App\Http\Controllers\Admin\OrdersController;
use App\Http\Controllers\Admin\PostcodesController;
use App\Http\Controllers\Admin\TyresController;
use App\Http\Controllers\Admin\TyreSizesController;
use App\Http\Controllers\Admin\TyreBrandsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['admin'])->group(function () {
    Route::get('/admin', function() {
        return redirect('/admin/inventory');
    });

    Route::prefix('/admin')->group(function() {
        Route::post('/logout', [AuthController::class, 'logout']);

        Route::get('/view-products', [TyresController::class, 'index']);

        Route::get('/tyres/create', [TyresController::class, 'create']);
        Route::post('/tyres/create', [TyresController::class, 'store']);
        Route::get('/tyres/{tyre}/edit', [TyresController::class, 'edit']);
        Route::post('/products/{tyre}', [TyresController::class, 'update']);
        Route::delete('/tyres/{tyre}', [TyresController::class, 'destroy']);
        Route::put('/tyres/enable/{tyre}', [TyresController::class, 'enable']);

        Route::get('/bulk-adjust-products', [TyresController::class, 'bulkAdjust']);
        Route::post('/tyres/bulk-price', [TyresController::class, 'bulkPrice']);
        Route::post('/tyres/bulk-action', [TyresController::class, 'bulkAction']);

        Route::get('/manage-tyre-sizes', [TyreSizesController::class, 'index']);

        Route::post('/sizes', [TyreSizesController::class, 'store']);
        Route::delete('/sizes/{size}', [TyreSizesController::class, 'destroy']);

        Route::get('/inventory', [LocalStockController::class, 'index']);
        Route::post('/inventory', [LocalStockController::class, 'store']);
        Route::get('/inventory/show/{selected_category}', [LocalStockController::class, 'index']);

        Route::get('/inventory/search', [LocalStockController::class, 'search']);
        Route::post('/inventory/search', [LocalStockController::class, 'processSearch']);

        Route::put('/inventory/{tyre}', [LocalStockController::class, 'update']);
        Route::post('/inventory/color', [LocalStockController::class, 'updateColor']);
        Route::post('/inventory/sell-tyre', [LocalStockController::class, 'sellTyre']);
        Route::delete('/inventory/{tyre}', [LocalStockController::class, 'destroy']);

        Route::get('/manage-tyre-brands', [TyreBrandsController::class, 'index']);
        Route::post('/manage-tyre-brands', [TyreBrandsController::class, 'store']);
        Route::delete('/manage-tyre-brands/{brand}', [TyreBrandsController::class, 'destroy']);

        Route::get('/orders/active', [OrdersController::class, 'activeIndex']);
        Route::get('/orders/{order}/pdf', [OrdersController::class, 'pdfInvoice']);

        Route::get('/orders', [OrdersController::class, 'pastIndex']);
        Route::get('/invoices/{order_id}', [OrdersController::class, 'showInvoice']);

        Route::get('/service-charges', [ChargesController::class, 'index']);
        Route::put('/service-charges/{service}', [ChargesController::class, 'update']);

        Route::get('/covered-postcodes', [PostcodesController::class, 'index']);
        Route::post('/covered-postcodes', [PostcodesController::class, 'store']);
        Route::delete('/covered-postcodes/{postcode}', [PostcodesController::class, 'destroy']);

        Route::get('/covered-areas', [AreasController::class, 'index']);
        Route::post('/covered-areas', [AreasController::class, 'store']);
        Route::delete('/covered-areas/{area}', [AreasController::class, 'destroy']);

        Route::get('/pdf-invoice', [InvoiceController::class, 'index']);
        Route::post('/pdf-invoice', [InvoiceController::class, 'store']);

        Route::get('/pdf-invoice/preview', [InvoiceController::class, 'previewInvoice']);
        Route::get('/pdf-invoice/stream', [InvoiceController::class, 'streamInvoice']);
        Route::post('/pdf-invoice/send', [InvoiceController::class, 'send']);

        Route::get('/config', [ConfigController::class, 'index']);
        Route::put('/config/{id}', [ConfigController::class, 'update']);
    });
});

Route::middleware(['guest'])->group(function () {
    Route::get('/admin/login', [AuthController::class, 'create']);
    Route::post('/admin/login', [AuthController::class, 'store']);
});
