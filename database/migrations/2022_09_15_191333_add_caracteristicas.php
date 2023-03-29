<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('caracteristicas', function (Blueprint $table): void {
            $table->id();

            $table->string('nome', 50);
            $table->smallInteger('tipo');
            $table->integer('ordem');
            $table->boolean('obrigatorio')->default(false);
            $table->decimal('minimo', 30, 10)->nullable();
            $table->decimal('maximo', 30, 10)->nullable();
            $table->smallInteger('quantidade')->nullable(); // Casas decimais, quantidade de opções
            $table->smallInteger('modelo')->nullable();

            $table->foreignId('categoria_id');
            $table->foreign('categoria_id')->references('id')->on('categorias');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('caracteristicas');
    }
};
