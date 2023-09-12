<?php

namespace App\Enums\Usuario;

enum TipoPessoa: int
{
    case Fisica = 0;
    case Juridica = 1;

    public static function arrayNomes(): array
    {
        return [
            self::Fisica->value => 'Física',
            self::Juridica->value => 'Jurídica',
        ];
    }
}
