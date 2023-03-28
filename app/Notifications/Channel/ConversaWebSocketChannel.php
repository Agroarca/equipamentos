<?php

namespace App\Notifications\Channel;

use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Notifications\Notification;

class ConversaWebSocketChannel implements ShouldBroadcast
{
    use Queueable;

    public int $usuarioId;

    public Notification $notification;

    public function broadcastOn(): PrivateChannel
    {
        return new PrivateChannel(config('equipamentos.notificacoes.ws_canal_conversa') . $this->usuarioId);
    }

    public function broadcastAs(): string
    {
        return 'ConversaWebSocket';
    }

    public function send(mixed $notifiable, Notification $notification): void
    {
        $this->usuarioId = $notifiable->id;
        $this->notification = $notification;
        broadcast($this);
    }
}
