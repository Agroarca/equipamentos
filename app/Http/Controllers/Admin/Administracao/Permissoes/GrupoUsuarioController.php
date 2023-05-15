<?php

namespace App\Http\Controllers\Admin\Administracao\Permissoes;

use App\Http\Controllers\Controller;
use App\Models\Administracao\Permissoes\Grupo;
use App\Models\Administracao\Permissoes\GrupoUsuario;
use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class GrupoUsuarioController extends Controller
{
    public function __construct(
        private PermissoesService $permissoesService
    ) {
    }

    public function inicio(Grupo $grupo): mixed
    {
        Gate::authorize(GrupoUsuario::class, 'ver');
        $usuarios = $grupo->usuarios()->paginate(10);
        return Inertia::render('Admin/Administracao/Permissoes/GrupoUsuario/Inicio', compact('grupo', 'usuarios'));
    }

    public function adicionar(Request $request, Grupo $grupo): mixed
    {
        Gate::authorize(GrupoUsuario::class, 'editar');
        $this->permissoesService->adicionarUsuarioGrupo($request->usuario_id, $grupo->id);

        return redirect()->route('admin.administracao.permissoes.grupo.usuarios', $grupo->id);
    }

    public function excluir(Grupo $grupo, Usuario $usuario): mixed
    {
        Gate::authorize(GrupoUsuario::class, 'editar');
        GrupoUsuario::where('grupo_id', $grupo->id)
            ->where('usuario_id', $usuario->id)
            ->delete();

        return redirect()->route('admin.administracao.permissoes.grupo.usuarios', $grupo->id);
    }
}
