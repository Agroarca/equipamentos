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
        Schema::create('equipamento_imagens', function (Blueprint $table) {
            $table->id();
            $table->string('descricao', 200);
            $table->string('nome_arquivo');

            $table->foreignId('equipamento_id');
            $table->foreign('equipamento_id')->references('id')->on('equipamentos');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('equipamento_imagens');
    }
};
