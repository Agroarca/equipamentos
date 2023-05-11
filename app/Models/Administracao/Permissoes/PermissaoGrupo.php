<?php

namespace App\Models\Administracao\Permissoes;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PermissaoGrupo extends Model
{
    use HasFactory;

    protected $table = 'nome_da_tabela';

    protected $fillable = [
        'chave',
        'grupo_id',
    ];

    public function grupo(): BelongsTo
    {
        return $this->belongsTo(Grupo::class);
    }
}
