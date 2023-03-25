<?php

namespace App\Models\Equipamentos\Conversas;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Visualizacao extends Model
{
    use HasFactory;

    protected $table = 'equipamento_conversa_visualizacao';

    protected $fillable = [
        'equipamento_conversa_id',
        'usuario_id',
        'ultima_mensagem_id',
        'mensagens_nao_visualizadas',
    ];

    public function equipamentoConversa(): BelongsTo
    {
        return $this->belongsTo(EquipamentoConversa::class);
    }

    public function usuario(): BelongsTo
    {
        return $this->belongsTo(Usuario::class);
    }
}
