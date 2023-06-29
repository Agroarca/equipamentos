<?php

namespace App\Jobs\Notificacoes;

use App\Enums\Notificacoes\StatusNotificacao;
use App\Models\Notificacoes\Notificacao;
use App\Models\Usuario;
use App\Services\Libs\FirebaseCloudMessaging;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class EnviarNotificacaoPush implements ShouldQueue, ShouldBeUnique
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        private Usuario $usuario,
        private Notificacao $notificacao
    ) {
        // Construtor
    }

    public function handle(FirebaseCloudMessaging $messagingService): void
    {
        if ($this->notificacao->status === StatusNotificacao::Visualizado) {
            return;
        }

        $messagingService->enviarNotificacao($this->usuario, $this->notificacao);
    }

    public function uniqueId(): string
    {
        return $this->notificacao->id;
    }
}
