<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('notificacoes', function (Blueprint $table): void {
            $table->id();

            $table->smallInteger('passo')->default(0);
            $table->dateTime('processar_apos')->nullable();
            $table->boolean('visualizado')->default(false);
            $table->string('titulo');
            $table->string('texto');

            $table->foreignId('tipo_id');
            $table->string('tipo_type');

            $table->foreignId('usuario_id');
            $table->foreign('usuario_id')->references('id')->on('usuarios');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('notificacoes');
    }
};
