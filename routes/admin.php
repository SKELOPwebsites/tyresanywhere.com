<?php

use App\Http\Controllers\AdminAreasController;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\AdminChargesController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminInvoiceController;
use App\Http\Controllers\AdminLocalStockController;
use App\Http\Controllers\AdminOrdersController;
use App\Http\Controllers\AdminPostcodesController;
use App\Http\Controllers\AdminTyresController;
use App\Http\Controllers\AdminTyreSizesController;
use Illuminate\Support\Facades\Route;

Route::middleware(['admin'])->group(function () {
    Route::get('/admin', [AdminController::class, 'index']);

    Route::prefix('/admin')->group(function() {
        Route::post('/logout', [AdminAuthController::class, 'logout']);

        Route::get('/manage-inventory', [AdminTyresController::class, 'index']);

        Route::get('/tyres/create', [AdminTyresController::class, 'create']);
        Route::post('/tyres', [AdminTyresController::class, 'store']);
        Route::get('/tyres/{tyre}/edit', [AdminTyresController::class, 'edit']);
        Route::put('/tyres/{tyre}', [AdminTyresController::class, 'update']);
        Route::delete('/tyres/{tyre}', [AdminTyresController::class, 'destroy']);


        Route::get('/manage-tyre-sizes', [AdminTyreSizesController::class, 'index']);

        Route::post('/sizes', [AdminTyreSizesController::class, 'store']);
        Route::delete('/sizes/{size}', [AdminTyreSizesController::class, 'destroy']);

        Route::get('/manage-local-stock', [AdminLocalStockController::class, 'index']);
        Route::post('/manage-local-stock', [AdminLocalStockController::class, 'store']);
        Route::put('/manage-local-stock/{tyre}', [AdminLocalStockController::class, 'update']);
        Route::delete('/manage-local-stock/{tyre}', [AdminLocalStockController::class, 'destroy']);

        Route::get('/orders/active', [AdminOrdersController::class, 'activeIndex']);
        Route::get('/orders/{order}/pdf', [AdminOrdersController::class, 'pdfInvoice']);

        Route::get('/orders/past', [AdminOrdersController::class, 'pastIndex']);

        Route::get('/charges', [AdminChargesController::class, 'index']);
        Route::put('/charges/{service}', [AdminChargesController::class, 'update']);

        Route::get('/covered-postcodes', [AdminPostcodesController::class, 'index']);
        Route::post('/covered-postcodes', [AdminPostcodesController::class, 'store']);
        Route::delete('/covered-postcodes/{postcode}', [AdminPostcodesController::class, 'destroy']);

        Route::get('/covered-areas', [AdminAreasController::class, 'index']);
        Route::post('/covered-areas', [AdminAreasController::class, 'store']);
        Route::delete('/covered-areas/{area}', [AdminAreasController::class, 'destroy']);

        Route::get('/session', [AdminInvoiceController::class, 'session']);
        Route::get('/pdf-invoice', [AdminInvoiceController::class, 'index']);
        Route::post('/pdf-invoice', [AdminInvoiceController::class, 'store']);

        Route::get('/pdf-invoice/preview', [AdminInvoiceController::class, 'previewInvoice']);
        Route::get('/pdf-invoice/stream', [AdminInvoiceController::class, 'streamInvoice']);
        Route::post('/pdf-invoice/send', [AdminInvoiceController::class, 'send']);
    });
});

Route::middleware(['guest'])->group(function () {
    Route::get('/admin/login', [AdminAuthController::class, 'create']);
    Route::post('/admin/login', [AdminAuthController::class, 'store']);
});
