<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('pagina_inicial_banners', function (Blueprint $table): void {
            $table->string('nome_desktop_secundario')->nullable();
            $table->string('nome_mobile_secundario')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('pagina_inicial_banners', function (Blueprint $table): void {
            $table->dropColumn('nome_desktop_secundario');
            $table->dropColumn('nome_mobile_secundario');
        });
    }
};
