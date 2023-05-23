<?php

namespace App\Policies\Equipamentos\Cadastro;

use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;

class MarcaPolicy
{
    public function __construct(
        private PermissoesService $permissoesService
    ) {
    }

    public function ver(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.cadastro.marca:ver');
    }

    public function criar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.cadastro.marca:criar');
    }

    public function editar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.cadastro.marca:editar');
    }

    public function excluir(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.cadastro.marca:excluir');
    }
}
