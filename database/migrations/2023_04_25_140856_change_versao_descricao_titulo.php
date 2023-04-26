<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('pagina_inicial_versoes', function (Blueprint $table): void {
            $table->renameColumn('descricao', 'nome');
        });
    }

    public function down(): void
    {
        Schema::table('pagina_inicial_versoes', function (Blueprint $table): void {
            $table->renameColumn('nome', 'descricao');
        });
    }
};
