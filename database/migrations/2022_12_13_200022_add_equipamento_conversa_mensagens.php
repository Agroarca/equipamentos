<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('equipamento_conversa_mensagens', function (Blueprint $table): void {
            $table->id();
            $table->text('mensagem');

            $table->foreignId('equipamento_conversa_id');
            $table->foreign('equipamento_conversa_id')->references('id')->on('equipamento_conversas');

            $table->foreignId('usuario_id');
            $table->foreign('usuario_id')->references('id')->on('usuarios');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('equipamento_conversa_mensagens');
    }
};
