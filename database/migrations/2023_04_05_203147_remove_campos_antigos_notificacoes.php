<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('notificacoes', function (Blueprint $table): void {
            $table->dropColumn('passo');
            $table->dropColumn('processar_apos');
        });
    }

    public function down(): void
    {
        Schema::table('notificacoes', function (Blueprint $table): void {
            $table->smallInteger('passo')->default(0);
            $table->dateTime('processar_apos')->nullable();
        });
    }
};
