<?php

namespace Database\Factories\Notificacoes\Equipamentos;

use App\Models\Equipamentos\Cadastro\Equipamento;
use Illuminate\Database\Eloquent\Factories\Factory;

class NotificacaoConversaEquipamentoFactory extends Factory
{
    public function definition(): array
    {
        return [
            'equipamento_id' => Equipamento::factory(),
        ];
    }
}
