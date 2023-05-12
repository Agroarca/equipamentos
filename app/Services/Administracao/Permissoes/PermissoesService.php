<?php

// phpcs:disable Squiz.Commenting.FunctionComment

namespace App\Services\Administracao\Permissoes;

use App\Classes\Administracao\Permissoes\GrupoPermissao;
use App\Models\Administracao\Permissoes\Grupo;
use App\Models\Usuario;

class PermissoesService
{
    public function temPermissao(Usuario $usuario, string $chave): bool
    {
        return true;
    }

    public function retornarPermissoesGrupo(Grupo $grupo): array
    {
        $grupo->load('permissoes');

        return [
            $this->administracao($grupo),
        ];
    }

    private function administracao(Grupo $grupo): GrupoPermissao
    {
        return GrupoPermissao::create('Administração', 'administracao', $grupo)
            ->grupo('Permissões', 'permissoes', function (GrupoPermissao $grupo): void {
                $grupo->grupo('Grupo', 'grupo', function (GrupoPermissao $grupo): void {
                    $grupo->permissao('Visualizar', 'visualizar');
                    $grupo->permissao('Criar', 'criar');
                    $grupo->permissao('Editar', 'editar');
                    $grupo->permissao('Excluir', 'excluir');
                });

                $grupo->grupo('Grupo Usuário', 'grupo_usuario', function (GrupoPermissao $grupo): void {
                    $grupo->permissao('Visualizar', 'visualizar');
                    $grupo->permissao('Adicionar', 'adicionar');
                    $grupo->permissao('Excluir', 'excluir');
                });

                $grupo->grupo('Permissao do grupo', 'permissao_grupo', function (GrupoPermissao $grupo): void {
                    $grupo->permissao('Visualizar', 'visualizar');
                    $grupo->permissao('Adicionar', 'adicionar');
                    $grupo->permissao('Excluir', 'excluir');
                });
            });
    }
}
