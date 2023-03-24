<?php

namespace App\Services\Equipamentos;

use App\Models\Caracteristicas\Caracteristica;
use App\Models\Caracteristicas\CaracteristicaEquipamento;
use App\Models\Caracteristicas\Valor\CaracteristicaValor;
use App\Models\Equipamentos\Equipamento;
use Illuminate\Support\Facades\DB;

/**
 * Classe responsável por gerenciar as caracteristicas de um equipamento
 */
class EquipamentoCaracteristicaService
{
    /**
     * Retorna todas as caracteristicas ordenadas pela ordem
     *
     * @param integer $categoriaId Id da categoria.
     *
     * @return array[Caracteristica]
     */
    public function getCaracteristicasCategoria(int $categoriaId): array
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

    /**
     * Salva as caracteristicas em um equipamento
     *
     * @param Equipamento $equipamento Equipamento.
     * @param array       $caracteristicas Caracteristicas.
     *
     * @return void
     */
    public function salvarCaracteristicas(Equipamento $equipamento, array $caracteristicas): void
    {
        DB::transaction(function () use ($equipamento, $caracteristicas) {
            $caracCategoria = self::getCaracteristicasCategoria($equipamento->categoria_id);
            $equipamento->load(['caracteristicas']);

            foreach ($caracCategoria as $carac) {
                if (array_key_exists('carac-' . $carac->id, $caracteristicas)) {
                    self::salvarCaracteristica($equipamento, $carac->id, $caracteristicas['carac-' . $carac->id]);
                }
            }
        });
    }

    /**
     * Salva uma caracteristica em um equipamento
     *
     * @param Equipamento $equipamento Equipamento.
     * @param integer     $id Id da caracteristica.
     * @param mixed       $valor Valor da caracteristica.
     *
     * @return void
     */
    public function salvarCaracteristica(Equipamento $equipamento, int $id, mixed $valor): void
    {
        $caracEquip = $equipamento->caracteristicas()->firstWhere('caracteristica_id', $id);

        if ($caracEquip === null) {
            $caracEquip = new CaracteristicaEquipamento();
            $caracEquip->caracteristica_id = $id;
            $caracEquip->equipamento_id = $equipamento->id;
            $caracEquip->save();
        }

        $caracValor = $caracEquip->caracteristicaValor;

        if ($caracValor === null) {
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
