<?php

namespace App\Http\Controllers\Admin;

use App\Enums\Cadastro\StatusCadastro;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ModeloRequest;
use App\Models\Equipamentos\Marca;
use App\Models\Equipamentos\Modelo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ModeloController extends Controller
{
    public function inicio()
    {
        $modelos = Modelo::withoutGlobalScope('aprovado')
            ->with(['marca' => function ($query) {
                $query->withoutGlobalScope('aprovado');
            }])->paginate(10);

        $statusCadastro = StatusCadastro::toArray();

        return Inertia::render('Admin/Modelo/Inicio', compact('modelos', 'statusCadastro'));
    }

    public function criar()
    {
        $marcas = Marca::withoutGlobalScope('aprovado')->get();
        $statusCadastro = StatusCadastro::toArray();

        return Inertia::render('Admin/Modelo/Criar', compact('marcas', 'statusCadastro'));
    }

    public function salvar(ModeloRequest $request)
    {
        Modelo::create($request->all());

        return redirect()->route('admin.modelos');
    }

    public function editar($id)
    {
        $modelo = Modelo::withoutGlobalScope('aprovado')->findOrFail($id);
        $marcas = Marca::withoutGlobalScope('aprovado')->get();
        $statusCadastro = StatusCadastro::toArray();

        return Inertia::render('Admin/Modelo/Editar', compact('modelo', 'marcas', 'statusCadastro'));
    }

    public function atualizar(ModeloRequest $request, $id)
    {
        Modelo::withoutGlobalScope('aprovado')->findOrFail($id)->update($request->all());

        return redirect()->route('admin.modelos');
    }

    public function excluir($id)
    {
        Modelo::withoutGlobalScope('aprovado')->findOrFail($id)->delete();

        return redirect()->route('admin.modelos');
    }

    public function pesquisar(Request $request)
    {
        $modelos = Modelo::withoutGlobalScope('aprovado')
            ->select('id', 'nome as texto')
            ->whereFullText('nome', $request->input('termo'))
            ->orWhere('nome', 'like', '%' . $request->input('termo') . '%')
            ->take(10)
            ->get();

        return response()->json($modelos);
    }
}
