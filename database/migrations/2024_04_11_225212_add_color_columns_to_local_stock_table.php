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
        Schema::table('local_stock', function (Blueprint $table) {
            $table->string('desired_quantity_bg')->nullable();
            $table->string('desired_quantity_font')->default('#000000');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('local_stock', function (Blueprint $table) {
            $table->dropColumn(['desired_quantity_bg', 'desired_quantity_font']);
        });
    }
};
