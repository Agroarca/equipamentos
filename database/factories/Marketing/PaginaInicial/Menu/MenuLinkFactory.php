<?php

namespace Database\Factories\Marketing\PaginaInicial\Menu;

use App\Models\Marketing\PaginaInicial\Versao;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class MenuLinkFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nome' => Str::random(25),
            'link' => Str::random(25),
            'ordem' => 1,
            'versao_id' => Versao::factory(),
        ];
    }
}
