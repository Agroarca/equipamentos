<?php

namespace App\Policies\Administracao\Permissoes;

use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;

class GrupoPolicy
{
    public function __construct(
        private PermissoesService $permissoesService
    ) {
    }

    public function ver(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'administracao.permissoes.grupo:visualizar');
    }

    public function criar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'administracao.permissoes.grupo:criar');
    }

    public function atualizar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'administracao.permissoes.grupo:editar');
    }

    public function excluir(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'administracao.permissoes.grupo:excluir');
    }
}
