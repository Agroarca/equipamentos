<?php

namespace App\Enums\Caracteristicas;

enum TipoCaracteristica: int{
    case Booleano = 0;
    case Inteiro = 1;
    case Decimal = 2;
    case TextoCurto = 3;
    case TextoLongo = 4;
    case Selecao = 5;
    case SelecaoMultipla = 6;
}
