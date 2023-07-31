<?php

namespace App\Services\Equipamentos\Cadastro;

use App\Enums\Equipamentos\Cadastro\StatusEquipamento;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use App\Models\Equipamentos\Caracteristicas\CaracteristicaEquipamento;
use App\Services\Equipamentos\EquipamentoCaracteristicaService;
use Illuminate\Support\Facades\DB;

class EquipamentoService
{
    private string $caracEquipTable;

    /**
     * Construtor do Service.
     */
    public function __construct(
        private EquipamentoCaracteristicaService $equipCaracService
    ) {
        $this->caracEquipTable = app(CaracteristicaEquipamento::class)->getTable();
    }

    /**
     * Verificar se o equipamento possui imagem
     */
    public function temImagem(Equipamento $equipamento): bool
    {
        return $equipamento->imagens()->count() > 0;
    }

    /**
     * Verificar se o equipamento possui descrição
     */
    public function temDescricao(Equipamento $equipamento): bool
    {
        return $equipamento->descricao !== null & $equipamento->descricao !== '';
    }

    /**
     * Verificar se falta alguma característica obrigatória ser preenchida
     */
    public function faltamCaracteristicasObrigatorias(Equipamento $equipamento): bool
    {
        $caracteristicas = $this->equipCaracService->getCaracteristicasCategoria($equipamento->categoria_id);

        $caracteristicasFaltantesObrigatorias = Caracteristica::where('obrigatorio', true)
            ->whereNotIn(
                'id',
                fn ($query) =>
                $query->select('caracteristica_id')
                    ->from($this->caracEquipTable)
                    ->where('equipamento_id', $equipamento->id)
            )
            ->whereIn('caracteristicas.id', $caracteristicas->pluck('id'))
            ->count();

        return $caracteristicasFaltantesObrigatorias !== 0;
    }

    /**
     * Retorna o caminho da pasta de armazenamento das imagens do equipamento
     */
    public function getStoragePathImagem(int $equipamentoId): string
    {
        return config('equipamentos.imagens.equipamentos') . $equipamentoId . '/';
    }

    /**
     * Envia um pensamento para aprovação
     */
    public function enviarParaAprovacao(Equipamento $equipamento): void
    {
        $equipamento->passo_cadastro = 4;
        $equipamento->status = StatusEquipamento::Criado;
        $equipamento->save();
    }

    /**
     * Altera a categoria de um equipamento
     */
    public function alterarCategoria(Equipamento $equipamento, Categoria $categoria, array $novasCaracteristicas): void
    {
        DB::transaction(function () use ($equipamento, $categoria, $novasCaracteristicas): void {
            $caracteristicas = $this->equipCaracService
                ->getCaracteristicasAlterarCategoria($equipamento, $categoria);

            $equipamento->categoria_id = $categoria->id;
            $equipamento->save();

            foreach ($caracteristicas['removidas'] as $carac) {
                $this->equipCaracService->removerCaracteristica($equipamento, $carac->id);
            }

            $this->equipCaracService->salvarCaracteristicas($equipamento, $novasCaracteristicas);
        });
    }
}
