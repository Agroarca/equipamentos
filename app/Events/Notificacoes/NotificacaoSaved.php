<?php

namespace App\Events\Notificacoes;

use App\Models\Notificacoes\Notificacao;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NotificacaoSaved
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public Notificacao $notificacao
    ) {
    }
}
