<?php

namespace App\Jobs\Notificacoes;

use App\Models\Notificacoes\Notificacao as NotificacaoModel;
use App\Models\Usuario;
use App\Notifications\Notificacao;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Notification;

class EnviarNotificacao implements ShouldQueue, ShouldBeUnique
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        private Usuario $usuario,
        private NotificacaoModel $notificacao
    ) {
    }

    public function handle(): void
    {
        Notification::send($this->usuario, new Notificacao($this->notificacao));

        EnviarNotificacaoPush::dispatch($this->usuario, $this->notificacao)
            ->delay(now()->addSeconds(config('equipamentos.notificacoes.notificacao_push_delay_secs')));
    }

    public function uniqueId(): string
    {
        return $this->notificacao->id;
    }
}
