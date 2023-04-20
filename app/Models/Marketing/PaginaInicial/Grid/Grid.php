<?php

namespace App\Models\Marketing\PaginaInicial\Grid;

use App\Enums\Marketing\PaginaInicial\Grid\Formato;
use App\Models\Marketing\PaginaInicial\Componente;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Grid extends Model
{
    use HasFactory;

    protected $table = 'pagina_inicial_grids';

    protected $fillable = [
        'formato',
    ];

    protected $casts = [
        'formato' => Formato::class,
    ];

    public function imagens(): HasMany
    {
        return $this->hasMany(GridImagem::class);
    }

    public function componente(): MorphOne
    {
        return $this->morphOne(Componente::class, 'tipo');
    }
}
