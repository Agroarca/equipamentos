<?php

namespace App\Services\Site;

use App\Models\Equipamentos\Cadastro\Equipamento;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

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
     * Retorna um array com a árvore de categorias de um produto.
     */
    public function arvoreCategoria(?int $id): array
    {
        return DB::select('
                with recursive arvore_categorias as (
                    select id, nome, categoria_mae_id, 1 as nivel
                    from categorias where id = ?
                    union all
                    select c.id, c.nome, c.categoria_mae_id, ct.nivel + 1 as nivel
                    from categorias c inner join arvore_categorias ct on ct.categoria_mae_id = c.id
                )
            select id, nome, categoria_mae_id
            from arvore_categorias
            order by nivel desc;', [$id]);
    }
}
