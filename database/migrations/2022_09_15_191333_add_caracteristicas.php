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
        Schema::create('caracteristicas', function (Blueprint $table) {
            $table->id();

            $table->string('nome', 50);
            $table->smallInteger('tipo');
            $table->integer('ordem');
            $table->boolean('obrigatorio')->default(false);
            $table->integer('minimo')->nullable();
            $table->integer('maximo')->nullable();
            $table->smallInteger('quantidade')->nullable(); //Casas decimais, quantidade de opções
            $table->smallInteger('modelo')->nullable(); //se lista suspensa / checkbox

            $table->foreignId('categoria_id');
            $table->foreign('categoria_id')->references('id')->on('categorias');

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
        Schema::dropIfExists('caracteristicas');
    }
};
