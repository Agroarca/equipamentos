<?php

namespace Database\Factories\Equipamentos;

use App\Models\Equipamentos\Categoria;
use App\Models\Equipamentos\Modelo;
use App\Models\Usuario;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Equipamentos\Equipamento>
 */
class EquipamentoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'titulo' => Str::random(25),
            'valor' => 1000000,
            'ano' => Carbon::now()->year,
            'descricao' => fake()->paragraph(3),
            'modelo_id' => Modelo::factory(),
            'categoria_id' => Categoria::factory(),
            'usuario_id' => Usuario::factory(),
        ];
    }
}
