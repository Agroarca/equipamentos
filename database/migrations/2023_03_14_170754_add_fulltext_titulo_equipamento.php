<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('equipamentos', function (Blueprint $table): void {
            $table->fullText('titulo', 'equipamentos_titulo_fulltext');
        });
    }

    public function down(): void
    {
        Schema::table('equipamentos', function (Blueprint $table): void {
            $table->dropFullText('equipamentos_titulo_fulltext');
        });
    }
};
