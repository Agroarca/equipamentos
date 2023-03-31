<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('equipamento_conversa_visualizacao', function (Blueprint $table): void {
            $table->integer('mensagens_nao_visualizadas')->default(0);
        });
    }

    public function down(): void
    {
        Schema::table('equipamento_conversa_visualizacao', function (Blueprint $table): void {
            $table->dropColumn('mensagens_nao_visualizadas');
        });
    }
};
