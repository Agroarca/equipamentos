<?php

// phpcs:disable SlevomatCodingStandard.Functions.UnusedParameter.UnusedParameter

namespace App\Notifications;

use App\Enums\Notificacoes\StatusNotificacao;
use App\Models\Notificacoes\Notificacao as NotificacaoModel;
use App\Notifications\Channel\NotificacaoPushChannel;
use App\Notifications\Channel\NotificacaoWebSocketChannel;
use App\Services\Notificacoes\NotificacaoService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Notification;

class Notificacao extends Notification implements ShouldQueue
{
    use Queueable;

    public int $qtdNotificacoesUsuario;

    public function __construct(
        public NotificacaoModel $notificacao
    ) {
        $this->afterCommit();
        $this->qtdNotificacoesUsuario = app(NotificacaoService::class)
            ->getCountNotificacoesNaoLidasUsuario($notificacao->usuario_id);
    }

    public function via(mixed $notifiable): array
    {
        return [
            NotificacaoWebSocketChannel::class,
            NotificacaoPushChannel::class,
        ];
    }

    public function withDelay(mixed $notifiable): array
    {
        return [
            NotificacaoWebSocketChannel::class => now()->addSeconds(
                config('equipamentos.notificacoes.notificacao_websocket_delay_secs')
            ),
            NotificacaoPushChannel::class => now()->addSeconds(
                config('equipamentos.notificacoes.notificacao_push_delay_secs')
            ),
        ];
    }

    public function shouldSend(mixed $notifiable): bool
    {
        return $this->notificacao->status !== StatusNotificacao::Visualizado;
    }
}
