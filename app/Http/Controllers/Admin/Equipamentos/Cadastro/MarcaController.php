<?php

namespace App\Http\Controllers\Admin\Equipamentos\Cadastro;

use App\Enums\Equipamentos\Cadastro\StatusCadastro;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Equipamentos\Cadastro\MarcaRequest;
use App\Models\Equipamentos\Cadastro\Marca;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MarcaController extends Controller
{
    public function inicio()
    {
        Gate::authorize('ver', Marca::class);
        $marcas = Marca::paginate(10);
        $statusCadastro = StatusCadastro::toArray();

        return Inertia::render('Admin/Equipamentos/Cadastro/Marca/Inicio', compact('marcas', 'statusCadastro'));
    }

    public function criar()
    {
        Gate::authorize('criar', Marca::class);
        $statusCadastro = StatusCadastro::toArray();
        return Inertia::render('Admin/Equipamentos/Cadastro/Marca/Criar', compact('statusCadastro'));
    }

    public function salvar(MarcaRequest $request)
    {
        Gate::authorize('criar', Marca::class);
        Marca::create($request->all());

        return redirect()->route('admin.marcas');
    }

    public function editar(int $id)
    {
        Gate::authorize('editar', Marca::class);
        $marca = Marca::findOrFail($id);
        $statusCadastro = StatusCadastro::toArray();

        return Inertia::render('Admin/Equipamentos/Cadastro/Marca/Editar', compact('marca', 'statusCadastro'));
    }

    public function atualizar(MarcaRequest $request, int $id)
    {
        Gate::authorize('editar', Marca::class);
        Marca::findOrFail($id)->update($request->all());

        return redirect()->route('admin.marcas');
    }

    public function excluir(int $id)
    {
        Gate::authorize('excluir', Marca::class);
        Marca::findOrFail($id)->delete();

        return redirect()->route('admin.marcas');
    }

    public function pesquisar(Request $request)
    {
        Gate::authorize('ver', Marca::class);
        $marcas = Marca::select('id', 'nome as texto')
            ->whereFullText('nome', $request->input('termo'))
            ->orWhere('nome', 'like', '%' . $request->input('termo') . '%')
            ->take(10)
            ->get();

        return response()->json($marcas);
    }

    public function salvarAjax(MarcaRequest $request)
    {
        Gate::authorize('criar', Marca::class);
        $marca = Marca::create($request->all());

        return response()->json($marca);
    }
}
