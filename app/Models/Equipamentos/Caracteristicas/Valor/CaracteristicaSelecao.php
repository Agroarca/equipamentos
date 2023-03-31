<?php

namespace App\Models\Equipamentos\Caracteristicas\Valor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;

class CaracteristicaSelecao extends CaracteristicaValor
{
    use HasFactory;

    protected $table = 'caracteristicas_equipamento_selecao';

    protected function getValorAttribute(): int
    {
        return $this->caracteristicas_opcoes_id;
    }

    protected function setValorAttribute(int $v): void
    {
        $this->caracteristicas_opcoes_id = $v;
    }

    protected function caracteristicasOpcoes(): HasOne
    {
        return $this->hasOne(CaracteristicaOpcao::class);
    }
}
