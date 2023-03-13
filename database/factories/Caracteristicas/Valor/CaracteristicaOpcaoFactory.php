<?php

namespace Database\Factories\Caracteristicas\Valor;

use App\Enums\Caracteristicas\TipoCaracteristica;
use App\Models\Caracteristicas\Caracteristica;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Caracteristicas\Valor\CaracteristicaOpcao>
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
