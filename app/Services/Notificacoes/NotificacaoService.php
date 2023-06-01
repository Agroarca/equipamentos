<?php

namespace App\Services\Notificacoes;

use App\Enums\Notificacoes\StatusNotificacao;
use App\Models\Notificacoes\Notificacao;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class NotificacaoService
{
    /**
     * Retorna a quantidade de notificações não lidas do usuário.
     */
    public function getCountNotificacoesNaoLidasUsuario(?int $usuarioId = null): int
    {
        if ($usuarioId === null && !Auth::check()) {
            return 0;
        }

        $usuarioId ??= Auth::id();
        return Cache::tags('usuario')->remember(
            "notificacoes-$usuarioId",
            3600,
            fn () => Notificacao::where('usuario_id', $usuarioId)
                ->where('status', StatusNotificacao::Criado)
                ->count()
        );
    }
}
