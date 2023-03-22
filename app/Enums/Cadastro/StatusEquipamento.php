<?php

namespace App\Enums\Cadastro;

use App\Enums\EnumToArray;

enum StatusEquipamento: int
{
    use EnumToArray;
    
    case Cadastrando = 0;
    case Criado = 1;
    case Aprovado = 2;
    case Pausado = 3;
    case Finalizado = 4;
    case Reprovado = 5;
}
