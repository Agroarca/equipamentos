<?php

namespace App\Models\Equipamentos\Conversas;

use App\Models\Equipamentos\Equipamento;
use App\Models\Usuario;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EquipamentoConversa extends Model
{
    use HasFactory;

    protected $table = 'equipamento_conversas';
    protected $fillable = ['equipamento_id', 'usuario_id'];

    public function equipamento()
    {
        return $this->belongsTo(Equipamento::class);
    }

    public function usuario()
    {
        return $this->belongsTo(Usuario::class);
    }

    public function mensagens()
    {
        return $this->hasMany(Mensagem::class);
    }

    public function visualizacao()
    {
        return $this->hasMany(Visualizacao::class);
    }
}
