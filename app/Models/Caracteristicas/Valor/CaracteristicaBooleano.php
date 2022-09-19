<?php

namespace App\Models\Caracteristicas\Valor;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class CaracteristicaBooleano extends CaracteristicaValor
{
    use HasFactory;

    protected $table = 'caracteristicas_equipamento_booleano';
}
