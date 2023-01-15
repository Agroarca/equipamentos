<?php

namespace App\Services\Conversa;

use App\Models\Equipamentos\Conversas\EquipamentoConversa;
use App\Models\Equipamentos\Conversas\Mensagem;
use App\Notifications\ConversaNotification;
use Illuminate\Support\Facades\Notification;

class ConversaService
{
    public static function notificarOutros(Mensagem $mensagem, EquipamentoConversa $conversa)
    {
        //////////////////// TODO
        Notification::send($mensagem->usuario, new ConversaNotification($mensagem));
    }
}
