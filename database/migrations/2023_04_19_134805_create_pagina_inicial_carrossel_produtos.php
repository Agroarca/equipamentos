<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pagina_inicial_lista_produtos', function (Blueprint $table): void {
            $table->id();

            $table->foreignId('lista_produtos_id');
            $table->foreign('lista_produtos_id')->references('id')->on('listas');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pagina_inicial_lista_produtos');
    }
};
