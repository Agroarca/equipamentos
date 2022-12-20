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
        Schema::create('equipamento_conversas', function (Blueprint $table) {
            $table->id();

            $table->foreignId('equipamento_id');
            $table->foreign('equipamento_id')->references('id')->on('equipamentos');

            $table->foreignId('usuario_id');
            $table->foreign('usuario_id')->references('id')->on('usuarios');

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
        Schema::dropIfExists('equipamento_conversas');
    }
};
