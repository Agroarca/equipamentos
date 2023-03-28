<?php

use App\Enums\Equipamentos\Cadastro\StatusCadastro;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('marcas', function (Blueprint $table) {
            $table->smallInteger('status')->default(StatusCadastro::Criado->value);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('marcas', function (Blueprint $table) {
            $table->dropColumn('status');
        });
    }
};
