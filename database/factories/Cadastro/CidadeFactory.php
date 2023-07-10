<?php

namespace Database\Factories\Cadastro;

use App\Models\Cadastro\Estado;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CidadeFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nome' => Str::random(25),
            'estado_id' => Estado::factory(),
        ];
    }
}
