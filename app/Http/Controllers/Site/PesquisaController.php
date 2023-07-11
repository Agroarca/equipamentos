<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Cadastro\Cidade;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PesquisaController extends Controller
{
    public function cidade(Request $request): mixed
    {
        $termo = $request->input('termo');

        $cidades = DB::table(app(Cidade::class)->getTable() . ' as cidades')
            ->join(app(Estado::class)->getTable() . ' as estados', 'estados.id', '=', 'estado_id')

            ->select('cidades.id as id')
            ->selectRaw("concat(cidades.nome, '/', estados.uf) as texto")

            ->whereFullText('cidades.nome', $termo)
            ->orWhere('cidades.nome', 'like', '%' . $termo . '%')

            ->orderByRaw("MATCH (`cidades`.`nome`) AGAINST ('$termo' IN NATURAL LANGUAGE MODE)
                + case when ('$termo' like concat('%', estados.uf)) then 1 else 0 end desc")

            ->take(10)
            ->get();

        return response()->json($cidades);
    }
}
