<?php

namespace App\Services\Equipamentos;

use App\Models\Caracteristicas\Caracteristica;
use App\Models\Caracteristicas\CaracteristicaEquipamento;
use App\Models\Caracteristicas\Valor\CaracteristicaValor;
use App\Models\Equipamentos\Equipamento;
use Illuminate\Support\Facades\DB;

class EquipamentoCaracteristicaService
{
    /** Retorna todas as caracteristicas ordenadas pela ordem */
    public static function getCaracteristicasCategoria($categoriaId)
    {
        return Caracteristica::whereRaw(
            'categoria_id in (
                with recursive cats(id) as (
                    select id from categorias where @id = id
                    union all select cat.categoria_mae_id from categorias cat inner join cats on cat.id = cats.id
                ) select id from cats , (select @id := ?) inicializacao)',
            [$categoriaId]
        )
            ->with(['opcoes'])
            ->orderBy('ordem')
            ->orderBy('nome')
            ->get();
    }

    public static function salvarCaracteristicas(Equipamento $equipamento, array $caracteristicas)
    {
        DB::transaction(function () use ($equipamento, $caracteristicas) {
            $caracCategoria = self::getCaracteristicasCategoria($equipamento->categoria_id);
            $equipamento->load(['caracteristicas']);

            foreach ($caracCategoria as $carac) {
                if (array_key_exists('carac-'.$carac->id, $caracteristicas)) {
                    self::salvarCaracteristica($equipamento, $carac->id, $caracteristicas['carac-'.$carac->id]);
                }
            }
        });
    }

    public static function salvarCaracteristica(Equipamento $equipamento, $id, $valor)
    {
        $caracEquip = $equipamento->caracteristicas()->firstWhere('caracteristica_id', $id);

        if (is_null($caracEquip)) {
            $caracEquip = new CaracteristicaEquipamento();
            $caracEquip->caracteristica_id = $id;
            $caracEquip->equipamento_id = $equipamento->id;
            $caracEquip->save();
        }

        $caracValor = $caracEquip->caracteristicaValor;

        if (is_null($caracValor)) {
            $caracValor = new CaracteristicaValor::$tipo[$caracEquip->caracteristica->tipo]();
            $caracValor->valor = $valor;
            $caracValor->caracteristica_equipamento_id = $caracEquip->id;
            $caracValor->save();

            $caracEquip->valor()->associate($caracValor);
            $caracEquip->save();
        } else {
            $caracValor->valor = $valor;
            $caracValor->save();
        }
    }
}
