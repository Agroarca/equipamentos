<?php

namespace Database\Factories\Equipamentos\Cadastro;

use App\Enums\Equipamentos\Cadastro\StatusCadastro;
use App\Models\Equipamentos\Cadastro\Marca;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ModeloFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nome' => Str::random(25),
            'marca_id' => Marca::factory(),
            'status' => StatusCadastro::Criado,
        ];
    }

    public function statusAprovado(): mixed
    {
        return $this->state(fn (array $attributes) => [
            'status' => StatusCadastro::Aprovado,
        ]);
    }
}
