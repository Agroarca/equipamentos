<?php

use App\Models\Cadastro\Cidade;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('equipamentos', function (Blueprint $table): void {
            $table->foreignId('cidade_id')->nullable()->constrained('cadastro_cidades');
        });
    }

    public function down(): void
    {
        Schema::table('equipamentos', function (Blueprint $table): void {
            $table->dropConstrainedForeignId('cidade_id');
        });
    }
};
