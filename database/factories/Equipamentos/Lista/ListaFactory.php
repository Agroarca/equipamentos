<?php

namespace Database\Factories\Equipamentos\Lista;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ListaFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nome' => Str::random(25),
            'slug' => 's' . Str::slug(Str::random(25)),
        ];
    }
}
