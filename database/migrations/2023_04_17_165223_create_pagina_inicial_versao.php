<?php

use App\Enums\Marketing\PaginaInicial\StatusVersao;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pagina_inicial_versao', function (Blueprint $table): void {
            $table->id();

            $table->smallInteger('status')->default(StatusVersao::Criado->value);
            $table->integer('prioridade')->default(0);
            $table->string('descricao');
            $table->date('data_inicio')->nullable();
            $table->date('data_fim')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pagina_inicial_versao');
    }
};
