<?php

namespace Database\Factories\Administracao\Permissoes;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class GrupoFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nome' => Str::random(25),
        ];
    }
}
