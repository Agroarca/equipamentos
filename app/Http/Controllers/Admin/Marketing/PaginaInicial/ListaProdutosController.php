<?php

namespace App\Http\Controllers\Admin\Marketing\PaginaInicial;

use App\Enums\Marketing\PaginaInicial\StatusVersao;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Marketing\PaginaInicial\Listaprodutos\AdicionarListaRequest;
use App\Models\Equipamentos\Lista\Lista as ListaProduto;
use App\Models\Marketing\PaginaInicial\Componente;
use App\Models\Marketing\PaginaInicial\ListaProdutos\Lista;
use App\Models\Marketing\PaginaInicial\Versao;
use App\Services\Site\PaginaInicialService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class ListaProdutosController extends Controller
{
    public function __construct(
        private PaginaInicialService $paginaInicialService
    ) {
    }

    public function adicionar(Versao $versao): mixed
    {
        Gate::authorize('criar', Lista::class);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
        $listasProdutos = ListaProduto::all();
        return Inertia::render(
            'Admin/Marketing/PaginaInicial/ListaProdutos/Adicionar',
            compact('versao', 'listasProdutos')
        );
    }

    public function salvar(AdicionarListaRequest $request, Versao $versao): mixed
    {
        Gate::authorize('criar', Lista::class);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }

        DB::transaction(function () use ($request, $versao) {
            $lista = Lista::create($request->only('lista_produtos_id'));

            $componente = new Componente($request->only([
                'titulo',
                'subtitulo',
                'tela_cheia',
            ]));

            $componente->ordem = $this->paginaInicialService->proximaOrdem($versao);
            $componente->tipo()->associate($lista);
            $componente->versao_id = $versao->id;
            $componente->save();
        });

        return redirect()->route('admin.marketing.paginaInicial.layout', $versao);
    }

    public function visualizar(Versao $versao, Lista $lista): mixed
    {
        Gate::authorize('ver', $lista);
        $lista->load(['listaProdutos', 'componente']);
        return Inertia::render('Admin/Marketing/PaginaInicial/ListaProdutos/Visualizar', compact('versao', 'lista'));
    }
}
