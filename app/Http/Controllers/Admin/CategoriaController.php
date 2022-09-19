<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Equipamentos\CategoriaRequest;
use App\Models\Equipamentos\Categoria;
use Inertia\Inertia;

class CategoriaController extends Controller
{
    public function inicio(){
        $categorias = Categoria::orderBy('nome')->with(['categoriaMae'])->paginate(5);
        return Inertia::render('Admin/Categoria/Inicio', [
            'categorias' => $categorias
        ]);
    }

    public function criar(){
        return Inertia::render('Admin/Categoria/Criar');
    }

    public function salvar(CategoriaRequest $request){
        Categoria::create($request->all());
        return redirect()->route('admin.categorias');
    }

    public function editar($id)
    {
        $categoria = Categoria::findOrFail($id);
        return Inertia::render('Admin/Categoria/Editar', [
            compact('categoria')
        ]);
    }

    public function atualizar(CategoriaRequest $request, $id)
    {
        $categoria = Categoria::findOrFail($id);
        $categoria->update($request->all());
        return redirect()->route('admin.categorias');
    }

    public function excluir($id)
    {
        Categoria::findOrFail($id)->delete();
        return redirect()->route('admin.categorias');
    }
}
