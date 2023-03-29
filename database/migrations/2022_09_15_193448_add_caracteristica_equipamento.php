<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('caracteristicas_equipamento', function (Blueprint $table): void {
            $table->id();

            $table->nullableMorphs('valor');

            $table->foreignId('caracteristica_id');
            $table->foreign('caracteristica_id')->references('id')->on('caracteristicas');

            $table->foreignId('equipamento_id');
            $table->foreign('equipamento_id')->references('id')->on('equipamentos');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('caracteristicas_equipamento');
    }
};
