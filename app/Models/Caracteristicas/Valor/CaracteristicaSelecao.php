<?php

namespace App\Models\Caracteristicas\Valor;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class CaracteristicaSelecao extends CaracteristicaValor
{
    use HasFactory;

    protected $table = 'caracteristicas_equipamento_selecao';

    protected function getValorAttribute()
    {
        return $this->caracteristicas_opcoes_id;
    }

    protected function setValorAttribute($v)
    {
        $this->caracteristicas_opcoes_id = $v;
    }

    protected function caracteristicasOpcoes()
    {
        return $this->hasOne(CaracteristicaOpcao::class);
    }
}
