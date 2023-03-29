<?php

namespace App\Models\Equipamentos\Caracteristicas\Valor;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class CaracteristicaTextoLongo extends CaracteristicaValor
{
    use HasFactory;

    protected $table = 'caracteristicas_equipamento_texto_longo';
}
