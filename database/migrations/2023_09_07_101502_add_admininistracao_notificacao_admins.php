<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('admininistracao_notificacao_admins', function (Blueprint $table): void {
            $table->id();

            $table->foreignId('usuario_id')->constrained('usuarios');
            $table->smallInteger('tipo');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('admininistracao_notificacao_admins');
    }
};
