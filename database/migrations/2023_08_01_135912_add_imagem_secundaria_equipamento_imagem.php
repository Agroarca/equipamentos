<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('equipamento_imagens', function (Blueprint $table): void {
            $table->string('nome_arquivo_secundario')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('equipamento_imagens', function (Blueprint $table): void {
            $table->dropColumn('nome_arquivo_secundario');
        });
    }
};
