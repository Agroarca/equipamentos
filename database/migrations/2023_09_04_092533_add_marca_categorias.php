<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('equipamentos_marca_categorias', function (Blueprint $table): void {
            $table->id();

            $table->foreignId('marca_id')->constrained('marcas');
            $table->foreignId('categoria_id')->constrained('categorias');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('equipamentos_marca_categorias');
    }
};
