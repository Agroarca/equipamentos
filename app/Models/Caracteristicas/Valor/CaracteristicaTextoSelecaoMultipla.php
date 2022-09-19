<?php

namespace App\Models\Caracteristicas\Valor;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class CaracteristicaTextoSelecao extends CaracteristicaValor
{
    use HasFactory;

    protected $table = 'caracteristicas_equipamento_selecao';

    protected function getValorAttribute(){
        return $this->caracteristicas_opcoes();
    }

    protected function setValorAttribute($v){
        return $this->caracteristicas_opcoes_id = $v;
    }

    protected function caracteristicas_opcoes(){
        return $this->hasMany(CaracteristicaOpcao::class);
    }
}
