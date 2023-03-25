<?php

namespace App\Models\Notificacoes;

use App\Models\Usuario;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UsuarioTokenFCM extends Model
{
    use HasFactory;

    protected $table = 'usuario_token_fcm';

    protected $fillable = [
        'token',
        'usuario_id',
    ];

    public function usuario(): BelongsTo
    {
        return $this->belongsTo(Usuario::class);
    }
}
