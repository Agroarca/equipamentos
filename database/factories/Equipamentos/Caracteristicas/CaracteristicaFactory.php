<?php

namespace Database\Factories\Equipamentos\Caracteristicas;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Cadastro\Categoria;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Equipamentos\Caracteristicas\Caracteristica>
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
            'tipo' => TipoCaracteristica::Booleano->value,
            'obrigatorio' => false,
            'categoria_id' => Categoria::factory(),
            'ordem' => 1,
        ];
    }
}
