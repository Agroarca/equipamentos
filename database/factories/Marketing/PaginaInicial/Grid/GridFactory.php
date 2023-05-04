<?php

namespace Database\Factories\Marketing\PaginaInicial\Grid;

use App\Enums\Marketing\PaginaInicial\Grid\Formato;
use Illuminate\Database\Eloquent\Factories\Factory;

class GridFactory extends Factory
{
    public function definition(): array
    {
        return [
            'formato' => Formato::Banner_3x1_1x3,
        ];
    }
}
