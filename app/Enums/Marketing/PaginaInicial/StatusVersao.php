<?php

namespace App\Enums\Marketing\PaginaInicial;

use App\Enums\EnumToArray;

enum StatusVersao: int
{
    use EnumToArray;

    case Criado = 0;
    case Aprovado = 1;
    case Reprovado = 2;
    case Publicado = 3;
}
