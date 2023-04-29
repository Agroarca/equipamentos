<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pagina_inicial_grid_imagens', function (Blueprint $table): void {
            $table->id();

            $table->string('link');
            $table->unsignedSmallInteger('ordem');
            $table->string('descricao');
            $table->string('nome_desktop');
            $table->string('nome_mobile')->nullable();

            $table->foreignId('grid_id');
            $table->foreign('grid_id')->references('id')->on('pagina_inicial_grids');


            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pagina_inicial_grid_imagens');
    }
};
