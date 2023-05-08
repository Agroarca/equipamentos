<?php

namespace Database\Factories\Marketing\PaginaInicial\Banners;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class BannerFactory extends Factory
{
    public function definition(): array
    {
        return [
            'link' => '/',
            'descricao' => Str::random(10),
            'nome_desktop' => Str::random(10),
        ];
    }
}
