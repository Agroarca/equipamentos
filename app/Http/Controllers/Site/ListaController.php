<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Equipamentos\Categoria;
use App\Services\Site\ListaService;
use Inertia\Inertia;

class ListaController extends Controller
{
    public function __construct(
        public ListaService $listaService
    ) {
    }

    public function categoria($id = null)
    {
        $categoria = Categoria::find($id);
        $equipamentos = $this->listaService->queryCategoria($id)->paginate();

        return Inertia::render('Site/Lista/Categoria', compact(['equipamentos', 'categoria']));
    }
}
