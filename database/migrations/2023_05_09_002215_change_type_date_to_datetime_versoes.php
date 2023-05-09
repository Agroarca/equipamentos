<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('pagina_inicial_versoes', function (Blueprint $table): void {
            $table->dropColumn('data_inicio');
            $table->dropColumn('data_fim');
        });

        Schema::table('pagina_inicial_versoes', function (Blueprint $table): void {
            $table->dateTime('data_inicio')->nullable();
            $table->dateTime('data_fim')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('pagina_inicial_versoes', function (Blueprint $table): void {
            $table->dropColumn('data_inicio');
            $table->dropColumn('data_fim');
        });

        Schema::table('pagina_inicial_versoes', function (Blueprint $table): void {
            $table->date('data_inicio')->nullable();
            $table->date('data_fim')->nullable();
        });
    }
};
