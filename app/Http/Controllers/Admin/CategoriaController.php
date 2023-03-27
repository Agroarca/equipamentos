<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CategoriaRequest;
use App\Models\Equipamentos\Categoria;
use Inertia\Inertia;

class CategoriaController extends Controller
{
    public function inicio(?int $categoriaId = null)
    {
        $categoria = Categoria::with(['categoriaMae'])->find($categoriaId);
        $categorias = Categoria::where('categoria_mae_id', $categoriaId)
            ->orderBy('nome')
            ->with(['categoriaMae'])
            ->paginate(15);

        return Inertia::render('Admin/Categoria/Inicio', compact('categorias', 'categoria'));
    }

    public function criar(?int $categoriaId = null)
    {
        $categoriaMae = Categoria::find($categoriaId);

        return Inertia::render('Admin/Categoria/Criar', compact('categoriaMae'));
    }

    public function salvar(CategoriaRequest $request)
    {
        $categoria = Categoria::create($request->all());

        return redirect()->route('admin.categorias', $categoria->categoria_mae_id);
    }

    public function editar(int $id)
    {
        $categoria = Categoria::findOrFail($id);
        $categoria->load('categoriaMae');

        return Inertia::render('Admin/Categoria/Editar', compact('categoria'));
    }

    public function atualizar(CategoriaRequest $request, int $id)
    {
        $categoria = Categoria::findOrFail($id);
        $categoria->update($request->all());

        return redirect()->route('admin.categorias', $categoria->categoria_mae_id);
    }

    public function excluir(int $id)
    {
        $categoria = Categoria::findOrFail($id);
        $categoriaMaeId = $categoria->categoria_mae_id;
        $categoria->delete();

        return redirect()->route('admin.categorias', $categoriaMaeId);
    }

    public function pesquisar(?int $categoriaId = null)
    {
        $categoria = Categoria::find($categoriaId);
        $categorias = Categoria::where('categoria_mae_id', $categoriaId)->get();

        if ($categoria) {
            $categoria->load('categoriaMae');
        }

        return response()->json([
            'categoria' => $categoria,
            'categorias' => $categorias,
        ]);
    }
}
