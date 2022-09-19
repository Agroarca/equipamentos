<?php

namespace App\Models\Caracteristicas\Valor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

abstract class CaracteristicaValor extends Model
{
    use HasFactory;

    protected $fillable = ['valor'];

    public static $tipo = [
        CaracteristicaBooleano::class,
        CaracteristicaInteiro::class,
        CaracteristicaDecimal::class,
        CaracteristicaTextoCurto::class,
        CaracteristicaTextoLongo::class,
        CaracteristicaSelecao::class,
        CaracteristicaSelecaoMultipla::class,
    ];
}
