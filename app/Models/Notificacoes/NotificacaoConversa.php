<?php

namespace App\Models\Notificacoes;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class NotificacaoConversa extends Model
{
    use HasFactory;

    protected $table = 'notificacao_conversa';

    protected $fillable = ['conversa_id'];

    public function notificacao(): MorphOne
    {
        return $this->morphOne(Notificacao::class, 'tipo');
    }
}
