<?php

namespace App\Notifications\Channel;

use Illuminate\Bus\Queueable;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

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
        return config('equipamentos.notificacoes.ws_evento_conversa');
    }

    public function send($notifiable, Notification $notification)
    {
        $this->usuarioId = $notifiable->id;
        $this->notification = $notification;
        broadcast($this);
    }
}
