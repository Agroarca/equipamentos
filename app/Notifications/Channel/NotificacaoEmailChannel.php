<?php

namespace App\Notifications\Channel;

use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Notifications\Notification;

class NotificacaoEmailChannel implements ShouldBroadcast
{
    use Queueable;

    public $usuarioId;

    public $notification;

    public function broadcastOn()
    {
        return new PrivateChannel(config('equipamentos.notificacoes.ws_canal_notificacao').$this->usuarioId);
    }

    public function broadcastAs()
    {
        return 'NotificacaoEmail';
    }

    public function send($notifiable, Notification $notification)
    {
        $this->usuarioId = $notifiable->id;
        $this->notification = $notification;
        //broadcast($this);
    }
}
