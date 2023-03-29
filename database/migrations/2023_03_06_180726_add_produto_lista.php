<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('lista_produtos', function (Blueprint $table): void {
            $table->id();

            $table->foreignId('equipamento_id');
            $table->foreign('equipamento_id')->references('id')->on('equipamentos');

            $table->foreignId('lista_id');
            $table->foreign('lista_id')->references('id')->on('listas');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('lista_produtos');
    }
};
