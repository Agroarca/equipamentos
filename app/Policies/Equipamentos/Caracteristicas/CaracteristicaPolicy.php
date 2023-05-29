<?php

namespace App\Policies\Equipamentos\Caracteristicas;

use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;

class CaracteristicaPolicy
{
    public function __construct(
        private PermissoesService $permissoesService
    ) {
    }

    public function ver(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.caracteristicas.caracteristica:ver');
    }

    public function criar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.caracteristicas.caracteristica:criar');
    }

    public function excluir(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.caracteristicas.caracteristica:excluir');
    }
}
