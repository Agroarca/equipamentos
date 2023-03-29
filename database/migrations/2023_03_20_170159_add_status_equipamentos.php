<?php

use App\Enums\Equipamentos\Cadastro\StatusEquipamento;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('equipamentos', function (Blueprint $table): void {
            $table->smallInteger('status')->default(StatusEquipamento::Cadastrando->value);
        });
    }

    public function down(): void
    {
        Schema::table('equipamentos', function (Blueprint $table): void {
            $table->dropColumn('status');
        });
    }
};
