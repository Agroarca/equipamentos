<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('modelos', function (Blueprint $table): void {
            $table->fullText('nome', 'modelos_nome_fulltext');
        });
    }

    public function down(): void
    {
        Schema::table('modelos', function (Blueprint $table): void {
            $table->dropFullText('modelos_nome_fulltext');
        });
    }
};
