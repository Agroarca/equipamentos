<?php

namespace App\Notifications\Channel;

use Illuminate\Bus\Queueable;
use App\Models\Usuario;
use App\Notifications\Notificacao as NotificationsNotificacao;
use App\Services\Util\FirebaseCloudMessaging;

class NotificacaoPushChannel
{
    use Queueable;

    public function __construct(
        public FirebaseCloudMessaging $messagingService
    ) {
    }

    public function send(Usuario $usuario, NotificationsNotificacao $notificacao)
    {
        if ($notificacao->notificacao->visualizado) {
            return;
        }

        $this->messagingService->enviarNotificacao($usuario, $notificacao->notificacao);
    }
}
