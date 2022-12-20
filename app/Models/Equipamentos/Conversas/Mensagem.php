<?php

namespace App\Models\Equipamentos\Conversas;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mensagem extends Model
{
    use HasFactory;

    protected $table = 'equipamento_conversa_mensagens';
    protected $fillable = [
        'equipamento_conversa_id',
        'usuario_id',
        'mensagem'
    ];

    public function equipamentoConversa()
    {
        return $this->belongsTo(EquipamentoConversa::class);
    }
}
