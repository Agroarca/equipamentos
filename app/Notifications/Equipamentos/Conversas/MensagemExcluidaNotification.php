<?php

namespace App\Notifications\Equipamentos\Conversas;

use App\Models\Equipamentos\Conversas\Mensagem;
use App\Notifications\Channel\ConversaWebSocketChannel;
use Illuminate\Notifications\Notification;

class MensagemExcluidaNotification extends Notification
{
    public int $mensagemId;

    public string $tipo = 'mensagem-excluida';

    public function __construct(
        public Mensagem $mensagem
    ) {
    }

    public function via(): array
    {
        return [ConversaWebSocketChannel::class];
    }
}
