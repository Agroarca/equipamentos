<?php

namespace App\Services\Equipamentos;

use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use App\Models\Equipamentos\Caracteristicas\CaracteristicaEquipamento;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaValor;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class EquipamentoCaracteristicaService
{
    /**
     * Retorna todas as caracteristicas ordenadas pela ordem
     */
    public function getCaracteristicasCategoria(int $categoriaId): Collection
    {
        return Cache::tags('caracteristicas')->remember(
            "categoria-$categoriaId",
            3600,
            fn () => $this->getCaracteristicasCategoriaSemCache($categoriaId)
        );
    }

    /**
     * Retorna todas as caracteristicas ordenadas pela ordem sem cache
     */
    public function getCaracteristicasCategoriaSemCache(int $categoriaId): Collection
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
     * @param array<mixed> $caracteristicas
     */
    public function salvarCaracteristicas(Equipamento $equipamento, array $caracteristicas): void
    {
        DB::transaction(function () use ($equipamento, $caracteristicas): void {
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
            $caracValor = new CaracteristicaValor::$tipo[$caracEquip->caracteristica->tipo->value]();
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

    /**
     * Remove uma caracteristica de um equipamento
     */
    public function removerCaracteristica(Equipamento $equipamento, int $id): void
    {
        DB::transaction(function () use ($equipamento, $id): void {
            $caracEquip = $equipamento->caracteristicas()->firstWhere('caracteristica_id', $id);

            $valorClass = app(get_class($caracEquip->valor));
            $valorClass->where('caracteristica_equipamento_id', $caracEquip->id)->delete();
            CaracteristicaEquipamento::where('id', $caracEquip->id)->delete();
        });
    }

    /**
     * Retorna as caracteristicas que serão mantidas, removidas e adicionadas ao alterar a categoria de um equipamento
     */
    public function getCaracteristicasAlterarCategoria(Equipamento $equipamento, Categoria $novaCategoria): array
    {
        $caracteristicas = $equipamento->caracteristicas->map(function ($carac) {
            $carac->caracteristica->valor = $carac->valor->valor;
            return $carac->caracteristica;
        });

        $novasCaracteristicas = $this->getCaracteristicasCategoriaSemCache($novaCategoria->id);

        return [
            'mantidas' => $caracteristicas->intersect($novasCaracteristicas),
            'novas' => $novasCaracteristicas->diff($caracteristicas),
            'removidas' => $caracteristicas->diff($novasCaracteristicas),
        ];
    }
}
