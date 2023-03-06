<?php

namespace App\Http\Controllers\Listas;

use App\Http\Controllers\Controller;
use App\Http\Requests\Lista\ListaRequest;
use App\Models\Lista\Lista;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ListaController extends Controller
{
    public function inicio()
    {
        $listas = Lista::paginate();

        return Inertia::render('Admin/Listas/Inicio', compact('listas'));
    }

    public function criar()
    {
        return Inertia::render('Admin/Listas/Criar');
    }

    public function salvar(ListaRequest $request)
    {
        $lista = new Lista($request->all());
        $lista->slug = $lista->slug ?? Str::kebab($lista->nome);
        $lista->save();

        return redirect()->route('admin.listas');
    }

    public function editar($id)
    {
        $lista = Lista::findOrFail($id);

        return Inertia::render('Admin/Listas/Editar', compact('lista'));
    }

    public function atualizar(ListaRequest $request, $id)
    {
        $lista = Lista::findOrFail($id);
        $lista->nome = $request->nome;
        $lista->slug = $request->slug ?? Str::kebab($request->nome);
        $lista->save();

        return redirect()->route('admin.listas');
    }

    public function excluir($id)
    {
        Lista::findOrFail($id)->delete();

        return redirect()->route('admin.listas');
    }

    public function adicionar()
    {

    }
}
