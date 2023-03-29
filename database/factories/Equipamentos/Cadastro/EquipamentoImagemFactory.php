<?php

namespace Database\Factories\Equipamentos\Cadastro;

use App\Models\Equipamentos\Cadastro\Equipamento;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class EquipamentoImagemFactory extends Factory
{
    public function definition(): array
    {
        return [
            'descricao' => Str::random(25),
            'nome_arquivo' => fake()->md5(),
            'equipamento_id' => Equipamento::factory(),
        ];
    }
}
