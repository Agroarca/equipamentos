<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Marca;
use App\Models\Equipamentos\Lista\Lista;
use App\Models\Usuario;
use App\Services\Site\FiltroService;
use App\Services\Site\ListaService;
use Inertia\Inertia;

class ListaController extends Controller
{
    public function __construct(
        public ListaService $listaService,
        public FiltroService $filtroService
    ) {
    }

    public function categoria(?int $id = null)
    {
        $categoria = Categoria::find($id);

        $filtros = $this->filtroService->filtros(
            $this->listaService->queryCategoria($id)
        );

        return Inertia::render('Site/Lista/Categoria', [
            'categoria' => $categoria,
            ...$filtros
        ]);
    }

    public function marca(int $id)
    {
        $marca = Marca::findOrFail($id);

        $filtros = $this->filtroService->filtros(
            $this->listaService->queryMarca($id)
        );
        return Inertia::render('Site/Lista/Marca', [
            'marca' => $marca,
            ...$filtros
        ]);
    }

    public function lista(int|string $idOuSlug)
    {
        $lista = Lista::where('id', $idOuSlug)->orWhere('slug', $idOuSlug)->firstOrFail();

        $filtros = $this->filtroService->filtros(
            $this->listaService->queryLista($lista->id)
        );

        return Inertia::render('Site/Lista/Lista', [
            'lista' => $lista,
            ...$filtros
        ]);
    }

    public function anunciante(int $id)
    {
        $anunciante = Usuario::findOrFail($id);

        if ($this->listaService->queryQuantidadeAnunciante($id) === 0) {
            return abort(404);
        }

        $filtros = $this->filtroService->filtros(
            $this->listaService->queryListaAnunciante($id)
        );

        return Inertia::render('Site/Anunciante/Produtos', [
            'anunciante' => $anunciante,
            ...$filtros
        ]);
    }
}
