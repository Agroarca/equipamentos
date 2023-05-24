<?php

// phpcs:disable Squiz.Commenting.FunctionComment

namespace App\Services\Administracao\Permissoes;

use App\Classes\Administracao\Permissoes\GrupoPermissao;
use App\Models\Administracao\Permissoes\Grupo;
use App\Models\Administracao\Permissoes\GrupoUsuario;
use App\Models\Administracao\Permissoes\PermissaoGrupo;
use App\Models\Usuario;

class PermissoesService
{
    public function temPermissao(Usuario $usuario, string $chave): bool
    {
        return $usuario->grupos()->whereIn(
            'administracao_grupos.id',
            fn ($query) => $query->select('grupo_id')
                ->from('administracao_permissao_grupo')
                ->where('chave', $chave)
        )->exists();
    }

    public function salvarPermissoesGrupo(Grupo $grupo, array $permissoes): void
    {
        foreach ($permissoes as $permissao) {
            if ($permissao['valor']) {
                PermissaoGrupo::create([
                    'grupo_id' => $grupo->id,
                    'chave' => $permissao['chave'],
                ]);
            } else {
                PermissaoGrupo::where([
                    'grupo_id' => $grupo->id,
                    'chave' => $permissao['chave'],
                ])->delete();
            }
        }
    }

    public function adicionarUsuarioGrupo($usuarioId, Grupo $grupo): void
    {
        GrupoUsuario::firstOrCreate([
            'grupo_id' => $grupo->id,
            'usuario_id' => $usuarioId,
        ]);
    }

    public function removerUsuarioGrupo($usuarioId, Grupo $grupo): void
    {
        GrupoUsuario::where('grupo_id', $grupo->id)
            ->where('usuario_id', $usuarioId)
            ->delete();
    }

    public function retornarPermissoesGrupo(Grupo $grupo): array
    {
        $grupo->load('permissoes');

        return [
            $this->administracao($grupo),
            $this->equipamentos($grupo),
        ];
    }

    private function administracao(Grupo $grupo): GrupoPermissao
    {
        return GrupoPermissao::create('Administração', 'administracao', $grupo)
            ->grupo('Permissões', 'permissoes', function (GrupoPermissao $grupo): void {
                $grupo->grupo('Grupo', 'grupo', function (GrupoPermissao $grupo): void {
                    $grupo->permissao('Ver', 'ver');
                    $grupo->permissao('Criar', 'criar');
                    $grupo->permissao('Editar', 'editar');
                    $grupo->permissao('Excluir', 'excluir');
                });

                $grupo->grupo('Grupo Usuário', 'grupo_usuario', function (GrupoPermissao $grupo): void {
                    $grupo->permissao('Ver', 'ver');
                    $grupo->permissao('Adicionar', 'adicionar');
                    $grupo->permissao('Excluir', 'excluir');
                });

                $grupo->grupo('Permissao do grupo', 'permissao_grupo', function (GrupoPermissao $grupo): void {
                    $grupo->permissao('Ver', 'ver');
                    $grupo->permissao('Editar', 'editar');
                });
            });
    }

    // phpcs:disable SlevomatCodingStandard.Functions.FunctionLength

    private function equipamentos(Grupo $grupo): GrupoPermissao
    {
        return GrupoPermissao::create('Equipamentos', 'equipamentos', $grupo)
            ->grupo('Lista', 'lista', function (GrupoPermissao $grupo): void {
                $grupo->grupo('Lista', 'lista', function (GrupoPermissao $grupo): void {
                    $grupo->permissao('Ver', 'ver');
                    $grupo->permissao('Criar', 'criar');
                    $grupo->permissao('Editar', 'editar');
                    $grupo->permissao('Excluir', 'excluir');
                    $grupo->permissao('Adicionar', 'adicionar');
                    $grupo->permissao('Remover', 'remover');
                });
            })
            ->grupo('Cadastro', 'cadastro', function (GrupoPermissao $grupo): void {
                $grupo->grupo('Marca', 'marca', function (GrupoPermissao $grupo): void {
                    $grupo->permissao('Ver', 'ver');
                    $grupo->permissao('Criar', 'criar');
                    $grupo->permissao('Editar', 'editar');
                    $grupo->permissao('Excluir', 'excluir');
                });
                $grupo->grupo('Equipamento', 'equipamento', function (GrupoPermissao $grupo): void {
                    $grupo->permissao('Ver', 'ver');
                    $grupo->permissao('Criar', 'criar');
                    $grupo->permissao('Editar', 'editar');
                    $grupo->permissao('Editar Descrição', 'editarDescricao');
                    $grupo->permissao('Editar Caracteristicas', 'editarCaracteristicas');
                    $grupo->permissao('Editar Imagens', 'editarImagens');
                    $grupo->permissao('Aprovar ou Reprovar', 'aprovarReprovar');
                });
            });
    }
}
