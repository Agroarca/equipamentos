<?php

namespace App\Policies\Administracao\Permissoes;

use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;

class PermissaoGrupoPolicy
{
    public function __construct(
        private PermissoesService $permissoesService
    ) {
    }

    public function ver(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'administracao.permissoes.permissao_grupo:ver');
    }

    public function editar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'administracao.permissoes.permissao_grupo:editar');
    }
}
