<?php

namespace App\Notifications\Channel;

use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Notifications\Notification;

class ConversaWebSocketChannel implements ShouldBroadcast
{
    use Queueable;

    public $usuarioId;
    public $notification;

    public function broadcastOn()
    {
        return new PrivateChannel(config('equipamentos.notificacoes.ws_canal_conversa') . $this->usuarioId);
    }

    public function broadcastAs()
    {
        return 'ConversaWebSocket';
    }

    public function send($notifiable, Notification $notification)
    {
        $this->usuarioId = $notifiable->id;
        $this->notification = $notification;
        broadcast($this);
    }
}
