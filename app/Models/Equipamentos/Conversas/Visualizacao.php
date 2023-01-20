<?php

namespace App\Models\Equipamentos\Conversas;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visualizacao extends Model
{
    use HasFactory;

    protected $table = 'equipamento_conversa_visualizacao';
    protected $fillable = [
        'equipamento_conversa_id',
        'usuario_id',
        'ultima_mensagem_id',
        'mensagens_nao_visualizadas'
    ];

    public function equipamentoConversa()
    {
        return $this->belongsTo(EquipamentoConversa::class);
    }

    public function usuario()
    {
        return $this->belongsTo(Usuario::class);
    }
}
