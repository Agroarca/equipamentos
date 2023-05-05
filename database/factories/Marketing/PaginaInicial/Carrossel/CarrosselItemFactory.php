<?php

namespace Database\Factories\Marketing\PaginaInicial\Carrossel;

use App\Models\Marketing\PaginaInicial\Versao;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CarrosselItemFactory extends Factory
{
    public function definition(): array
    {
        return [
            'link' => '/',
            'descricao' => Str::random(10),
            'ordem' => 0,
            'nome_arquivo_desktop' => Str::random(10),
            'nome_arquivo_mobile' => Str::random(10),
            'versao_id' => Versao::factory(),
        ];
    }
}
