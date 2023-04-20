<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pagina_inicial_banners', function (Blueprint $table): void {
            $table->id();

            $table->string('link');
            $table->string('descricao');
            $table->string('nome_desktop');
            $table->string('nome_mobile')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pagina_inicial_banners');
    }
};
