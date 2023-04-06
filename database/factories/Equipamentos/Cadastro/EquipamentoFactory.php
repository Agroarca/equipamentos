<?php

namespace Database\Factories\Equipamentos\Cadastro;

use App\Enums\Equipamentos\Cadastro\StatusEquipamento;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Modelo;
use App\Models\Usuario;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class EquipamentoFactory extends Factory
{
    public function definition(): array
    {
        return [
            'titulo' => Str::random(25),
            'valor' => 1000000,
            'ano' => Carbon::now()->year,
            'descricao' => fake()->paragraph(3),
            'modelo_id' => Modelo::factory(),
            'categoria_id' => Categoria::factory(),
            'usuario_id' => Usuario::factory(),
            'status' => StatusEquipamento::Aprovado,
        ];
    }

    public function statusAprovado(): mixed
    {
        return $this->state(fn (array $attributes) => [
            'status' => StatusEquipamento::Aprovado,
            'modelo_id' => Modelo::factory()->statusAprovado(),
        ]);
    }
}
