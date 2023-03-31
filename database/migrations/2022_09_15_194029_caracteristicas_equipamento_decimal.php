<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('caracteristicas_equipamento_decimal', function (Blueprint $table): void {
            $table->id();

            $table->decimal('valor', 30, 10);

            $table->foreignId('caracteristica_equipamento_id');
            $table->foreign('caracteristica_equipamento_id', 'fk_caracteristica_equipamento_decimal')->references('id')->on('caracteristicas_equipamento');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('caracteristicas_equipamento_decimal');
    }
};
