<?php

namespace App\Policies\Equipamentos\Cadastro;

use App\Models\Usuario;

class EquipamentoImagemPolicy
{
    public function ver(Usuario $usuario): bool
    {
        return $usuario->hasPermissionTo('equipamentos.cadastro.equipamento.imagem:ver');
    }

    public function adicionar(Usuario $usuario): bool
    {
        return $usuario->hasPermissionTo('equipamentos.cadastro.equipamento.imagem:adicionar');
    }

    public function deletar(Usuario $usuario): bool
    {
        return $usuario->hasPermissionTo('equipamentos.cadastro.equipamento.imagem:deletar');
    }
}
