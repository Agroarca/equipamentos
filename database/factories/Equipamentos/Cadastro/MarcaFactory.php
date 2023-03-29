<?php

namespace Database\Factories\Equipamentos\Cadastro;

use App\Enums\Equipamentos\Cadastro\StatusCadastro;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class MarcaFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nome' => Str::random(25),
            'status' => StatusCadastro::Criado->value,
        ];
    }

    public function statusAprovado(): mixed
    {
        return $this->state(fn (array $attributes) => [
            'status' => StatusCadastro::Aprovado->value,
        ]);
    }
}
