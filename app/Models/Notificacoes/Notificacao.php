<?php

namespace App\Models\Notificacoes;

use App\Models\Usuario;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notificacao extends Model
{
    use HasFactory;
    protected $table = 'notificacoes';

    protected $fillable = [
        'passo',
        'processar_apos',
        'visualizado',
        'usuario_id',
        'texto',
        'tipo_id',
        'tipo_type',
    ];

    public function tipo()
    {
        return $this->morphTo();
    }

    public function usuario()
    {
        return $this->belongsTo(Usuario::class);
    }
}
