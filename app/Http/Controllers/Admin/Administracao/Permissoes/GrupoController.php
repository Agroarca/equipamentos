<?php

namespace App\Http\Controllers\Admin\Administracao\Permissoes;

use App\Http\Controllers\Controller;
use App\Models\Administracao\Permissoes\Grupo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class GrupoController extends Controller
{
    public function inicio(): mixed
    {
        Gate::authorize('ver', Grupo::class);
        $grupos = Grupo::paginate();
        return Inertia::render('Admin/Administracao/Permissoes/Grupo/Inicio', compact('grupos'));
    }

    public function criar(): mixed
    {
        Gate::authorize('criar', Grupo::class);
        return Inertia::render('Admin/Administracao/Permissoes/Grupo/Criar');
    }

    public function salvar(Request $request): mixed
    {
        Gate::authorize('criar', Grupo::class);
        Grupo::create($request->all());
        return redirect()->route('admin.administracao.permissoes.grupo');
    }

    public function editar(Grupo $grupo): mixed
    {
        Gate::authorize('editar', $grupo);
        return Inertia::render('Admin/Administracao/Permissoes/Grupo/Editar', compact('grupo'));
    }

    public function atualizar(Request $request, Grupo $grupo): mixed
    {
        Gate::authorize('editar', $grupo);
        $grupo->update($request->all());
        return redirect()->route('admin.administracao.permissoes.grupo');
    }

    public function excluir(Grupo $grupo): mixed
    {
        Gate::authorize('excluir', $grupo);
        $grupo->delete();
        return redirect()->route('admin.administracao.permissoes.grupo');
    }
}
