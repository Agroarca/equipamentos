<?php

namespace App\Notifications\Channel;

use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Notifications\Notification;

class NotificacaoEmailChannel implements ShouldBroadcast
{
    use Queueable;

    public int $usuarioId;

    public Notification $notification;

    public function broadcastOn(): PrivateChannel
    {
        return new PrivateChannel(config('equipamentos.notificacoes.ws_canal_notificacao') . $this->usuarioId);
    }

    public function broadcastAs(): string
    {
        return 'NotificacaoEmail';
    }

    public function send(mixed $notifiable, Notification $notification): void
    {
        $this->usuarioId = $notifiable->id;
        $this->notification = $notification;
    }
}
