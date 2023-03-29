<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('notificacao_conversa', function (Blueprint $table): void {
            $table->id();

            $table->foreignId('conversa_id');
            $table->foreign('conversa_id')->references('id')->on('equipamento_conversas');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('notificacao_conversa');
    }
};
