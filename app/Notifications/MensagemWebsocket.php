<?php

namespace App\Notifications;

use App\Models\Equipamentos\Conversas\Mensagem;
use App\Notifications\Channel\ConversaWebSocketChannel;
use Illuminate\Notifications\Notification;

/**
 * Notificação padrão para envio de mensagens por WebSocket.
 */
class MensagemWebsocket extends Notification
{
    /**
     * Construtor da notificacao
     */
    public function __construct(
        public Mensagem $mensagem
    ) {
    }

    /**
     * Canais que a notificação será enviada.
     *
     * @return array<Channel>
     */
    public function via(): array
    {
        return [ConversaWebSocketChannel::class];
    }
}
