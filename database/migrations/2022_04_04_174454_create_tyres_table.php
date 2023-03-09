<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tyres', function (Blueprint $table) {
            $table->id();
            $table->string('brand');
            $table->string('model');
            $table->string('fuel', 1);
            $table->string('wet', 1);
            $table->string('noise', 3);
            $table->string('width', 3);
            $table->string('profile', 2);
            $table->string('rim', 2);
            $table->string('speed', 4);
            $table->string('quality');
            $table->string('usage');
            $table->boolean('extra_load')->default(false);
            $table->string('season');
            $table->string('header');
            $table->decimal('price', 9);
            $table->decimal('price_offer', 9);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tyres');
    }
};
