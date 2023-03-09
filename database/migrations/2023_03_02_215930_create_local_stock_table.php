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
            $table->string('notes')->nullable();
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
