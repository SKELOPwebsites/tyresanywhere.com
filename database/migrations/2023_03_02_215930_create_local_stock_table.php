<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('local_stock', function (Blueprint $table) {
            $table->id();
            $table->string('brand');
            $table->string('model')->nullable();
            $table->string('width', 3);
            $table->string('profile', 2);
            $table->string('rim', 2);
            $table->boolean('commercial')->default(false);
            $table->integer('quantity');
            $table->decimal('cost', 9);
            $table->integer('sold')->default(0);
            $table->string('notes')->nullable();

            $table->string('tyre_size_bg')->default('#FFFFFF');
            $table->string('brand_bg')->default('#FFFFFF');
            $table->string('price_bg')->default('#FFFFFF');
            $table->string('total_price_bg')->default('#FFFFFF');
            $table->string('quantity_bg')->default('#FFFFFF');

            $table->string('model_bg')->default('#FFFFFF');
            $table->string('notes_bg')->default('#FFFFFF');
            $table->string('sold_bg')->default('#FFFFFF');

            $table->string('tyre_size_font')->nullable();
            $table->string('brand_font')->nullable();
            $table->string('price_font')->nullable();
            $table->string('total_price_font')->nullable();
            $table->string('quantity_font')->nullable();
            $table->string('model_font')->nullable();
            $table->string('notes_font')->nullable();
            $table->string('sold_font')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('local_stock');
    }
};
