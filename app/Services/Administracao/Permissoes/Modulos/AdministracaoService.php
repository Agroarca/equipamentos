<?php

// phpcs:disable Squiz.Commenting.FunctionComment

namespace App\Services\Administracao\Permissoes\Modulos;

use App\Classes\Administracao\Permissoes\GrupoPermissao;
use App\Classes\Administracao\Permissoes\Permissao;

class AdministracaoService
{
    private function administracao(): GrupoPermissao
    {
        return GrupoPermissao::create(
            'Administração',
            'administracao'
        )
            ->addGrupo($this->admPermissoes());
    }

    private function admPermissoes(): GrupoPermissao
    {
        return GrupoPermissao::create(
            'Permissões',
            'administracao.permissoes'
        )
            ->addGrupo($this->admPermGrupo())
            ->addGrupo($this->admPermGrupoUsuario())
            ->addGrupo($this->admPermPermissaoGrupo());
    }

    private function admPermGrupo(): GrupoPermissao
    {
        return GrupoPermissao::create(
            'Grupo',
            'administracao.permissoes.grupo'
        )
            ->addPermissao(new Permissao('Visualizar', 'administracao.permissoes.grupo:visualizar'))
            ->addPermissao(new Permissao('Criar', 'administracao.permissoes.grupo:criar'))
            ->addPermissao(new Permissao('Editar', 'administracao.permissoes.grupo:editar'))
            ->addPermissao(new Permissao('Excluir', 'administracao.permissoes.grupo:excluir'));
    }

    private function admPermGrupoUsuario(): GrupoPermissao
    {
        return GrupoPermissao::create(
            'GrupoUsuario',
            'administracao.permissoes.grupo.usuario'
        )
            ->addPermissao(new Permissao('Visualizar', 'administracao.permissoes.grupo.usuario:visualizar'))
            ->addPermissao(new Permissao('Adicionar', 'administracao.permissoes.grupo.usuario:adicionar'))
            ->addPermissao(new Permissao('Excluir', 'administracao.permissoes.grupo.usuario:excluir'));
    }

    private function admPermPermissaoGrupo(): GrupoPermissao
    {
        return GrupoPermissao::create(
            'PermissaoGrupo',
            'administracao.permissoes.permissao.grupo'
        )
            ->addPermissao(new Permissao('Visualizar', 'administracao.permissoes.permissao.grupo:visualizar'))
            ->addPermissao(new Permissao('Adicionar', 'administracao.permissoes.permissao.grupo:adicionar'))
            ->addPermissao(new Permissao('Excluir', 'administracao.permissoes.permissao.grupo:excluir'));
    }
}
