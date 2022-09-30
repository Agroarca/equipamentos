<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\EquipamentoRequest;
use App\Models\Equipamentos\Equipamento;
use Inertia\Inertia;

class EquipamentoController extends Controller
{
    public function inicio()
    {
        $equipamentos = Equipamento::with('categorias')->paginate(10);
        return Inertia::render('Admin/Equipamento/Inicio', compact('equipamentos'));
    }

    public function criar()
    {
        return Inertia::render('Admin/Equipamento/Criar');
    }

    public function salvar(EquipamentoRequest $request)
    {
        Equipamento::create($request->all());
        return redirect()->route('admin.equipamentos');
    }

    public function editar($id)
    {
        $equipamento = Equipamento::findOrFail($id);
        return Inertia::render('Admin/Equipamento/Editar', compact('equipamento'));
    }

    public function atualizar(EquipamentoRequest $request, $id)
    {
        $equipamento = Equipamento::findOrFail($id);
        $equipamento->update($request->all());
        return redirect()->route('admin.equipamentos');
    }

    public function excluir($id)
    {
        Equipamento::findOrFail($id)->delete();
        return redirect()->route('admin.equipamentos');
    }
}
