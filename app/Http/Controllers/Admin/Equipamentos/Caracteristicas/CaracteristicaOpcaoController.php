<?php

namespace App\Http\Controllers\Admin\Equipamentos\Caracteristicas;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Equipamentos\Caracteristicas\CaracteristicaOpcaoRequest;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaOpcao;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class CaracteristicaOpcaoController extends Controller
{
    public function criar(int $categoriaId, int $caracteristicaId)
    {
        Gate::authorize('criar', Caracteristica::class);
        $caracteristica = Caracteristica::where('categoria_id', $categoriaId)->findOrFail($caracteristicaId);

        return Inertia::render('Admin/Equipamentos/Caracteristicas/Opcoes/Criar', compact('caracteristica'));
    }

    public function salvar(CaracteristicaOpcaoRequest $request, int $categoriaId, int $caracteristicaId)
    {
        Gate::authorize('criar', Caracteristica::class);
        $caracteristica = Caracteristica::where('categoria_id', $categoriaId)->findOrFail($caracteristicaId);
        $opcao = new CaracteristicaOpcao($request->all());
        $opcao->caracteristica_id = $caracteristica->id;
        $opcao->save();

        return redirect()->route('admin.categorias.caracteristicas.visualizar', [$categoriaId, $caracteristicaId]);
    }

    public function excluir(int $categoriaId, int $caracteristicaId, int $id)
    {
        Gate::authorize('excluir', Caracteristica::class);
        $caracteristica = Caracteristica::where('categoria_id', $categoriaId)->findOrFail($caracteristicaId);
        $caracteristica->opcoes()->findOrFail($id)->delete();

        return redirect()->route('admin.categorias.caracteristicas.visualizar', [$categoriaId, $caracteristicaId]);
    }
}
