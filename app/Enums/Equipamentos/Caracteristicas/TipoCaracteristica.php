<?php

namespace App\Enums\Equipamentos\Caracteristicas;

use App\Enums\EnumToArray;

enum TipoCaracteristica: int
{
    use EnumToArray;

    case Booleano = 0;
    case Inteiro = 1;
    case Decimal = 2;
    case TextoCurto = 3;
    case TextoLongo = 4;
    case Selecao = 5;
}
