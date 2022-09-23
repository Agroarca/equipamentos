<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Equipamentos\CategoriaRequest;
use App\Models\Equipamentos\Categoria;
use Inertia\Inertia;

class CategoriaController extends Controller
{
    public function inicio($categoriaId = null){
        $categoria = Categoria::with(['categoriaMae'])->find($categoriaId);

        $categorias = Categoria::where('categoria_mae_id', $categoriaId)->orderBy('nome')->with(['categoriaMae'])->paginate(15);
        return Inertia::render('Admin/Categoria/Inicio', [
            'categorias' => $categorias,
            'categoria' => $categoria
        ]);
    }

    public function criar($categoriaId = null){
        $categoria = Categoria::find($categoriaId);

        return Inertia::render('Admin/Categoria/Criar', [
            'categoriaMae' => $categoria
        ]);
    }

    public function salvar(CategoriaRequest $request){
        Categoria::create($request->all());
        return redirect()->route('admin.categorias');
    }

    public function editar($id)
    {
        $categoria = Categoria::findOrFail($id);
        $categoria->load('categoriaMae');

        return Inertia::render('Admin/Categoria/Editar', [
            'categoria' => $categoria
        ]);
    }

    public function atualizar(CategoriaRequest $request, $id)
    {
        $categoria = Categoria::findOrFail($id);
        $categoria->update($request->all());
        return redirect()->route('admin.categorias', optional($categoria->categoriaMae)->id);
    }

    public function excluir($id)
    {
        Categoria::findOrFail($id)->delete();
        return redirect()->route('admin.categorias');
    }

    public function pesquisar($categoriaId = null){
        $categoria = Categoria::find($categoriaId);
        $categorias = Categoria::where('categoria_mae_id', $categoriaId)->get();

        if($categoria){
            $categoria->load('categoriaMae');
        }

        return response()->json([
            'categoria' => $categoria,
            'categorias' => $categorias
        ]);
    }
}
