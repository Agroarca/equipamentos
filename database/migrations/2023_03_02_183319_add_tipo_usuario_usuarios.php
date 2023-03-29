<?php

use App\Enums\Usuario\TipoUsuario;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('usuarios', function (Blueprint $table): void {
            $table->smallInteger('tipo_usuario')->default(TipoUsuario::Normal->value);
        });
    }

    public function down(): void
    {
        Schema::table('usuarios', function (Blueprint $table): void {
            $table->dropColumn('tipo_usuario');
        });
    }
};
