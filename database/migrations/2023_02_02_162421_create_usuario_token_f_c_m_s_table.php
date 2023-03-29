<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('usuario_token_fcm', function (Blueprint $table): void {
            $table->id();

            $table->string('token');

            $table->foreignId('usuario_id');
            $table->foreign('usuario_id')->references('id')->on('usuarios');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('usuario_token_fcm');
    }
};
