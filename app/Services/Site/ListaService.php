<?php

namespace App\Services\Site;

use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Cadastro\Marca;
use App\Models\Equipamentos\Cadastro\Modelo;
use Illuminate\Database\Eloquent\Builder;

/**
 * Classe responsável por processar as listagens de produtos.
 */
class ListaService
{
    private int $categorias;

    private int $marcas;

    private int $modelos;

    /**
     * Construtor do Service.
     */
    public function __construct()
    {
        $this->categorias = config('equipamentos.filtros.quantidade_categorias');
        $this->marcas = config('equipamentos.filtros.quantidade_marcas');
        $this->modelos = config('equipamentos.filtros.quantidade_modelos');
    }

    /**
     * Retorna a query base para as listagens.
     */
    private function queryBase(): Builder
    {
        $query = Equipamento::aprovado()->select('equipamentos.*');

        $query->with([
            'imagens' => fn ($query) => $query->whereIn(
                'equipamento_imagens.id',
                fn ($squery) => $squery->selectRaw(
                    'min(eim.id) from equipamento_imagens as eim group by eim.equipamento_id'
                )
            ),
        ]);

        return $query;
    }

    /**
     * Retorna a query para a listagem de produtos de uma categoria.
     */
    public function queryCategoria(?int $id): Builder
    {
        return self::queryBase()->whereRaw(
            'categoria_id in (
                with recursive cats (id) as (
                    select id from categorias where
                        (@id is null and categoria_mae_id is null) or (@id is not null and id = @id)
                    union all select cat.id from categorias cat inner join cats on cat.categoria_mae_id = cats.id)
                select id from cats, (select @id := ?) inicializacao)',
            [$id]
        );
    }

    /**
     * Retorna a query para a listagem de produtos de uma marca.
     */
    public function queryMarca(int $id): Builder
    {
        return self::queryBase()->whereIn('modelo_id', function ($query) use ($id): void {
            $query->select('id')
                ->from('modelos')
                ->where('marca_id', $id);
        });
    }

    /**
     * Retorna a query para a listagem de produtos de uma lista de produtos.
     */
    public function queryLista(int $id): Builder
    {
        return self::queryBase()->whereIn('id', function ($query) use ($id): void {
            $query->select('equipamento_id')
                ->from('lista_produtos')
                ->where('lista_id', $id);
        });
    }

    /**
     * Retorna os filtros para a listagem de produtos.
     */
    public function filtros(Builder $query): array
    {
        $queryFiltrada = $this->filtrarQuery(clone $query);

        $filtros = [];

        $filtros['categorias'] = $this->queryFiltroCategoria($queryFiltrada)
            ->take($this->categorias)
            ->get();

        $filtros['modelos'] = $this->queryFiltroModelo($queryFiltrada)
            ->take($this->modelos)
            ->get();

        $filtros['marcas'] = $this->queryFiltroMarca($queryFiltrada)
            ->take($this->marcas)
            ->get();

        $filtros['valor'] = $this->queryFiltroPreco($query)->first();

        $filtros['ano'] = $this->queryFiltroAno($query)->first();

        return $filtros;
    }

    /**
     * Retorna a query contendo as categorias.
     */
    private function queryFiltroCategoria(Builder $query): Builder
    {
        return Categoria::select('categorias.id', 'categorias.nome')
            ->whereIn('id', fn ($q) => $q->select('categoria_id')->from($query))
            ->where('categoria_mae_id', request()->query('categoria_id'));
    }

    /**
     * Retorna a query contendo os valores mínimo e máximo.
     */
    private function queryFiltroPreco(Builder $query): Builder
    {
        return Equipamento::selectRaw(' min(equipamentos.valor) as minimo, max(equipamentos.valor) as maximo')
            ->whereIn('id', fn ($q) => $q->select('id')->from($query));
    }

    /**
     * Retorna a query contendo os modelos.
     */
    private function queryFiltroModelo(Builder $query): Builder
    {
        return Modelo::select('modelos.id', 'modelos.nome')
            ->whereIn('id', fn ($q) => $q->select('modelo_id')->from($query))
            ->addSelect([
                'quantidade' => fn ($q) => $q->selectRaw('count(*)')->from($query)
                    ->whereColumn('modelo_id', 'modelos.id'),
            ])
            ->orderBy('quantidade', 'desc');
    }

    /**
     * Retorna a query contendo as marcas dos modelos.
     */
    private function queryFiltroMarca(Builder $query): Builder
    {
        return Marca::select('marcas.id', 'marcas.nome')
            ->whereIn('id', fn ($q) => $q->select('marca_id')->from('modelos')->whereIn(
                'id',
                fn ($q) => $q->select('modelo_id')->from($query)
            ))
            ->addSelect([
                'quantidade' => fn ($q) => $q->selectRaw('count(*)')->from($query)
                    ->whereIn(
                        'modelo_id',
                        fn ($q) => $q
                            ->select('id')
                            ->from('modelos')
                            ->whereColumn('marca_id', 'marcas.id')
                    ),
            ])
            ->orderBy('quantidade', 'desc');
    }

    /**
     * Retorna a query contendo os anos minimo e maximo.
     */
    private function queryFiltroAno(Builder $query): Builder
    {
        return Equipamento::selectRaw('min(equipamentos.ano) as minimo, max(equipamentos.ano) as maximo')
            ->whereIn('id', fn ($q) => $q->select('id')->from($query));
    }

    //phpcs:disable SlevomatCodingStandard.Functions.FunctionLength.FunctionLength

    /**
     * Retorna os produtos filtrados.
     */
    public function filtrarQuery(Builder $query): Builder
    {
        if (request()->query('categoria_id')) {
            $query = $this->filtrarQueryCategoria($query, request()->query('categoria_id'));
        }

        if (request()->query('marca_id')) {
            $query->whereIn('modelo_id', fn ($query) => $query->select('id')
                ->from('modelos')
                ->where('marca_id', request()
                    ->query('marca_id')));
        }

        if (request()->query('modelo_id')) {
            $query->where('modelo_id', request()->query('modelo_id'));
        }

        if (request()->query('valor_minimo')) {
            $query->where('valor', '>=', request()->query('valor_minimo'));
        }

        if (request()->query('valor_maximo')) {
            $query->where('valor', '<=', request()->query('valor_maximo'));
        }

        if (request()->query('ano_minimo')) {
            $query->where('ano', '>=', request()->query('ano_minimo'));
        }

        if (request()->query('ano_maximo')) {
            $query->where('ano', '<=', request()->query('ano_maximo'));
        }

        return $query;
    }

    /**
     * Retorna os filtros selecionados
     */
    public function filtrosSelecionados(): array
    {
        $filtrosSelecionados = [];

        if (request()->query('categoria_id')) {
            $filtrosSelecionados['categoria'] = [
                'tipo' => 'categoria_id',
                'nome' => Categoria::select('nome')->where('id', request()->query('categoria_id'))->first()->nome,
            ];
        }

        if (request()->query('marca_id')) {
            $filtrosSelecionados['marca'] = [
                'tipo' => 'marca_id',
                'nome' => Marca::select('nome')->where('id', request()->query('marca_id'))->first()->nome,
            ];
        }

        if (request()->query('modelo_id')) {
            $filtrosSelecionados['modelo'] = [
                'tipo' => 'modelo_id',
                'nome' => Modelo::select('nome')->where('id', request()->query('modelo_id'))->first()->nome,
            ];
        }

        return $filtrosSelecionados;
    }

    /**
     * Retorna a query filtrada por categoria.
     */
    private function filtrarQueryCategoria(Builder $query, $categoriaId): Builder
    {
        $query->whereRaw(
            'categoria_id in (
                    with recursive cats (id) as (
                        select id from categorias where
                            (@id is null and categoria_mae_id is null) or (@id is not null and id = @id)
                        union all select cat.id from categorias cat inner join cats on cat.categoria_mae_id = cats.id)
                    select id from cats, (select @id := ?) inicializacao)',
            [$categoriaId]
        );

        return $query;
    }
}
