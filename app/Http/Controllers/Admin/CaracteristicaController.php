<?php

namespace App\Http\Controllers\Admin;

use App\Enums\Caracteristicas\TipoCaracteristica;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CaracteristicaRequest;
use App\Models\Caracteristicas\Caracteristica;
use App\Models\Equipamentos\Categoria;
use Inertia\Inertia;

class CaracteristicaController extends Controller
{
    public function inicio(int $categoriaId)
    {
        $categoria = Categoria::with(['caracteristicas'])->findOrFail($categoriaId);
        $tipos = TipoCaracteristica::toArray();

        return Inertia::render('Admin/Caracteristicas/Inicio', compact('categoria', 'tipos'));
    }

    public function criar(int $categoriaId)
    {
        $categoria = Categoria::findOrFail($categoriaId);
        $tipos = TipoCaracteristica::toArray();

        return Inertia::render('Admin/Caracteristicas/Criar', compact('categoria', 'tipos'));
    }

    public function salvar(CaracteristicaRequest $request, int $categoriaId)
    {
        $caracteristica = new Caracteristica($request->all());
        $caracteristica->categoria_id = $categoriaId;
        $caracteristica->ordem = Caracteristica::where('categoria_id', $categoriaId)->max('ordem') + 1;
        $caracteristica->save();

        return redirect()->route('admin.categorias.caracteristicas', $categoriaId);
    }

    public function visualizar(int $categoriaId, int $id)
    {
        $caracteristica = Caracteristica::where('categoria_id', $categoriaId)
            ->with('opcoes')
            ->findOrFail($id);

        $tipos = TipoCaracteristica::toArray();

        return Inertia::render('Admin/Caracteristicas/Visualizar', compact('caracteristica', 'tipos'));
    }

    public function excluir(int $categoriaId, int $id)
    {
        Caracteristica::where('categoria_id', $categoriaId)->findOrFail($id)->delete();

        return redirect()->route('admin.categorias.caracteristicas', $categoriaId);
    }
}
