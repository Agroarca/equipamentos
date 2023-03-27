<?php

namespace App\Notifications\Channel;

use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Notifiable;

/**
 * Canal para envio de notificações por websocket.
 */
class NotificacaoWebSocketChannel implements ShouldBroadcast
{
    use Queueable;

    /**
     * Id do usuário que receberá a notificação.
     */
    public int $usuarioId;

    /**
     * Notificação a ser enviada.
     */
    public Notification $notification;

    /**
     * Canal que a notificação será enviada.
     */
    public function broadcastOn(): PrivateChannel
    {
        return new PrivateChannel(config('equipamentos.notificacoes.ws_canal_notificacao') . $this->usuarioId);
    }

    /**
     * Nome do Evento que será disparado.
     */
    public function broadcastAs(): string
    {
        return 'NotificacaoWebSocket';
    }

    /**
     * Envia a notificação.
     */
    public function send(Notifiable $notifiable, Notification $notification): void
    {
        $this->usuarioId = $notifiable->id;
        $this->notification = $notification;
        broadcast($this);
    }
}
