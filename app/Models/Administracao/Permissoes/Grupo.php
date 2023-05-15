<?php

namespace App\Models\Administracao\Permissoes;

use App\Models\Usuario;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

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

    public function usuarios(): BelongsToMany
    {
        return $this->belongsToMany(Usuario::class, 'administracao_grupo_usuario', 'grupo_id', 'usuario_id');
    }
}
