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
        Schema::create('caracteristicas_equipamento_inteiro', function (Blueprint $table) {
            $table->id();

            $table->integer('valor');

            $table->foreignId('caracteristica_equipamento_id');
            $table->foreign('caracteristica_equipamento_id', 'fk_caracteristica_equipamento_inteiro')->references('id')->on('caracteristicas_equipamento');

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
        Schema::dropIfExists('caracteristicas_equipamento_inteiro');
    }
};
