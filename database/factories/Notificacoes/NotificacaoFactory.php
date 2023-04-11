<?php

namespace Database\Factories\Notificacoes;

use App\Models\Notificacoes\Equipamentos\NotificacaoConversaEquipamento;
use App\Models\Usuario;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class NotificacaoFactory extends Factory
{
    public function definition(): array
    {
        return [
            'titulo' => Str::random(10),
            'texto' => Str::random(50),
            'usuario_id' => Usuario::factory(),
            'visualizado' => false,
            'tipo_id' => NotificacaoConversaEquipamento::factory(),
            'tipo_type' => NotificacaoConversaEquipamento::class,
        ];
    }
}
