<?php

namespace App\Http\Controllers\Admin\Equipamentos\Cadastro;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Equipamentos\Cadastro\CategoriaRequest;
use App\Models\Equipamentos\Cadastro\Categoria;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class CategoriaController extends Controller
{
    public function inicio(?int $categoriaId = null)
    {
        Gate::authorize('ver', Categoria::class);
        $categoria = Categoria::with(['categoriaMae'])->find($categoriaId);
        $categorias = Categoria::where('categoria_mae_id', $categoriaId)
            ->orderBy('nome')
            ->with(['categoriaMae'])
            ->paginate();

        return Inertia::render('Admin/Equipamentos/Cadastro/Categoria/Inicio', compact('categorias', 'categoria'));
    }

    public function criar(?int $categoriaId = null)
    {
        Gate::authorize('criar', Categoria::class);
        $categoriaMae = Categoria::find($categoriaId);

        return Inertia::render('Admin/Equipamentos/Cadastro/Categoria/Criar', compact('categoriaMae'));
    }

    public function salvar(CategoriaRequest $request)
    {
        Gate::authorize('criar', Categoria::class);
        $categoria = Categoria::create($request->all());

        return redirect()->route('admin.categorias', $categoria->categoria_mae_id);
    }

    public function editar(int $id)
    {
        $categoria = Categoria::findOrFail($id);
        $categoria->load('categoriaMae');

        Gate::authorize('editar', $categoria);

        return Inertia::render('Admin/Equipamentos/Cadastro/Categoria/Editar', compact('categoria'));
    }

    public function atualizar(CategoriaRequest $request, int $id)
    {
        $categoria = Categoria::findOrFail($id);
        Gate::authorize('editar', $categoria);

        if ($categoria->categoria_mae_id !== $request->categoria_mae_id) {
            Gate::authorize('mover', $categoria);
        }

        $categoria->update($request->all());

        return redirect()->route('admin.categorias', $categoria->categoria_mae_id);
    }

    public function excluir(int $id)
    {
        $categoria = Categoria::findOrFail($id);

        Gate::authorize('excluir', $categoria);

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
