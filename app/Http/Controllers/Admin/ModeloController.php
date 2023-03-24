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
        $modelos = Modelo::with(['marca'])->paginate(10);

        $statusCadastro = StatusCadastro::toArray();

        return Inertia::render('Admin/Modelo/Inicio', compact('modelos', 'statusCadastro'));
    }

    public function criar()
    {
        $marcas = Marca::all();
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
        $modelo = Modelo::findOrFail($id);
        $marcas = Marca::all();
        $statusCadastro = StatusCadastro::toArray();

        return Inertia::render('Admin/Modelo/Editar', compact('modelo', 'marcas', 'statusCadastro'));
    }

    public function atualizar(ModeloRequest $request, $id)
    {
        Modelo::findOrFail($id)->update($request->all());

        return redirect()->route('admin.modelos');
    }

    public function excluir($id)
    {
        Modelo::findOrFail($id)->delete();

        return redirect()->route('admin.modelos');
    }

    public function pesquisar(Request $request, $marcaId)
    {
        $modelos = Modelo::select('id', 'nome as texto')
            ->where(function ($query) use ($request) {
                $query
                    ->whereFullText('nome', $request->input('termo'))
                    ->orWhere('nome', 'like', '%' . $request->input('termo') . '%');
            })
            ->where('marca_id', $marcaId)
            ->take(10)
            ->get();

        return response()->json($modelos);
    }
}
