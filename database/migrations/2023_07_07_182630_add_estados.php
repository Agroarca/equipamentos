<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('cadastro_estados', function (Blueprint $table): void {
            $table->id();

            $table->string('nome', 50);
            $table->string('uf', 2);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cadastro_estados');
    }
};
