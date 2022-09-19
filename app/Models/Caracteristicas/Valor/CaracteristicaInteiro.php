<?php

namespace App\Models\Caracteristicas\Valor;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class CaracteristicaInteiro extends CaracteristicaValor
{
    use HasFactory;

    protected $table = 'caracteristicas_equipamento_inteiro';
}
