<?php

namespace App\Notifications\Channel;

use App\Models\Usuario;
use App\Notifications\Notificacao as NotificationsNotificacao;
use App\Services\Util\FirebaseCloudMessaging;
use Illuminate\Bus\Queueable;

/**
 * Canal para envio de notificações por push.
 */
class NotificacaoPushChannel
{
    use Queueable;

    /**
     * Construtor do canal.
     *
     * @param FirebaseCloudMessaging $messagingService Serviço de comunicação com o FCM.
     */
    public function __construct(
        private FirebaseCloudMessaging $messagingService
    ) {
    }

    /**
     * Envia a notificação.
     *
     * @param Usuario $usuario Usuário que receberá a notificação.
     * @param NotificationsNotificacao $notificacao Notificação a ser enviada.
     *
     * @return void
     */
    public function send(Usuario $usuario, NotificationsNotificacao $notificacao)
    {
        if ($notificacao->notificacao->visualizado) {
            return;
        }

        $this->messagingService->enviarNotificacao($usuario, $notificacao->notificacao);
    }
}
