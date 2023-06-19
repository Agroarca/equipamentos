<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('categorias', function (Blueprint $table): void {
            $table->string('meta_description', 500)->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('categorias', function (Blueprint $table): void {
            $table->dropColumn('meta_description');
        });
    }
};
