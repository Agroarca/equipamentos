<?php

namespace App\Listeners\Equipamentos\Cadastro;

use App\Enums\Equipamentos\Cadastro\StatusEquipamento;
use App\Events\Equipamento\Cadastro\EquipamentoSaved;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Notifications\Equipamentos\Cadastro\EquipamentoAprovadoNotification;
use App\Notifications\Equipamentos\Cadastro\EquipamentoReprovadoNotification;
use App\Services\Notificacoes\NotificacaoAdminService;
use Illuminate\Support\Facades\Notification;

class EquipamentoSavedListener
{
    /**
     * Handle the event.
     */
    public function handle(EquipamentoSaved $event): void
    {
        $this->handleStatus($event->equipamento);
    }

    private function handleStatus(Equipamento $equipamento): void
    {
        if (!$equipamento->isDirty('status')) {
            return;
        }

        if ($equipamento->status == StatusEquipamento::Aprovado) {
            Notification::send($equipamento->usuario, new EquipamentoAprovadoNotification($equipamento));
        }

        if ($equipamento->status == StatusEquipamento::Reprovado) {
            Notification::send($equipamento->usuario, new EquipamentoReprovadoNotification($equipamento));
        }

        if ($equipamento->status == StatusEquipamento::Criado) {
            app(NotificacaoAdminService::class)->notificarEquipamentoEnviadoAprovacao();
        }
    }
}
