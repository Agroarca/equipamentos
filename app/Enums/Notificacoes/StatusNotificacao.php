<?php

namespace App\Enums\Equipamentos\Cadastro;

use App\Enums\EnumToArray;

enum StatusNotificacao: int
{
    use EnumToArray;

    case Criado = 0;
    case Visualizado = 1;
}
