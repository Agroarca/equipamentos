<?php

namespace App\Services\Site;

use App\Models\Equipamentos\Equipamento;

class ListaService
{
    private function queryBase()
    {
        $query = Equipamento::select('equipamentos.*');

        $query->with([
            'imagens' => fn ($query) => $query->whereIn(
                'equipamento_imagens.id',
                fn ($squery) => $squery->selectRaw('min(eim.id) from equipamento_imagens as eim group by eim.equipamento_id')
            ),
        ]);

        return $query;
    }

    public function queryCategoria($id)
    {
        return self::queryBase()->whereRaw(
            'categoria_id in (
                with recursive cats (id) as (
                    select id from categorias where (@id is null and categoria_mae_id is null) or (@id is not null and id = @id)
                    union all select cat.id from categorias cat inner join cats on cat.categoria_mae_id = cats.id)
                select id from cats, (select @id := ?) inicializacao)',
            [$id]
        );
    }
}
