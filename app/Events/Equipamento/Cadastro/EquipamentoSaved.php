<?php

namespace App\Events\Equipamento\Cadastro;

use App\Models\Equipamentos\Cadastro\Equipamento;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class EquipamentoSaved
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public function __construct(
        public Equipamento $equipamento
    ) {
    }
}
