<?php

namespace App\Models\Caracteristicas\Valor;

use App\Models\Caracteristicas\CaracteristicaEquipamento;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

abstract class CaracteristicaValor extends Model
{
    use HasFactory;

    protected $fillable = [
        'valor',
        'caracteristica_equipamento_id',
    ];

    public static $tipo = [
        CaracteristicaBooleano::class,
        CaracteristicaInteiro::class,
        CaracteristicaDecimal::class,
        CaracteristicaTextoCurto::class,
        CaracteristicaTextoLongo::class,
        CaracteristicaSelecao::class,
    ];

    public function caracteristicaEquipamento(): MorphOne
    {
        return $this->morphOne(CaracteristicaEquipamento::class, 'valor');
    }
}
