<?php

namespace App\Listeners\Notificacoes;

use App\Events\Notificacoes\NotificacaoSaved;
use Illuminate\Support\Facades\Cache;

class NotificacaoSavedListener
{
    /**
     * Handle the event.
     */
    public function handle(NotificacaoSaved $event): void
    {
        $usuarioId = $event->notificacao->usuario_id;
        Cache::tags('usuario')->forget("notificacoes-$usuarioId");
    }
}
