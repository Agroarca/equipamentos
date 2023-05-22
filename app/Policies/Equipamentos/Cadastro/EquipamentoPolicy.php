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
        return $this->permissoesService->temPermissao($usuario, 'administracao.permissoes.equipamento:ver');
    }

    public function criar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'administracao.permissoes.equipamento:criar');
    }

    public function editar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'administracao.permissoes.equipamento:editar');
    }

    public function editarDescricao(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'administracao.permissoes.equipamento:editarDescricao');
    }

    public function editarCaracteristicas(Usuario $usuario): bool
    {
        return $this->permissoesService
            ->temPermissao($usuario, 'administracao.permissoes.equipamento:editarCaracteristicas');
    }

    public function editarImagens(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'administracao.permissoes.equipamento:editarImagens');
    }

    public function excluir(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'administracao.permissoes.equipamento:excluir');
    }

    public function aprovarReprovar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'administracao.permissoes.equipamento:aprovarReprovar');
    }
}
