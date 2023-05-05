<?php

namespace Database\Factories\Marketing\PaginaInicial;

use App\Enums\Marketing\PaginaInicial\StatusVersao;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class VersaoFactory extends Factory
{
    public function definition(): array
    {
        return [
            'status' => StatusVersao::Criado,
            'prioridade' => 0,
            'nome' => Str::random(25),
        ];
    }
}
