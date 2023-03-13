<?php

namespace Database\Factories\Caracteristicas;

use App\Enums\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Categoria;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Caracteristicas\Caracteristica>
 */
class CaracteristicaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nome' => Str::random(30),
            'tipo' => TipoCaracteristica::Inteiro->value,
            'obrigatorio' => true,
            'minimo' => 100,
            'maximo' => 200,
            'categoria_id' => Categoria::factory(),
            'ordem' => 1,
        ];
    }
}
