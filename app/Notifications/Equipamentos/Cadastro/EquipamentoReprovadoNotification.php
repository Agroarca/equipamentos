<?php

namespace App\Notifications\Equipamentos\Cadastro;

use App\Mail\Equipamentos\Cadastro\EquipamentoReprovado;
use App\Models\Equipamentos\Cadastro\Equipamento;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Notifications\Notification;

class EquipamentoReprovadoNotification extends Notification implements ShouldQueue
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
        return new EquipamentoReprovado($notifiable, $this->equipamento);
    }
}
