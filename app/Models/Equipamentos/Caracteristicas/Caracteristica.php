<?php

namespace App\Models\Equipamentos\Caracteristicas;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaOpcao;
use App\Models\Equipamentos\Categoria;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Caracteristica extends Model
{
    use HasFactory;

    protected $table = 'caracteristicas';

    protected $fillable = [
        'nome',
        'tipo',
        'ordem',
        'obrigatorio',
        'minimo',
        'maximo',
        'quantidade',
        'categoria_id',
    ];

    protected $casts = [
        'tipo' => TipoCaracteristica::class,
    ];

    public function categoria(): BelongsTo
    {
        return $this->belongsTo(Categoria::class);
    }

    public function opcoes(): HasMany
    {
        return $this->hasMany(CaracteristicaOpcao::class);
    }
}
