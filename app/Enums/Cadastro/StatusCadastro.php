<?php

namespace App\Enums\Cadastro;

use App\Enums\EnumToArray;

enum StatusCadastro: int
{
    use EnumToArray;

    case Criado = 0;
    case Aprovado = 1;
}
