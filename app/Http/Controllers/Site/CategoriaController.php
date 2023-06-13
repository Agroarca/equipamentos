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
        $categoria = Categoria::find($categoriaId);
        $categorias = Categoria::where('categoria_mae_id', $categoriaId)->get();
        $categoriasMae = $this->listaService->categoriasMae($categoriaId);

        return response()->json([
            'categoria' => $categoria,
            'categorias' => $categorias,
            'categoriasMae' => $categoriasMae,
        ]);
    }
}
