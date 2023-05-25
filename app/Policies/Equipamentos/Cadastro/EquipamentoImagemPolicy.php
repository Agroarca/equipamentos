<?php

namespace App\Policies\Equipamentos\Cadastro;

use App\Models\Usuario;

class EquipamentoImagemPolicy
{
    public function ver(Usuario $usuario): bool
    {
        return $usuario->hasPermissionTo('administracao.permissoes.equipamento.imagens:ver');
    }

    public function adicionar(Usuario $usuario): bool
    {
        return $usuario->hasPermissionTo('administracao.permissoes.equipamento.imagens:adicionar');
    }

    public function deletar(Usuario $usuario): bool
    {
        return $usuario->hasPermissionTo('administracao.permissoes.equipamento.imagens:deletar');
    }
}
