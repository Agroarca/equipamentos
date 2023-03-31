<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('equipamento_conversas', function (Blueprint $table): void {
            $table->id();

            $table->foreignId('equipamento_id');
            $table->foreign('equipamento_id')->references('id')->on('equipamentos');

            $table->foreignId('usuario_id');
            $table->foreign('usuario_id')->references('id')->on('usuarios');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('equipamento_conversas');
    }
};
