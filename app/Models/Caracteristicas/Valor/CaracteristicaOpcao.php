<?php

namespace App\Models\Caracteristicas\Valor;

use App\Models\Caracteristicas\Caracteristica;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CaracteristicaOpcao extends Model
{
    use HasFactory;

    protected $table = 'caracteristicas_opcoes';

    protected $fillable = [
        'nome',
        'caracteristica_id',
    ];

    public function caracteristica(): BelongsTo
    {
        return $this->belongsTo(Caracteristica::class);
    }
}
