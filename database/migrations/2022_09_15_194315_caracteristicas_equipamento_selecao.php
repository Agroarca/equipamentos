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
        Schema::create('caracteristicas_equipamento_selecao', function (Blueprint $table) {
            $table->id();

            $table->foreignId('caracteristicas_opcoes_id');
            $table->foreign('caracteristicas_opcoes_id', 'fk_caracteristicas_opcoes_selecao')->references('id')->on('caracteristicas_opcoes');

            $table->foreignId('caracteristica_equipamento_id');
            $table->foreign('caracteristica_equipamento_id', 'fk_caracteristica_equipamento_selecao')->references('id')->on('caracteristicas_equipamento');

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
        Schema::dropIfExists('caracteristicas_equipamento_selecao');
    }
};
