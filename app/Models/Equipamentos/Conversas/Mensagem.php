<?php

namespace App\Models\Equipamentos\Conversas;

use App\Models\Usuario;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Mensagem extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'equipamento_conversa_mensagens';

    protected $touches = ['equipamentoConversa'];

    protected $fillable = [
        'equipamento_conversa_id',
        'usuario_id',
        'mensagem',
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
