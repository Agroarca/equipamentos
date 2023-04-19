<?php

namespace App\Models\Marketing\PaginaInicial;

use App\Enums\Marketing\PaginaInicial\StatusVersao;
use App\Models\Marketing\PaginaInicial\Carrossel\CarrosselItem;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Versao extends Model
{
    use HasFactory;

    protected $table = 'pagina_inicial_versoes';

    protected $fillable = [
        'status',
        'prioridade',
        'descricao',
        'data_inicio',
        'data_fim',
    ];

    protected $casts = [
        'status' => StatusVersao::class,
    ];

    public function carrosselItens(): HasMany
    {
        return $this->hasMany(CarrosselItem::class);
    }

    public function componentes(): HasMany
    {
        return $this->hasMany(Componente::class);
    }
}
