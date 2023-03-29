<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('caracteristicas_opcoes', function (Blueprint $table): void {
            $table->id();

            $table->string('nome', 50);

            $table->foreignId('caracteristica_id');
            $table->foreign('caracteristica_id')->references('id')->on('caracteristicas');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('caracteristicas_opcoes');
    }
};
