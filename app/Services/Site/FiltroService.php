<?php

namespace App\Services\Site;

use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Cadastro\Marca;
use App\Models\Equipamentos\Cadastro\Modelo;
use Illuminate\Database\Eloquent\Builder;

class FiltroService
{
    private int $qtdFiltrosCategorias;

    private int $qtdFiltrosMarcas;

    private int $qtdFiltrosModelos;

    /**
     * Construtor do Service.
     */
    public function __construct()
    {
        $this->qtdFiltrosCategorias = config('equipamentos.filtros.quantidade_categorias');
        $this->qtdFiltrosMarcas = config('equipamentos.filtros.quantidade_marcas');
        $this->qtdFiltrosModelos = config('equipamentos.filtros.quantidade_modelos');
    }

    /**
     * Retorna os filtros para a listagem de produtos.
     */
    public function filtros(Builder $query): array
    {
        $queryFiltrada = $this->filtrarQuery(clone $query);

        $filtros = [
            'valor' => $this->queryFiltroPreco($query)->first(),
            'ano' => $this->queryFiltroAno($query)->first(),
            'categorias' => $this->queryFiltroCategoria($queryFiltrada)->get(),
            'modelos' => $this->queryFiltroModelo($queryFiltrada)->get(),
            'marcas' => $this->queryFiltroMarca($queryFiltrada)->get(),
        ];

        return [
            'equipamentos' => $queryFiltrada->paginate(24)->withQueryString(),
            'filtros' => $filtros,
            'filtrosSelecionados' => $this->filtrosSelecionados($query),
        ];
    }

    /**
     * Retorna a query contendo as categorias.
     */
    private function queryFiltroCategoria(Builder $query): Builder
    {
        return Categoria::select('categorias.id', 'categorias.nome')
            ->whereIn('id', fn ($q) => $q->select('categoria_id')->from($query))
            ->where('categoria_mae_id', request()->query('categoria_id'))
            ->take($this->qtdFiltrosCategorias);
    }

    /**
     * Retorna a query contendo os valores mínimo e máximo.
     */
    private function queryFiltroPreco(Builder $query): Builder
    {
        return Equipamento::selectRaw('min(equipamentos.valor) as minimo, max(equipamentos.valor) as maximo')
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
            ->orderBy('quantidade', 'desc')
            ->take($this->qtdFiltrosModelos);
    }

    /**
     * Retorna a query contendo as marcas dos modelos.
     */
    private function queryFiltroMarca(Builder $query): Builder
    {
        return Marca::select('marcas.id', 'marcas.nome')
            ->whereIn('id', fn ($q) => $q->select('marca_id')
            ->from('modelos')
            ->whereIn('id', fn ($q) => $q->select('modelo_id')->from($query)))
            ->addSelect([
                'quantidade' => fn ($q) => $q->selectRaw('count(*)')
                    ->from($query)
                    ->whereIn(
                        'modelo_id',
                        fn ($q) => $q->select('id')
                            ->from('modelos')
                            ->whereColumn('marca_id', 'marcas.id')
                    ),
            ])
            ->orderBy('quantidade', 'desc')
            ->take($this->qtdFiltrosMarcas);
    }

    /**
     * Retorna a query contendo os anos minimo e maximo.
     */
    private function queryFiltroAno(Builder $query): Builder
    {
        return Equipamento::selectRaw('min(equipamentos.ano) as minimo, max(equipamentos.ano) as maximo')
            ->whereIn('id', fn ($q) => $q->select('id')->from($query));
    }

    /**
     * Retorna os produtos filtrados.
     */
    public function filtrarQuery(Builder $query): Builder
    {
        if (request()->query('categoria_id')) {
            $query = $this->filtrarCategoria($query);
        }

        if (request()->query('marca_id')) {
            $query = $this->filtrarMarca($query);
        }

        if (request()->query('modelo_id')) {
            $query = $this->filtrarModelo($query);
        }

        if (request()->query('valor_minimo') || request()->query('valor_maximo')) {
            $query = $this->filtrarValor($query);
        }

        if (request()->query('ano_minimo') || request()->query('ano_maximo')) {
            $query = $this->filtrarAno($query);
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
            $filtrosSelecionados[] = $this->getFiltroSelecionadoCategoria();
        }

        if (request()->query('marca_id')) {
            $filtrosSelecionados[] = $this->getFiltroSelecionadoMarca();
        }

        if (request()->query('modelo_id')) {
            $filtrosSelecionados[] = $this->getFiltroSelecionadoModelo();
        }

        return $filtrosSelecionados;
    }

    /**
     * Retorna a query filtrada por categoria.
     */
    private function filtrarCategoria(Builder $query): Builder
    {
        $query->whereRaw(
            'categoria_id in (
                    with recursive cats (id) as (
                        select id from categorias where
                            (@id is null and categoria_mae_id is null) or (@id is not null and id = @id)
                        union all select cat.id from categorias cat inner join cats on cat.categoria_mae_id = cats.id)
                    select id from cats, (select @id := ?) inicializacao)',
            [request()->query('categoria_id')]
        );

        return $query;
    }

    /**
     * Retorna a query filtrada por marca.
     */
    private function filtrarMarca(Builder $query): Builder
    {
        $query = $query->whereIn('modelo_id', fn ($query) => $query->select('id')
            ->from('modelos')
            ->where('marca_id', request()
                ->query('marca_id')));

        return $query;
    }

    /**
     * Retorna a query filtrada por modelo.
     */
    private function filtrarModelo(Builder $query): Builder
    {
        $query = $query->where('modelo_id', request()->query('modelo_id'));
        return $query;
    }

    /**
     * Retorna a query filtrada por valor.
     */
    private function filtrarValor(Builder $query): Builder
    {
        if (request()->query('valor_minimo')) {
            $query = $query->where('valor', '>=', request()->query('valor_minimo'));
        }

        if (request()->query('valor_maximo')) {
            $query = $query->where('valor', '<=', request()->query('valor_maximo'));
        }

        return $query;
    }

    /**
     * Retorna a query filtrada por ano.
     */
    private function filtrarAno(Builder $query): Builder
    {
        if (request()->query('ano_minimo')) {
            $query = $query->where('ano', '>=', request()->query('ano_minimo'));
        }

        if (request()->query('ano_maximo')) {
            $query = $query->where('ano', '<=', request()->query('ano_maximo'));
        }

        return $query;
    }

    /**
     * Retorna qual categoria foi selecionada como filtro.
     */
    private function getFiltroSelecionadoCategoria(): array
    {
        return [
            'tipo' => 'categoria_id',
            'nome' => Categoria::select('nome')->where('id', request()->query('categoria_id'))->first()->nome,
        ];
    }

    /**
     * Retorna qual marca foi selecionada como filtro.
     */
    private function getFiltroSelecionadoMarca(): array
    {
        return [
            'tipo' => 'marca_id',
            'nome' => Marca::select('nome')->where('id', request()->query('marca_id'))->first()->nome,
        ];
    }

    /**
     * Retorna qual modelo foi selecionado como filtro.
     */
    private function getFiltroSelecionadoModelo(): array
    {
        return [
            'tipo' => 'modelo_id',
            'nome' => Modelo::select('nome')->where('id', request()->query('modelo_id'))->first()->nome,
        ];
    }
}
