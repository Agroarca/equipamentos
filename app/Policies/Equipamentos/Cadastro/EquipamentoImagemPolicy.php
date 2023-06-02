<?php

namespace App\Policies\Equipamentos\Cadastro;

use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;

class EquipamentoImagemPolicy
{
    public function __construct(
        private PermissoesService $permissoesService
    ) {
    }

    public function ver(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.cadastro.equipamento.imagem:ver');
    }

    public function adicionar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.cadastro.equipamento.imagem:adicionar');
    }

    public function excluir(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'equipamentos.cadastro.equipamento.imagem:excluir');
    }
}
