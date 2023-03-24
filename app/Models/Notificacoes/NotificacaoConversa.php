<?php

namespace App\Models\Notificacoes;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NotificacaoConversa extends Model
{
    use HasFactory;

    protected $table = 'notificacao_conversa';

    protected $fillable = ['conversa_id'];

    public function notificacao()
    {
        return $this->morphOne(Notificacao::class, 'tipo');
    }
}
