<?php

namespace App\Services\Site;

use App\Models\Equipamentos\Cadastro\Equipamento;
use Illuminate\Database\Eloquent\Builder;

/**
 * Classe responsável por processar as listagens de produtos.
 */
class ListaService
{
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
     * Retorna a query para a pesquisa de produtos, com base no termo de pesquisa, retornando resultados
     * que contenham o termo no título, descrição, nome do modelo ou nome da marca.
     */
    public function queryPesquisa(): Builder
    {
        $termo = request()->query('pesquisa');
        return self::queryBase()->where(function ($query) use ($termo): void {
            $query->whereFullText('equipamentos.titulo', $termo)
                ->orWhere('equipamentos.titulo', 'like', "%$termo%")

                ->orWhereFullText('equipamentos.descricao', $termo)
                ->orWhere('equipamentos.descricao', 'like', "%$termo%")

                ->orWhereIn('equipamentos.modelo_id', function ($query) use ($termo): void {
                    $query->select('id')
                        ->from('modelos')
                        ->whereFullText('modelos.nome', $termo)
                        ->orWhere('modelos.nome', 'like', "%$termo%")
                        ->orWhereIn('marca_id', function ($query) use ($termo): void {
                            $query->select('id')
                                ->from('marcas')
                                ->whereFullText('marcas.nome', $termo)
                                ->orWhere('marcas.nome', 'like', "%$termo%");
                        });
                });
        });
    }
}
