<?php

namespace Database\Factories\Marketing\PaginaInicial\Grid;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class GridImagemFactory extends Factory
{
    public function definition(): array
    {
        return [
            'link' => '/',
            'descricao' => Str::random(10),
            'nome_desktop' => Str::random(10),
            'ordem' => 0,
        ];
    }
}
