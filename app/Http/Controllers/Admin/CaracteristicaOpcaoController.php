<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CaracteristicaOpcaoRequest;
use App\Models\Caracteristicas\Caracteristica;
use App\Models\Caracteristicas\CaracteristicaOpcao;
use Inertia\Inertia;

class CaracteristicaOpcaoController extends Controller
{
    public function criar($categoriaId, $caracteristicaId)
    {
        $caracteristica = Caracteristica::where('categoria_id', $categoriaId)->findOrFail($caracteristicaId);
        return Inertia::render('Admin/Caracteristicas/Opcoes/Criar', compact('caracteristica'));
    }

    public function salvar($categoriaId, $caracteristicaId, CaracteristicaOpcaoRequest $request)
    {
        $caracteristica = Caracteristica::where('categoria_id', $categoriaId)->findOrFail($caracteristicaId);
        $opcao = new CaracteristicaOpcao($request->all());
        $opcao->caracteristica_id = $caracteristica->id;
        $opcao->save();

        return redirect()->route('admin.categorias.caracteristicas.visualizar', [$categoriaId, $caracteristicaId]);
    }

    public function excluir($categoriaId, $caracteristicaId, $id)
    {
        $caracteristica = Caracteristica::where('categoria_id', $categoriaId)->findOrFail($caracteristicaId);
        $caracteristica->opcoes()->findOrFail($id)->delete();

        return redirect()->route('admin.categorias.caracteristicas.visualizar', [$categoriaId, $caracteristicaId]);
    }
}
