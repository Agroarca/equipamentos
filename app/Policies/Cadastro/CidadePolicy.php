<?php

namespace App\Policies\Cadastro;

use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;

class CidadePolicy
{
    public function __construct(
        private PermissoesService $permissoesService
    ) {
    }

    public function ver(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'cadastro.cidade:ver');
    }

    public function criar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'cadastro.cidade:criar');
    }

    public function editar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'cadastro.cidade:editar');
    }

    public function excluir(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'cadastro.cidade:excluir');
    }
}
