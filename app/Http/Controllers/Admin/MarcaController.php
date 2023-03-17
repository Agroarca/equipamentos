<?php

namespace App\Http\Controllers\Admin;

use App\Enums\Cadastro\StatusCadastro;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\MarcaRequest;
use App\Models\Equipamentos\Marca;
use Inertia\Inertia;

class MarcaController extends Controller
{
    public function inicio()
    {
        $marcas = Marca::withoutGlobalScope('aprovado')->paginate(10);
        $statusCadastro = StatusCadastro::toArray();

        return Inertia::render('Admin/Marca/Inicio', compact('marcas', 'statusCadastro'));
    }

    public function criar()
    {
        $statusCadastro = StatusCadastro::toArray();
        return Inertia::render('Admin/Marca/Criar', compact('statusCadastro'));
    }

    public function salvar(MarcaRequest $request)
    {
        Marca::create($request->all());

        return redirect()->route('admin.marcas');
    }

    public function editar($id)
    {
        $marca = Marca::withoutGlobalScope('aprovado')->findOrFail($id);
        $statusCadastro = StatusCadastro::toArray();

        return Inertia::render('Admin/Marca/Editar', compact('marca', 'statusCadastro'));
    }

    public function atualizar(MarcaRequest $request, $id)
    {
        Marca::withoutGlobalScope('aprovado')->findOrFail($id)->update($request->all());

        return redirect()->route('admin.marcas');
    }

    public function excluir($id)
    {
        Marca::withoutGlobalScope('aprovado')->findOrFail($id)->delete();

        return redirect()->route('admin.marcas');
    }
}
