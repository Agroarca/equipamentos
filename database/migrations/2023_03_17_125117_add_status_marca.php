<?php

use App\Enums\Equipamentos\Cadastro\StatusCadastro;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('marcas', function (Blueprint $table): void {
            $table->smallInteger('status')->default(StatusCadastro::Criado->value);
        });
    }

    public function down(): void
    {
        Schema::table('marcas', function (Blueprint $table): void {
            $table->dropColumn('status');
        });
    }
};
