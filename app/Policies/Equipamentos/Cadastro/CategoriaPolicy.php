<?php

namespace App\Policies\Equipamentos\Cadastro;

use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;

class CategoriaPolicy
{
    public function __construct(
        private PermissoesService $permissoesService
    ) {
    }

    public function ver(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.cadastro.categoria:ver');
    }

    public function criar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.cadastro.categoria:criar');
    }

    public function editar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.cadastro.categoria:editar');
    }

    public function excluir(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.cadastro.categoria:excluir');
    }

    public function mover(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.cadastro.categoria:mover');
    }
}
