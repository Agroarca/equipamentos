<?php

namespace Database\Factories\Equipamentos\Cadastro;

use App\Enums\Equipamentos\Cadastro\StatusCadastro;
use App\Models\Equipamentos\Cadastro\Marca;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Equipamentos\Modelo>
 */
class ModeloFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nome' => Str::random(25),
            'marca_id' => Marca::factory(),
            'status' => StatusCadastro::Criado->value
        ];
    }

    public function statusAprovado()
    {
        return $this->state(fn (array $attributes) => [
            'status' => StatusCadastro::Aprovado->value,
        ]);
    }
}
