<?php

namespace App\Models\Marketing\PaginaInicial\ListaProdutos;

use App\Models\Marketing\PaginaInicial\Componente;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Lista extends Model
{
    use HasFactory;

    protected $table = 'pagina_inicial_lista_produtos';

    protected $fillable = [
        'lista_produtos_id',
    ];

    public function listaProdutos(): BelongsTo
    {
        return $this->belongsTo(ListaProdutos::class);
    }

    public function componente(): MorphOne
    {
        return $this->morphOne(Componente::class, 'tipo');
    }
}
