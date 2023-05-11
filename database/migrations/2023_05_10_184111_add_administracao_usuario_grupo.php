<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('administracao_grupo_usuario', function (Blueprint $table): void {
            $table->id();

            $table->foreignId('grupo_id');
            $table->foreign('grupo_id')->references('id')->on('administracao_grupos');

            $table->foreignId('usuario_id');
            $table->foreign('usuario_id')->references('id')->on('usuarios');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('administracao_grupo_usuario');
    }
};
