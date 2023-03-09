<?php

namespace Database\Factories\Equipamentos;

use App\Models\Equipamentos\Categoria;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Equipamentos\Categoria>
 */
class CategoriaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nome' => Str::random(25)
        ];
    }

    public function comCategoriaMae()
    {
        return $this->state(fn (array $attributes) => [
            'categoria_mae_id' => Categoria::factory(),
        ]);
    }
}
