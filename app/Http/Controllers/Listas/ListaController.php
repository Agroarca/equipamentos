<?php

namespace App\Http\Controllers\Listas;

use App\Http\Controllers\Controller;
use App\Http\Requests\Lista\ListaRequest;
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
        $lista->slug = $lista->slug ?? Str::kebab($lista->nome);
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

    public function adicionar($listaId)
    {
        $lista = Lista::findOrFail($listaId);
        $equipamento = Equipamento::findOrFail(request()->input('equipamento_id'));

        ProdutoLista::create([
            'lista_id' => $lista->id,
            'equipamento_id' => $equipamento->id
        ]);

        return redirect()->route('admin.lista.produtos', $lista->id);
    }

    public function produtos($id)
    {
        $lista = Lista::findOrFail($id);
        $options = Equipamento::select('id', 'titulo as texto')->take(10)->get();

        return Inertia::render('Admin/Lista/Produtos', compact('lista', 'options'));
    }
}
