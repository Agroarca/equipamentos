<?php

namespace App\Http\Controllers\Admin\Equipamentos\Cadastro;

use App\Enums\Equipamentos\Cadastro\StatusCadastro;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Equipamentos\Cadastro\ModeloRequest;
use App\Models\Equipamentos\Cadastro\Modelo;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Gate;

class ModeloController extends Controller
{
    public function inicio()
    {
        Gate::authorize('ver', Modelo::class);
        $modelos = Modelo::with(['marca'])->paginate(10);

        $statusCadastro = StatusCadastro::toArray();

        return Inertia::render('Admin/Equipamentos/Cadastro/Modelo/Inicio', compact('modelos', 'statusCadastro'));
    }

    public function criar()
    {
        Gate::authorize('criar', Modelo::class);
        $statusCadastro = StatusCadastro::toArray();

        return Inertia::render('Admin/Equipamentos/Cadastro/Modelo/Criar', compact('statusCadastro'));
    }

    public function salvar(ModeloRequest $request)
    {
        Gate::authorize('criar', Modelo::class);
        Modelo::create($request->all());

        return redirect()->route('admin.modelos');
    }

    public function editar(int $id)
    {
        Gate::authorize('editar', Modelo::class);
        $modelo = Modelo::with('marca')->findOrFail($id);

        $statusCadastro = StatusCadastro::toArray();

        return Inertia::render(
            'Admin/Equipamentos/Cadastro/Modelo/Editar',
            compact('modelo', 'statusCadastro')
        );
    }

    public function atualizar(ModeloRequest $request, int $id)
    {
        Gate::authorize('editar', Modelo::class);
        Modelo::findOrFail($id)->update($request->all());

        return redirect()->route('admin.modelos');
    }

    public function excluir(int $id)
    {
        Gate::authorize('excluir', Modelo::class);
        Modelo::findOrFail($id)->delete();

        return redirect()->route('admin.modelos');
    }

    public function pesquisar(Request $request, ?int $marcaId = null)
    {
        Gate::authorize('ver', Modelo::class);
        $modelos = Modelo::select('id', 'nome as texto')
            ->where(function ($query) use ($request) {
                $query
                    ->whereFullText('nome', $request->input('termo'))
                    ->orWhere('nome', 'like', '%' . $request->input('termo') . '%');
            })
            ->when($marcaId, function ($query) use ($marcaId) {
                $query->where('marca_id', $marcaId);
            })
            ->take(10)
            ->get();

        return response()->json($modelos);
    }

    public function salvarAjax(ModeloRequest $request)
    {
        Gate::authorize('criar', Modelo::class);
        $modelo = Modelo::create($request->all());

        return response()->json($modelo);
    }
}
