<?php

use App\Enums\Equipamentos\Cadastro\StatusNotificacao;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('notificacoes', function (Blueprint $table): void {
            $table->dropColumn('visualizado');
            $table->smallInteger('status')->default(StatusNotificacao::Criado);
        });
    }

    public function down(): void
    {
        Schema::table('notificacoes', function (Blueprint $table): void {
            $table->dropColumn('status');
            $table->boolean('visualizado')->default(false);
        });
    }
};
