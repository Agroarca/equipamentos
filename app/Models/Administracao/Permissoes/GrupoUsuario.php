<?php

namespace App\Models\Administracao\Permissoes;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GrupoUsuario extends Model
{
    use HasFactory;

    protected $table = 'administracao_grupo_usuario';

    protected $fillable = [
        'grupo_id',
        'usuario_id',
    ];
}
