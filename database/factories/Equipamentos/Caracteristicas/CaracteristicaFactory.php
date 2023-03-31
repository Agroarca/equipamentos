<?php

namespace Database\Factories\Equipamentos\Caracteristicas;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Cadastro\Categoria;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CaracteristicaFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nome' => Str::random(30),
            'tipo' => TipoCaracteristica::Booleano,
            'obrigatorio' => false,
            'categoria_id' => Categoria::factory(),
            'ordem' => 1,
        ];
    }
}
