<?php

namespace App\Notifications\Equipamentos\Conversas;

use App\Models\Equipamentos\Conversas\Mensagem;
use App\Notifications\Channel\ConversaWebSocketChannel;
use Illuminate\Notifications\Notification;

class NovaMensagemNotification extends Notification
{
    public string $tipo = 'nova-mensagem';

    public function __construct(
        public Mensagem $mensagem
    ) {
    }

    public function via(): array
    {
        return [ConversaWebSocketChannel::class];
    }
}
