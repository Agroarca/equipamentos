<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('notificacao_conversa_equipamentos', function (Blueprint $table): void {
            $table->id();

            $table->foreignId('equipamento_id');
            $table->foreign('equipamento_id')->references('id')->on('equipamentos');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('notificacao_conversa_equipamentos');
    }
};
