<?php

namespace App\Services\Conversa;

use App\Models\Equipamentos\Conversas\EquipamentoConversa;
use App\Models\Equipamentos\Conversas\Mensagem;
use App\Models\Usuario;
use App\Notifications\ConversaNotification;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;

class ConversaService
{
    public static function notificarOutros(Mensagem $mensagem, EquipamentoConversa $conversa)
    {
        $usuarios = [
            $conversa->usuario,
            $conversa->equipamento->usuario
        ];

        foreach ($usuarios as $usuario) {
            Notification::send($usuario, new ConversaNotification($mensagem));
        }
    }

    public static function contarMensagensNaoVisualizadas(EquipamentoConversa $conversa)
    {
        DB::statement('update equipamento_conversa_visualizacao visualizacao
                set visualizacao.mensagens_nao_visualizadas = (
                    select count(*) from equipamento_conversa_mensagens mensagens
                    where mensagens.id > visualizacao.ultima_mensagem_id
                    and mensagens.equipamento_conversa_id = ?)
                where visualizacao.equipamento_conversa_id = ?', [$conversa->id, $conversa->id]);
    }

    public static function criarVisualizacoes(EquipamentoConversa $conversa)
    {
        $conversa->visualizacao()->create(['usuario_id' => $conversa->usuario_id, 'ultima_mensagem_id' => 0]);
        $conversa->visualizacao()->create(['usuario_id' => $conversa->equipamento->usuario_id, 'ultima_mensagem_id' => 0]);
    }
}
