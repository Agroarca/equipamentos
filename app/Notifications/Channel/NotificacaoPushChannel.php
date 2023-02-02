<?php

namespace App\Notifications\Channel;

use Illuminate\Bus\Queueable;
use App\Models\Notificacoes\Notificacao;
use App\Models\Usuario;
use App\Services\Util\FirebaseCloudMessaging;

class NotificacaoPushChannel
{
    use Queueable;

    public function __construct(
        public FirebaseCloudMessaging $messagingService
    ) {
    }

    public function send(Usuario $usuario, Notificacao $notificacao)
    {
        if ($notificacao->visualizado) {
            return;
        }

        $this->messagingService->enviarNotificacao($usuario, $notificacao->titulo, $notificacao->texto);
    }
}
