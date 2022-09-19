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
        Schema::create('caracteristicas_equipamento', function (Blueprint $table) {
            $table->id();

            $table->foreignId('caracteristica_valor_id');
            $table->smallInteger('caracteristica_valor_tipo');

            $table->foreignId('caracteristica_id');
            $table->foreign('caracteristica_id')->references('id')->on('caracteristicas');

            $table->foreignId('equipamento_id');
            $table->foreign('equipamento_id')->references('id')->on('equipamentos');

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
        Schema::dropIfExists('caracteristicas_equipamento');
    }
};
