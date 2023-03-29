<?php

namespace Database\Factories\Equipamentos\Caracteristicas\Valor;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CaracteristicaOpcaoFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nome' => Str::random(20),
            'caracteristica_id' => Caracteristica::factory([
                'tipo' => TipoCaracteristica::Selecao->value,
            ]),
        ];
    }
}
