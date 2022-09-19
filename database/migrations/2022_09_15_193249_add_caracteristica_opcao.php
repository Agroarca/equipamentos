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
        Schema::create('caracteristicas_opcoes', function (Blueprint $table) {
            $table->id();

            $table->string('nome', 50);

            $table->foreignId('caracteristica_id');
            $table->foreign('caracteristica_id')->references('id')->on('caracteristicas');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('caracteristicas_opcoes');
    }
};
