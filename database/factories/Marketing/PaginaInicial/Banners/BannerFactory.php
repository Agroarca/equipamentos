<?php

namespace Database\Factories\Marketing\PaginaInicial\Banners;

use Illuminate\Database\Eloquent\Factories\Factory;

class BannerFactory extends Factory
{
    public function definition(): array
    {
        return [
            'link' => '/',
            'descricao' => $this->faker->text(10),
            'nome_desktop' => $this->faker->text(10),
        ];
    }
}
