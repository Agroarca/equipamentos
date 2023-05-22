<?php

namespace App\Models;

use App\Enums\Usuario\TipoPessoa;
use App\Enums\Usuario\TipoUsuario;
use App\Models\Administracao\Permissoes\Grupo;
use App\Models\Notificacoes\UsuarioTokenFCM;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'usuarios';

    protected $fillable = [
        'nome',
        'email',
        'password',
        'tipo_pessoa',
        'cpf',
        'cnpj',
        'celular',
        'tipo_usuario',
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'cpf',
        'cnpj',
        'celular',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'tipo_pessoa' => TipoPessoa::class,
        'tipo_usuario' => TipoUsuario::class
    ];

    public function tokens(): HasMany
    {
        return $this->hasMany(UsuarioTokenFCM::class);
    }

    public function grupos(): BelongsToMany
    {
        return $this->belongsToMany(Grupo::class, 'administracao_grupo_usuario', 'usuario_id', 'grupo_id');
    }
}
