<?php

namespace App\Models\Caracteristicas;

use App\Models\Equipamentos\Equipamento;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class CaracteristicaEquipamento extends Model
{
    use HasFactory;

    protected $table = 'caracteristicas_equipamento';

    protected $fillable = [
        'valor_id',
        'valor_type',
        'caracteristica_id',
        'equipamento_id',
    ];

    public function caracteristica(): BelongsTo
    {
        return $this->belongsTo(Caracteristica::class);
    }

    public function equipamento(): BelongsTo
    {
        return $this->belongsTo(Equipamento::class);
    }

    public function valor(): MorphTo
    {
        return $this->morphTo();
    }
}
