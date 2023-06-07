<?php

namespace Database\Factories\Equipamentos\Cadastro;

use App\Models\Equipamentos\Cadastro\Equipamento;
use Illuminate\Database\Eloquent\Factories\Factory;

class EquipamentoImagemFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nome_arquivo' => fake()->md5(),
            'equipamento_id' => Equipamento::factory(),
        ];
    }
}
