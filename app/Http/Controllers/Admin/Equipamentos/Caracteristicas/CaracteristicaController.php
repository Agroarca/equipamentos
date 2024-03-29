<?php

namespace App\Http\Controllers\Admin\Equipamentos\Caracteristicas;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Equipamentos\Caracteristicas\CaracteristicaRequest;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class CaracteristicaController extends Controller
{
    public function inicio(int $categoriaId)
    {
        Gate::authorize('ver', Caracteristica::class);
        $categoria = Categoria::with(['caracteristicas'])->findOrFail($categoriaId);
        $tipos = TipoCaracteristica::toArray();

        return Inertia::render('Admin/Equipamentos/Caracteristicas/Inicio', compact('categoria', 'tipos'));
    }

    public function criar(int $categoriaId)
    {
        Gate::authorize('criar', Caracteristica::class);
        $categoria = Categoria::findOrFail($categoriaId);
        $tipos = TipoCaracteristica::toArray();

        return Inertia::render('Admin/Equipamentos/Caracteristicas/Criar', compact('categoria', 'tipos'));
    }

    public function salvar(CaracteristicaRequest $request, int $categoriaId)
    {
        Gate::authorize('criar', Caracteristica::class);
        $caracteristica = new Caracteristica($request->all());
        $caracteristica->categoria_id = $categoriaId;
        $caracteristica->ordem = Caracteristica::where('categoria_id', $categoriaId)->max('ordem') + 1;
        $caracteristica->save();
        Cache::tags('caracteristicas')->flush();

        return redirect()->route('admin.categorias.caracteristicas', $categoriaId);
    }

    public function visualizar(int $categoriaId, int $id)
    {
        Gate::authorize('ver', Caracteristica::class);
        $caracteristica = Caracteristica::where('categoria_id', $categoriaId)
            ->with('opcoes')
            ->findOrFail($id);

        $tipos = TipoCaracteristica::toArray();

        return Inertia::render('Admin/Equipamentos/Caracteristicas/Visualizar', compact('caracteristica', 'tipos'));
    }

    public function excluir(int $categoriaId, int $id)
    {
        Gate::authorize('excluir', Caracteristica::class);
        Caracteristica::where('categoria_id', $categoriaId)->findOrFail($id)->delete();
        Cache::tags('caracteristicas')->flush();

        return redirect()->route('admin.categorias.caracteristicas', $categoriaId);
    }
}
