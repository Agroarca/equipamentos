<?php

namespace Database\Factories\Equipamentos\Caracteristicas\Valor;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaOpcao>
 */
class CaracteristicaOpcaoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
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
