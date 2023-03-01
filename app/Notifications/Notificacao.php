<?php

namespace App\Notifications;

use App\Models\Notificacoes\Notificacao as NotificacaoModel;
use App\Notifications\Channel\NotificacaoEmailChannel;
use App\Notifications\Channel\NotificacaoPushChannel;
use App\Notifications\Channel\NotificacaoWebSocketChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Notification;

class Notificacao extends Notification implements ShouldQueue
{
    use Queueable;

    public function __construct(
        public NotificacaoModel $notificacao
    ) {
        $this->afterCommit();
    }

    public function via($notifiable)
    {
        return [
            NotificacaoWebSocketChannel::class,
            NotificacaoPushChannel::class,
            NotificacaoEmailChannel::class,
        ];
    }

    public function withDelay($notifiable)
    {
        return [
            NotificacaoWebSocketChannel::class => now()->addSeconds(
                config('equipamentos.notificacoes.notificacao_websocket_delay_secs')
            ),
            NotificacaoPushChannel::class => now()->addSeconds(
                config('equipamentos.notificacoes.notificacao_push_delay_secs')
            ),
            NotificacaoEmailChannel::class => now()->addSeconds(
                config('equipamentos.notificacoes.notificacao_email_delay_secs')
            ),
        ];
    }
}
