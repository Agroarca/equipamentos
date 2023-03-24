<?php

namespace App\Http\Controllers\Admin\Lista;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Lista\ListaRequest;
use App\Http\Requests\Admin\Lista\ProdutoListaRequest;
use App\Models\Equipamentos\Equipamento;
use App\Models\Lista\Lista;
use App\Models\Lista\ProdutoLista;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ListaController extends Controller
{
    public function inicio()
    {
        $listas = Lista::paginate();

        return Inertia::render('Admin/Lista/Inicio', compact('listas'));
    }

    public function criar()
    {
        return Inertia::render('Admin/Lista/Criar');
    }

    public function salvar(ListaRequest $request)
    {
        $lista = new Lista($request->all());
        $lista->slug = ($lista->slug ?? Str::kebab($lista->nome));
        $lista->save();

        return redirect()->route('admin.lista');
    }

    public function editar($id)
    {
        $lista = Lista::findOrFail($id);

        return Inertia::render('Admin/Lista/Editar', compact('lista'));
    }

    public function atualizar(ListaRequest $request, $id)
    {
        $lista = Lista::findOrFail($id);
        $lista->nome = $request->nome;
        $lista->slug = $request->slug ?? Str::kebab($request->nome);
        $lista->save();

        return redirect()->route('admin.lista');
    }

    public function excluir($id)
    {
        Lista::findOrFail($id)->delete();

        return redirect()->route('admin.lista');
    }

    public function adicionar(ProdutoListaRequest $request, $listaId)
    {
        $lista = Lista::findOrFail($listaId);
        $equipamento = Equipamento::findOrFail($request->equipamento_id);

        ProdutoLista::firstOrCreate([
            'lista_id' => $lista->id,
            'equipamento_id' => $equipamento->id,
        ]);

        return redirect()->route('admin.lista.produtos', $lista->id);
    }

    public function produtos($id)
    {
        $lista = Lista::findOrFail($id);
        $options = Equipamento::select('id', 'titulo as texto')->take(10)->get();
        $produtos = $lista->produtoLista()->with([
            'equipamento',
            'equipamento.modelo',
            'equipamento.categoria',
            'equipamento.modelo.marca',
        ])->paginate();

        return Inertia::render('Admin/Lista/Produtos', compact('lista', 'options', 'produtos'));
    }

    public function remover($listaId, $produtoId)
    {
        $produto = ProdutoLista::where('lista_id', $listaId)->findOrFail($produtoId);
        $produto->delete();

        return redirect()->route('admin.lista.produtos', $listaId);
    }
}
