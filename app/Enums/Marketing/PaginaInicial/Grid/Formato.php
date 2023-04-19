<?php

namespace App\Enums\Marketing\PaginaInicial\Grid;

use App\Enums\EnumToArray;

enum Formato: int
{
    use EnumToArray;

    case Banner_4x1_2x2 = 0;

    public static function arrayNomes(): array
    {
        return [
            self::Banner_4x1_2x2->value => 'Banner 4x1 desktop e 2x2 mobile',
        ];
    }
}
