<?php

namespace App\Http\Controllers\Admin\Equipamentos\Caracteristicas;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Equipamentos\Caracteristicas\CaracteristicaRequest;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use Inertia\Inertia;

class CaracteristicaController extends Controller
{
    public function inicio(int $categoriaId)
    {
        $categoria = Categoria::with(['caracteristicas'])->findOrFail($categoriaId);
        $tipos = TipoCaracteristica::toArray();

        return Inertia::render('Admin/Equipamentos/Caracteristicas/Inicio', compact('categoria', 'tipos'));
    }

    public function criar(int $categoriaId)
    {
        $categoria = Categoria::findOrFail($categoriaId);
        $tipos = TipoCaracteristica::toArray();

        return Inertia::render('Admin/Equipamentos/Caracteristicas/Criar', compact('categoria', 'tipos'));
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

        return Inertia::render('Admin/Equipamentos/Caracteristicas/Visualizar', compact('caracteristica', 'tipos'));
    }

    public function excluir(int $categoriaId, int $id)
    {
        Caracteristica::where('categoria_id', $categoriaId)->findOrFail($id)->delete();

        return redirect()->route('admin.categorias.caracteristicas', $categoriaId);
    }
}
