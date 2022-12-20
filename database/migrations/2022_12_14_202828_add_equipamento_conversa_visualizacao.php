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
        Schema::create('equipamento_conversa_visualizacao', function (Blueprint $table) {
            $table->id();

            $table->foreignId('equipamento_conversa_id');
            $table->foreign('equipamento_conversa_id', 'equipamento_conversa_visualizacao, conversa_id')->references('id')->on('equipamento_conversas');

            $table->foreignId('usuario_id');
            $table->foreign('usuario_id')->references('id')->on('usuarios');

            $table->foreignId('ultima_mensagem_id');

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
        Schema::dropIfExists('equipamento_conversa_visualizacao');
    }
};
