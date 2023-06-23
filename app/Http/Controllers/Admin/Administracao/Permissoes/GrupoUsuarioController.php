<?php

namespace App\Http\Controllers\Admin\Administracao\Permissoes;

use App\Http\Controllers\Controller;
use App\Models\Administracao\Permissoes\Grupo;
use App\Models\Administracao\Permissoes\GrupoUsuario;
use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
        Gate::authorize('ver', GrupoUsuario::class);
        $usuarios = $grupo->usuarios()->paginate();
        return Inertia::render('Admin/Administracao/Permissoes/GrupoUsuario/Inicio', compact('grupo', 'usuarios'));
    }

    public function adicionar(Request $request, Grupo $grupo): mixed
    {
        Gate::authorize('adicionar', GrupoUsuario::class);

        DB::transaction(function () use ($request, $grupo) {
            $this->permissoesService->adicionarUsuarioGrupo($request->usuario_id, $grupo);
        });

        return redirect()->route('admin.administracao.permissoes.grupo.usuarios', $grupo->id);
    }

    public function excluir(Grupo $grupo, Usuario $usuario): mixed
    {
        Gate::authorize('excluir', GrupoUsuario::class);

        DB::transaction(function () use ($usuario, $grupo) {
            $this->permissoesService->removerUsuarioGrupo($usuario->id, $grupo);
        });

        return redirect()->route('admin.administracao.permissoes.grupo.usuarios', $grupo->id);
    }
}
