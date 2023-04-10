<?php

namespace App\Notifications\Channel;

use App\Enums\Equipamentos\Cadastro\StatusNotificacao;
use App\Models\Usuario;
use App\Notifications\Notificacao as NotificationsNotificacao;
use App\Services\Libs\FirebaseCloudMessaging;
use Illuminate\Bus\Queueable;

class NotificacaoPushChannel
{
    use Queueable;

    public function __construct(
        private FirebaseCloudMessaging $messagingService
    ) {
    }

    public function send(Usuario $usuario, NotificationsNotificacao $notificacao): void
    {
        if ($notificacao->notificacao->status === StatusNotificacao::Visualizado) {
            return;
        }

        $this->messagingService->enviarNotificacao($usuario, $notificacao->notificacao);
    }
}
