<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('modelos', function (Blueprint $table): void {
            $table->id();

            $table->string('nome', 50);

            $table->foreignId('marca_id');
            $table->foreign('marca_id')->references('id')->on('marcas');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('modelos');
    }
};
