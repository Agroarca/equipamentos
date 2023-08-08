<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('pagina_inicial_carrossel_item', function (Blueprint $table): void {
            $table->string('nome_arquivo_desktop_secundario')->nullable();
            $table->string('nome_arquivo_mobile_secundario')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('pagina_inicial_carrossel_item', function (Blueprint $table): void {
            $table->dropColumn('nome_arquivo_desktop_secundario');
            $table->dropColumn('nome_arquivo_mobile_secundario');
        });
    }
};
