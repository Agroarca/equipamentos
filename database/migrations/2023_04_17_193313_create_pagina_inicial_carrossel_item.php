<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pagina_inicial_carrossel_item', function (Blueprint $table): void {
            $table->id();

            $table->unsignedSmallInteger('ordem');
            $table->string('link');
            $table->string('descricao');
            $table->string('nome_arquivo_desktop');
            $table->string('nome_arquivo_mobile');

            $table->foreignId('versao_id');
            $table->foreign('versao_id')->references('id')->on('pagina_inicial_versoes');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pagina_inicial_carrossel_item');
    }
};
