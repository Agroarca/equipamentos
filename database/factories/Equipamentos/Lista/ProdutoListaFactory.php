<?php

namespace Database\Factories\Equipamentos\Lista;

use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Lista\Lista;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProdutoListaFactory extends Factory
{
    public function definition(): array
    {
        return [
            'equipamento_id' => Equipamento::factory(),
            'lista_id' => Lista::factory(),
        ];
    }
}
