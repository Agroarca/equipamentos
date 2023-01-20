<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('equipamento_conversa_visualizacao', function (Blueprint $table) {
            $table->integer('mensagens_nao_visualizadas')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('equipamento_conversa_visualizacao', function (Blueprint $table) {
            $table->dropColumn('mensagens_nao_visualizadas');
        });
    }
};
