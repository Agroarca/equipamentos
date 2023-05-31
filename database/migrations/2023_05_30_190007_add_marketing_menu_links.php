<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('marketing_menu_links', function (Blueprint $table): void {
            $table->id();

            $table->string('nome');
            $table->string('link');
            $table->smallinteger('ordem');

            $table->foreignId('versao_id');
            $table->foreign('versao_id')->references('id')->on('pagina_inicial_versoes');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('marketing_menu_links');
    }
};
