<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Equipamentos\Categoria;
use App\Models\Equipamentos\Marca;
use App\Models\Lista\Lista;
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
        $equipamentos = $this->listaService->queryCategoria($id)->paginate(24);
        return Inertia::render('Site/Lista/Categoria', compact(['equipamentos', 'categoria']));
    }

    public function marca($id)
    {
        $marca = Marca::findOrFail($id);
        $equipamentos = $this->listaService->queryMarca($id)->paginate(24);
        return Inertia::render('Site/Lista/Marca', compact(['equipamentos', 'marca']));
    }

    public function lista($idOuSlug)
    {
        $lista = Lista::where('id', $idOuSlug)->orWhere('slug', $idOuSlug)->firstOrFail();
        $equipamentos = $this->listaService->queryLista($lista->id)->paginate(24);
        return Inertia::render('Site/Lista/Lista', compact(['equipamentos', 'lista']));
    }
}
