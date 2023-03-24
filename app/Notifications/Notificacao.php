<?php

namespace App\Notifications;

use App\Models\Notificacoes\Notificacao as NotificacaoModel;
use App\Notifications\Channel\NotificacaoEmailChannel;
use App\Notifications\Channel\NotificacaoPushChannel;
use App\Notifications\Channel\NotificacaoWebSocketChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Notifiable;

/**
 * Notificação padrão para envio de notificações.
 *
 * As notificações são enviadas para os canais WebSocket, Push e Email.
 */
class Notificacao extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Construtor da notificacao
     *
     * @param NotificacaoModel $notificacao Modelo da notificação a ser enviada.
     */
    public function __construct(
        public NotificacaoModel $notificacao
    ) {
        $this->afterCommit();
    }

    /**
     * Canais que a notificação será enviada.
     *
     * @param Notifiable $notifiable Usuário que receberá a notificação.
     *
     * @return array[Channel]
     */
    public function via(Notifiable $notifiable): array
    {
        return [
            NotificacaoWebSocketChannel::class,
            NotificacaoPushChannel::class,
            NotificacaoEmailChannel::class,
        ];
    }

    /**
     * Retorna o conteúdo da notificação.
     *
     * @param Notifiable $notifiable Usuário que receberá a notificação.
     *
     * @return array[Channel]
     */
    public function withDelay(Notifiable $notifiable): array
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
