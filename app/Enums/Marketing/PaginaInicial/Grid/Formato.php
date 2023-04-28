<?php

namespace App\Enums\Marketing\PaginaInicial\Grid;

use App\Enums\EnumToArray;

enum Formato: int
{
    use EnumToArray;

    case Banner_4x1_2x2 = 0;
    case Banner_4x1_2x2_sem_gap = 1;
    case Banner_3x1_1x3 = 2;
    case Banner_3x1_1x3_sem_gap = 3;

    public static function arrayNomes(): array
    {
        return [
            self::Banner_4x1_2x2->value => 'Banner 4x1 desktop e 2x2 mobile',
            self::Banner_4x1_2x2_sem_gap->value => 'Banner 4x1 desktop e 2x2 mobile sem espaçamento',
            self::Banner_3x1_1x3->value => 'Banner 3x1 desktop e 1x3 mobile',
            self::Banner_3x1_1x3_sem_gap->value => 'Banner 3x1 desktop e 1x3 mobile sem espaçamento',
        ];
    }

    public function imagensNecessarias(): int
    {
        return match ($this) {
            self::Banner_4x1_2x2 => 4,
            self::Banner_4x1_2x2_sem_gap => 4,
            self::Banner_3x1_1x3 => 3,
            self::Banner_3x1_1x3_sem_gap => 3,
        };
    }
}
