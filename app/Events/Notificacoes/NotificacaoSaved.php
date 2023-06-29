<?php

namespace App\Events\Notificacoes;

use App\Models\Notificacoes\Notificacao;
use Illuminate\Foundation\Events\Dispatchable;

class NotificacaoSaved
{
    use Dispatchable;

    public function __construct(
        public Notificacao $notificacao
    ) {
    }
}
