<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('marcas', function (Blueprint $table): void {
            $table->fullText('nome', 'marcas_nome_fulltext');
        });
    }

    public function down(): void
    {
        Schema::table('marcas', function (Blueprint $table): void {
            $table->dropFullText('marcas_nome_fulltext');
        });
    }
};
