<?php

namespace App\Models\Notificacoes\Equipamentos;

use App\Models\Notificacoes\Notificacao;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class NotificacaoConversaEquipamento extends Model
{
    use HasFactory;

    protected $table = 'notificacao_conversa_equipamentos';

    protected $fillable = [
        'equipamento_id',
    ];

    public function notificacao(): MorphOne
    {
        return $this->morphOne(Notificacao::class, 'tipo');
    }
}
