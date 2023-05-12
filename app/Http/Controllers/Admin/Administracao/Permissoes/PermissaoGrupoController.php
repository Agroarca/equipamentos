<?php

namespace App\Http\Controllers\Admin\Administracao\Permissoes;

use App\Http\Controllers\Controller;
use App\Models\Administracao\Permissoes\Grupo;
use App\Models\Administracao\Permissoes\PermissaoGrupo;
use App\Services\Administracao\Permissoes\PermissoesService;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class PermissaoGrupoController extends Controller
{
    public function __construct(
        private PermissoesService $permissoesService
    ) {
    }

    public function inicio(Grupo $grupo): mixed
    {
        Gate::authorize('ver', PermissaoGrupo::class);
        $permissoes = $this->permissoesService->retornarPermissoesGrupo($grupo);
        return Inertia::render('Admin/Administracao/Permissoes/PermissaoGrupo/Inicio', compact('permissoes', 'grupo'));
    }
}
