<?php

namespace App\Models\Administracao\Permissoes;

use App\Models\Usuario;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Grupo extends Model
{
    use HasFactory;

    protected $table = 'administracao_grupos';

    protected $fillable = [
        'nome'
    ];

    public function permissoes(): HasMany
    {
        return $this->hasMany(PermissaoGrupo::class);
    }

    public function usuarios(): HasManyThrough
    {
        return $this->hasManyThrough(Usuario::class, GrupoUsuario::class);
    }
}
