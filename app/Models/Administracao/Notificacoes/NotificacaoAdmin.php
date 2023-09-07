<?php

namespace App\Models\Administracao\Notificacoes;

use App\Enums\Administracao\Notificacoes\TipoNotificacaoEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NotificacaoAdmin extends Model
{
    use HasFactory;

    protected $table = 'admininistracao_notificacao_admins';

    protected $fillable = [
        'usuario_id',
        'tipo',
    ];

    protected $casts = [
        'tipo' => TipoNotificacaoEnum::class,
    ];
}
