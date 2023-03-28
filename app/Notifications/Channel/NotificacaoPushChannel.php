<?php

namespace App\Notifications\Channel;

use App\Models\Usuario;
use App\Notifications\Notificacao as NotificationsNotificacao;
use App\Services\Libs\FirebaseCloudMessaging;
use Illuminate\Bus\Queueable;

/**
 * Canal para envio de notificações por push.
 */
class NotificacaoPushChannel
{
    use Queueable;

    /**
     * Construtor do canal.
     */
    public function __construct(
        private FirebaseCloudMessaging $messagingService
    ) {
    }

    /**
     * Envia a notificação.
     */
    public function send(Usuario $usuario, NotificationsNotificacao $notificacao): void
    {
        if ($notificacao->notificacao->visualizado) {
            return;
        }

        $this->messagingService->enviarNotificacao($usuario, $notificacao->notificacao);
    }
}
