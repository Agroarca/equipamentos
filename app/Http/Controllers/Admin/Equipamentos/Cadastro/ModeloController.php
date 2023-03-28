<?php

namespace App\Http\Controllers\Admin\Equipamentos\Cadastro;

use App\Enums\Equipamentos\Cadastro\StatusCadastro;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Equipamentos\Cadastro\ModeloRequest;
use App\Models\Equipamentos\Cadastro\Marca;
use App\Models\Equipamentos\Cadastro\Modelo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ModeloController extends Controller
{
    public function inicio()
    {
        $modelos = Modelo::with(['marca'])->paginate(10);

        $statusCadastro = StatusCadastro::toArray();

        return Inertia::render('Admin/Equipamentos/Cadastro/Modelo/Inicio', compact('modelos', 'statusCadastro'));
    }

    public function criar()
    {
        $marcas = Marca::all();
        $statusCadastro = StatusCadastro::toArray();

        return Inertia::render('Admin/Equipamentos/Cadastro/Modelo/Criar', compact('marcas', 'statusCadastro'));
    }

    public function salvar(ModeloRequest $request)
    {
        Modelo::create($request->all());

        return redirect()->route('admin.modelos');
    }

    public function editar(int $id)
    {
        $modelo = Modelo::findOrFail($id);
        $marcas = Marca::all();
        $statusCadastro = StatusCadastro::toArray();

        return Inertia::render(
            'Admin/Equipamentos/Cadastro/Modelo/Editar',
            compact('modelo', 'marcas', 'statusCadastro')
        );
    }

    public function atualizar(ModeloRequest $request, int $id)
    {
        Modelo::findOrFail($id)->update($request->all());

        return redirect()->route('admin.modelos');
    }

    public function excluir(int $id)
    {
        Modelo::findOrFail($id)->delete();

        return redirect()->route('admin.modelos');
    }

    public function pesquisar(Request $request, int $marcaId)
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

    public function salvarAjax(ModeloRequest $request)
    {
        $modelo = Modelo::create($request->all());

        return response()->json($modelo);
    }
}
