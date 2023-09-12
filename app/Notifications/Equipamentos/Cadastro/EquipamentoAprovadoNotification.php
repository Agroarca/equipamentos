<?php

namespace App\Notifications\Equipamentos\Cadastro;

use App\Models\Equipamentos\Cadastro\Equipamento;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Notification;
use App\Mail\Equipamentos\Cadastro\EquipamentoAprovado;
use Illuminate\Mail\Mailable;

class EquipamentoAprovadoNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public function __construct(
        public Equipamento $equipamento
    ) {
    }

    // phpcs:disable SlevomatCodingStandard.Functions.UnusedParameter.UnusedParameter
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    public function toMail(object $notifiable): Mailable
    {
        return new EquipamentoAprovado($notifiable, $this->equipamento);
    }
}
