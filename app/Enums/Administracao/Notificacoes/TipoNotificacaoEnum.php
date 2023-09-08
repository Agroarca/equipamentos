<?php

namespace App\Enums\Administracao\Notificacoes;

use App\Enums\EnumToArray;

enum TipoNotificacaoEnum: int
{
    use EnumToArray;

    case Placeholder = 0;
    case ProdutoEnviadoAprovacao = 1;

    public static function arrayNomes(): array
    {
        return [
            self::Placeholder->value => 'Placeholder',
            self::ProdutoEnviadoAprovacao->value => 'Produto Enviado para Aprovação',
        ];
    }
}
