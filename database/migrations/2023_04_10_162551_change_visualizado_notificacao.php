<?php

use App\Enums\Notificacoes\StatusNotificacao;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('notificacoes', function (Blueprint $table): void {
            $table->dropColumn('visualizado');
            $table->smallInteger('status')->default(StatusNotificacao::Criado->value);
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
