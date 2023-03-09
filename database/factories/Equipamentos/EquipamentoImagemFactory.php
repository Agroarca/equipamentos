<?php

namespace Database\Factories\Equipamentos;

use App\Models\Equipamentos\Equipamento;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Equipamentos\EquipamentoImagem>
 */
class EquipamentoImagemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'descricao' => Str::random(25),
            'nome_arquivo' => fake()->md5(),
            'equipamento_id' => Equipamento::factory()
        ];
    }
}
