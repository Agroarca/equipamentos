<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CaracteristicasValorRequest;
use App\Http\Requests\Admin\EquipamentoRequest;
use App\Models\Equipamentos\Categoria;
use App\Models\Equipamentos\Equipamento;
use App\Models\Equipamentos\Modelo;
use App\Services\Equipamentos\EquipamentoCaracteristicaService;
use Inertia\Inertia;

class EquipamentoController extends Controller
{
    public function inicio()
    {
        $equipamentos = Equipamento::with('categoria')->paginate(10);
        return Inertia::render('Admin/Equipamento/Inicio', compact('equipamentos'));
    }

    public function criar()
    {
        $modelos = Modelo::all()->pluck('nome', 'id');
        $categorias = Categoria::all()->pluck('nome', 'id');
        return Inertia::render('Admin/Equipamento/Criar', compact('modelos', 'categorias'));
    }

    public function salvar(EquipamentoRequest $request)
    {
        Equipamento::create($request->all());
        return redirect()->route('admin.equipamentos');
    }

    public function editar($id)
    {
        $equipamento = Equipamento::with([
            'categoria',
            'modelo'
        ])->findOrFail($id);

        $caracteristicas = EquipamentoCaracteristicaService::getCaracteristicasCategoria($equipamento->categoria_id);

        foreach ($caracteristicas as $key => $caracteristica) {
            $equipCarac = $equipamento->caracteristicas()->firstwhere('caracteristica_id', $caracteristica->id);
            if (is_null($equipCarac) || is_null($equipCarac->caracteristicaValor)) {
                continue;
            }

            $caracteristicas[$key]->valor = $equipCarac->caracteristicaValor->valor;
        }

        return Inertia::render('Admin/Equipamento/Editar', compact('equipamento', 'caracteristicas'));
    }

    public function atualizar(EquipamentoRequest $request, $id)
    {
        $equipamento = Equipamento::findOrFail($id);
        $equipamento->update($request->all());
        return redirect()->route('admin.equipamentos.editar', $id);
    }

    public function excluir($id)
    {
        Equipamento::findOrFail($id)->delete();
        return redirect()->route('admin.equipamentos');
    }

    public function salvarCaracteristicas(CaracteristicasValorRequest $request, $id)
    {
        $equipamento = Equipamento::findOrFail($id);
        EquipamentoCaracteristicaService::salvarCaracteristicas($equipamento, $request->all());
        return redirect()->route('admin.equipamentos.editar', $id);
    }
}
