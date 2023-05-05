<?php

namespace Database\Factories\Marketing\PaginaInicial;

use App\Models\Marketing\PaginaInicial\Banners\Banner;
use App\Models\Marketing\PaginaInicial\Versao;
use Illuminate\Database\Eloquent\Factories\Factory;

class ComponenteFactory extends Factory
{
    public function definition(): array
    {
        return [
            'tela_cheia' => true,
            'tipo_id' => Banner::factory([
                'tipo_type' => Banner::class,
            ]),
            'versao_id' => Versao::factory(),
        ];
    }
}
