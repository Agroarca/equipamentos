<?php

namespace App\Http\Controllers\Admin\Equipamentos\Cadastro;

use App\Enums\Equipamentos\Cadastro\StatusCadastro;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Equipamentos\Cadastro\MarcaRequest;
use App\Models\Equipamentos\Cadastro\Marca;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MarcaController extends Controller
{
    public function inicio()
    {
        $marcas = Marca::paginate(10);
        $statusCadastro = StatusCadastro::toArray();

        return Inertia::render('Admin/Equipamentos/Cadastro/Marca/Inicio', compact('marcas', 'statusCadastro'));
    }

    public function criar()
    {
        $statusCadastro = StatusCadastro::toArray();
        return Inertia::render('Admin/Equipamentos/Cadastro/Marca/Criar', compact('statusCadastro'));
    }

    public function salvar(MarcaRequest $request)
    {
        Marca::create($request->all());

        return redirect()->route('admin.marcas');
    }

    public function editar(int $id)
    {
        $marca = Marca::findOrFail($id);
        $statusCadastro = StatusCadastro::toArray();

        return Inertia::render('Admin/Equipamentos/Cadastro/Marca/Editar', compact('marca', 'statusCadastro'));
    }

    public function atualizar(MarcaRequest $request, int $id)
    {
        Marca::findOrFail($id)->update($request->all());

        return redirect()->route('admin.marcas');
    }

    public function excluir(int $id)
    {
        Marca::findOrFail($id)->delete();

        return redirect()->route('admin.marcas');
    }

    public function pesquisar(Request $request)
    {
        $marcas = Marca::select('id', 'nome as texto')
            ->whereFullText('nome', $request->input('termo'))
            ->orWhere('nome', 'like', '%' . $request->input('termo') . '%')
            ->take(10)
            ->get();

        return response()->json($marcas);
    }

    public function salvarAjax(MarcaRequest $request)
    {
        $marca = Marca::create($request->all());

        return response()->json($marca);
    }
}
