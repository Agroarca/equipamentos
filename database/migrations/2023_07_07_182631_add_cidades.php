<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('cadastro_cidades', function (Blueprint $table): void {
            $table->id();

            $table->string('nome', 50);
            $table->foreignId('estado_id')->constrained('cadastro_estados');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cadastro_cidades');
    }
};
