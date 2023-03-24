<?php

namespace App\Enums;

trait EnumToArray
{
    /**
     * Retorna um array com os nomes das opções do enum
     *
     * @return array[string]
     */
    public static function names(): array
    {
        return array_column(self::cases(), 'name');
    }

    /**
     * Retorna um array com os valores das opções do enum
     *
     * @return array[string]
     */
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }

    /**
     * Retorna um array com os nomes => valor das opções do enum
     *
     * @return array[string => any]
     */
    public static function toArray(): array
    {
        return array_combine(self::values(), self::names());
    }
}
