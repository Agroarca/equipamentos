<?php

namespace App\Http\Controllers\Admin\Equipamentos\Lista;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Equipamentos\Lista\ListaRequest;
use App\Http\Requests\Admin\Equipamentos\Lista\ProdutoListaRequest;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Lista\Lista;
use App\Models\Equipamentos\Lista\ProdutoLista;
use Inertia\Inertia;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;

class ListaController extends Controller
{
    public function inicio()
    {
        Gate::authorize('ver', Lista::class);
        $listas = Lista::paginate();

        return Inertia::render('Admin/Equipamentos/Lista/Inicio', compact('listas'));
    }

    public function criar()
    {
        Gate::authorize('criar', Lista::class);
        return Inertia::render('Admin/Equipamentos/Lista/Criar');
    }

    public function salvar(ListaRequest $request)
    {
        Gate::authorize('criar', Lista::class);
        $lista = new Lista($request->all());
        $lista->slug = ($lista->slug ?? Str::kebab($lista->nome));
        $lista->save();

        return redirect()->route('admin.lista');
    }

    public function editar(int $id)
    {
        $lista = Lista::findOrFail($id);
        Gate::authorize('editar', Lista::class);

        return Inertia::render('Admin/Equipamentos/Lista/Editar', compact('lista'));
    }

    public function atualizar(ListaRequest $request, int $id)
    {
        $lista = Lista::findOrFail($id);
        Gate::authorize('editar', Lista::class);
        $lista->nome = $request->nome;
        $lista->slug = $request->slug ?? Str::kebab($request->nome);
        $lista->save();

        return redirect()->route('admin.lista');
    }

    public function excluir(int $id)
    {
        $lista = Lista::findOrFail($id);
        Gate::authorize('excluir', Lista::class);
        $lista->delete();

        return redirect()->route('admin.lista');
    }

    public function adicionar(ProdutoListaRequest $request, int $listaId)
    {
        $lista = Lista::findOrFail($listaId);
        Gate::authorize('adicionar', $lista);

        $equipamento = Equipamento::findOrFail($request->equipamento_id);

        ProdutoLista::firstOrCreate([
            'lista_id' => $lista->id,
            'equipamento_id' => $equipamento->id,
        ]);

        return redirect()->route('admin.lista.produtos', $lista->id);
    }

    public function produtos(int $id)
    {
        $lista = Lista::findOrFail($id);
        Gate::authorize('ver', $lista);

        $produtos = $lista->produtoLista()->with([
            'equipamento',
            'equipamento.modelo',
            'equipamento.categoria',
            'equipamento.modelo.marca',
        ])->paginate();

        return Inertia::render('Admin/Equipamentos/Lista/Produtos', compact('lista', 'produtos'));
    }

    public function remover(int $listaId, int $produtoId)
    {
        $lista = Lista::findOrFail($listaId);
        Gate::authorize('remover', $lista);

        $produto = ProdutoLista::where('lista_id', $listaId)->findOrFail($produtoId);
        $produto->delete();

        return redirect()->route('admin.lista.produtos', $listaId);
    }
}
