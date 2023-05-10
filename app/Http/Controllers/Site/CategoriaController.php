<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Services\Site\ListaService;

class CategoriaController extends Controller
{
    public function __construct(private ListaService $listaService)
    {
    }

    public function pesquisar(?int $categoriaId = null)
    {
        $categoria = Categoria::with(['categoriaMae'])->find($categoriaId);

        $categoriasMae = $this->listaService->categoriasMae($categoriaId);

        $categorias = Categoria::select('categorias.*')->selectRaw(
            'case when exists (
                select * from categorias c2
                where c2.categoria_mae_id = categorias.id
            ) then true else false
            end as possui_filhos'
        )->where('categoria_mae_id', $categoriaId)->get();


        return response()->json([
            'categoria' => $categoria,
            'categorias' => $categorias,
            'categorias_mae' => $categoriasMae,
        ]);
    }
}
