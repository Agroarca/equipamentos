<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('equipamentos', function (Blueprint $table): void {
            $table->id();

            $table->string('titulo', 100);
            $table->decimal('valor', 12, 2);
            $table->smallInteger('ano');

            $table->foreignId('modelo_id');
            $table->foreign('modelo_id')->references('id')->on('modelos');

            $table->foreignId('categoria_id');
            $table->foreign('categoria_id')->references('id')->on('categorias');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('equipamentos');
    }
};
