<?php

namespace App\Notifications\Channel;

use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Notifiable;

/**
 * Canal para envio de notificações por email.
 */
class NotificacaoEmailChannel implements ShouldBroadcast
{
    use Queueable;

    /**
     * Id do usuário que receberá a notificação.
     *
     * @var integer
     */
    public int $usuarioId;

    /**
     * Notificação a ser enviada.
     *
     * @var Notification
     */
    public Notification $notification;

    /**
     * Canal que a notificação será enviada.
     *
     * @return PrivateChannel
     */
    public function broadcastOn(): PrivateChannel
    {
        return new PrivateChannel(config('equipamentos.notificacoes.ws_canal_notificacao') . $this->usuarioId);
    }

    /**
     * Nome do Evento que será disparado.
     *
     * @return string
     */
    public function broadcastAs()
    {
        return 'NotificacaoEmail';
    }

    /**
     * Envia a notificação.
     *
     * @param Notifiable $notifiable Usuário que receberá a notificação.
     * @param Notification $notification Notificação a ser enviada.
     *
     * @return void
     */
    public function send(Notifiable $notifiable, Notification $notification)
    {
        $this->usuarioId = $notifiable->id;
        $this->notification = $notification;
    }
}
