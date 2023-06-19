<?php

namespace Database\Factories\Equipamentos\Cadastro;

use App\Models\Equipamentos\Cadastro\Categoria;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CategoriaFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nome' => Str::random(25),
            'meta_description' => Str::random(150),
        ];
    }

    public function comCategoriaMae(): mixed
    {
        return $this->state(fn (array $attributes) => [
            'categoria_mae_id' => Categoria::factory(),
        ]);
    }
}
