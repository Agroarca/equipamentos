<?php

namespace Database\Factories\Marketing\PaginaInicial\ListaProdutos;

use App\Models\Equipamentos\Lista\Lista;
use Illuminate\Database\Eloquent\Factories\Factory;

class ListaFactory extends Factory
{
    public function definition(): array
    {
        return [
            'lista_produtos_id' => Lista::factory(),
        ];
    }
}
