<?php

namespace Database\Factories\Cadastro;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class EstadoFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nome' => Str::random(25),
            'uf' => Str::upper(Str::random(2)),
        ];
    }
}
