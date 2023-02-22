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
        Schema::create('caracteristicas_equipamento_texto_curto', function (Blueprint $table) {
            $table->id();

            $table->string('valor', 5000);

            $table->foreignId('caracteristica_equipamento_id');
            $table->foreign('caracteristica_equipamento_id', 'fk_caracteristica_equipamento_texto_curto')->references('id')->on('caracteristicas_equipamento');

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
        Schema::dropIfExists('caracteristicas_equipamento_texto_curto');
    }
};
