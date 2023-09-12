<?php

namespace App\Notifications\Equipamentos\Cadastro;

use App\Mail\Equipamentos\Cadastro\EquipamentoEnviadoAprovacao;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Notifications\Notification;

class EquipamentoEnviadoAprovacaoNotification extends Notification implements ShouldQueue
{
    use Queueable;

    // phpcs:disable SlevomatCodingStandard.Functions.UnusedParameter.UnusedParameter
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    public function toMail(object $notifiable): Mailable
    {
        return new EquipamentoEnviadoAprovacao($notifiable);
    }
}
