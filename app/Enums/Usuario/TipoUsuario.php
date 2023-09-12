<?php

namespace App\Enums\Usuario;

use App\Enums\EnumToArray;

enum TipoUsuario: int
{
    use EnumToArray;

    case Normal = 0;
    case Admin = 1;
}
