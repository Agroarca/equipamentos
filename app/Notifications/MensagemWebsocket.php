<?php

namespace App\Notifications;

use App\Models\Equipamentos\Conversas\Mensagem;
use App\Notifications\Channel\ConversaWebSocketChannel;
use Illuminate\Notifications\Notification;

class MensagemWebsocket extends Notification
{
    public function __construct(
        public Mensagem $mensagem
    ) {
    }

    public function via()
    {
        return [ConversaWebSocketChannel::class];
    }
}
