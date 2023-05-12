<?php

namespace App\Policies\Administracao\Permissoes;

use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;

class GrupoUsuarioPolicy
{
    public function __construct(
        private PermissoesService $permissoesService
    ) {
    }

    public function ver(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'administracao.permissoes.grupo_usuario:visualizar');
    }

    public function criar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'administracao.permissoes.grupo_usuario:criar');
    }

    public function excluir(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'administracao.permissoes.grupo_usuario:excluir');
    }
}
