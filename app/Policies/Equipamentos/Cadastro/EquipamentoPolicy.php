<?php

namespace App\Policies\Equipamentos\Cadastro;

use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;

class EquipamentoPolicy
{
    public function __construct(
        private PermissoesService $permissoesService
    ) {
    }

    public function ver(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.cadastro.equipamento:ver');
    }

    public function criar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.cadastro.equipamento:criar');
    }

    public function editar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.cadastro.equipamento:editar');
    }

    public function editarDescricao(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.cadastro.equipamento:editarDescricao');
    }

    public function editarCaracteristicas(Usuario $usuario): bool
    {
        return $this->permissoesService
            ->temPermissao($usuario, 'equipamentos.cadastro.equipamento:editarCaracteristicas');
    }

    public function excluir(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.cadastro.equipamento:excluir');
    }

    public function aprovarReprovar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.cadastro.equipamento:aprovarReprovar');
    }

    public function transferir(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.cadastro.equipamento:transferir');
    }
}
