<?php

namespace App\Models\Caracteristicas;

use App\Models\Equipamentos\Equipamento;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CaracteristicaEquipamento extends Model
{
    use HasFactory;

    protected $table = 'caracteristicas_equipamento';

    protected $fillable = [
        'caracteristica_valor_id',
        'caracteristica_valor_tipo',
        'caracteristica_id',
        'equipamento_id',
    ];

    public function caracteristica()
    {
        return $this->belongsTo(Caracteristica::class);
    }

    public function equipamento()
    {
        return $this->belongsTo(Equipamento::class);
    }

    public function valor()
    {
        return $this->morphTo();
    }
}
