<?php

namespace App\Models\Equipamentos\Caracteristicas\Valor;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class CaracteristicaTextoCurto extends CaracteristicaValor
{
    use HasFactory;

    protected $table = 'caracteristicas_equipamento_texto_curto';
}
