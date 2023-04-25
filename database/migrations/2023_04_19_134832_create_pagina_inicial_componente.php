<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pagina_inicial_componentes', function (Blueprint $table): void {
            $table->id();

            $table->string('titulo', 100)->nullable();
            $table->string('subtitulo')->nullable();
            $table->unsignedSmallInteger('ordem');
            $table->boolean('tela_cheia')->default(false);
            $table->foreignId('tipo_id');
            $table->string('tipo_type');

            $table->foreignId('versao_id');
            $table->foreign('versao_id')->references('id')->on('pagina_inicial_versoes');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pagina_inicial_componentes');
    }
};
