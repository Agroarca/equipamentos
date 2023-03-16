<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Models\Notificacoes\UsuarioTokenFCM;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends Authenticatable
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

    protected $hidden = ['password', 'remember_token', 'cpf', 'cnpj', 'celular'];


    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function tokens()
    {
        return $this->hasMany(UsuarioTokenFCM::class);
    }
}
