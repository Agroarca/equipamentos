<?php

namespace App\Notifications;

use App\Models\Equipamentos\Conversas\Mensagem;
use App\Notifications\Channel\ConversaWebSocket;
use Illuminate\Notifications\Notification;

class ConversaNotification extends Notification
{
    public function __construct(
        public Mensagem $mensagem
    ) {
    }

    public function via()
    {
        return [ConversaWebSocket::class];
    }
}
