<?php

namespace App\Http\Controllers\Admin\Administracao\Permissoes;

use App\Http\Controllers\Controller;
use App\Models\Administracao\Permissoes\Grupo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GrupoController extends Controller
{
    public function inicio(): mixed
    {
        $grupos = Grupo::paginate();
        return Inertia::render('Admin/Administracao/Permissoes/Grupo/Inicio', compact('grupos'));
    }

    public function criar(): mixed
    {
        return Inertia::render('Admin/Administracao/Permissoes/Grupo/Criar');
    }

    public function salvar(Request $request): mixed
    {
        Grupo::create($request->all());
        return redirect()->route('admin.administracao.permissoes.grupo');
    }

    public function editar(Grupo $grupo): mixed
    {
        return Inertia::render('Admin/Administracao/Permissoes/Grupo/Editar', compact('grupo'));
    }

    public function atualizar(Request $request, Grupo $grupo): mixed
    {
        $grupo->update($request->all());
        return redirect()->route('admin.administracao.permissoes.grupo');
    }

    public function excluir(Grupo $grupo): mixed
    {
        $grupo->delete();
        return redirect()->route('admin.administracao.permissoes.grupo');
    }
}
