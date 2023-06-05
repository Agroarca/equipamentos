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
            $this->marketing($grupo),
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
                    $grupo->permissao('Aprovar ou Reprovar', 'aprovarReprovar');
                    $grupo->permissao('Transferir', 'transferir');
                });

                $grupo->grupo('Equipamento Imagem', 'equipamento.imagem', function (GrupoPermissao $grupo): void {
                    $grupo->permissao('Ver', 'ver');
                    $grupo->permissao('Adicionar', 'adicionar');
                    $grupo->permissao('excluir', 'excluir');
                });

                $grupo->grupo('Modelo', 'modelo', function (GrupoPermissao $grupo): void {
                    $grupo->permissao('Ver', 'ver');
                    $grupo->permissao('Criar', 'criar');
                    $grupo->permissao('Editar', 'editar');
                    $grupo->permissao('Excluir', 'excluir');
                });

                $grupo->grupo('Categoria', 'categoria', function (GrupoPermissao $grupo): void {
                    $grupo->permissao('Ver', 'ver');
                    $grupo->permissao('Criar', 'criar');
                    $grupo->permissao('Editar', 'editar');
                    $grupo->permissao('Excluir', 'excluir');
                    $grupo->permissao('Mover', 'mover');
                });
            })
            ->grupo('Caracteristicas', 'caracteristicas', function (GrupoPermissao $grupo): void {
                $grupo->grupo('Caracteristica', 'caracteristica', function (GrupoPermissao $grupo): void {
                    $grupo->permissao('Ver', 'ver');
                    $grupo->permissao('Criar', 'criar');
                    $grupo->permissao('Excluir', 'excluir');
                });
            });
    }

    private function marketing(Grupo $grupo): GrupoPermissao
    {
        return GrupoPermissao::create('Marketing', 'marketing', $grupo)
            ->grupo('Página Inicial', 'pagina-inicial', function (GrupoPermissao $grupo): void {
                $grupo->grupo('Banners', 'banners', function (GrupoPermissao $grupo): void {
                    $grupo->grupo('Banner', 'banner', function (GrupoPermissao $grupo): void {
                        $grupo->permissao('Ver', 'ver');
                        $grupo->permissao('Criar', 'criar');
                    });
                });
                $grupo->grupo('Carrossel', 'carrossel', function (GrupoPermissao $grupo): void {
                    $grupo->grupo('CarrosselItem', 'carrossel-item', function (GrupoPermissao $grupo): void {
                        $grupo->permissao('Ver', 'ver');
                        $grupo->permissao('Criar', 'criar');
                        $grupo->permissao('Excluir', 'excluir');
                        $grupo->permissao('Alterar Ordem', 'ordem');
                    });
                });
                $grupo->grupo('Grid', 'grid', function (GrupoPermissao $grupo): void {
                    $grupo->grupo('Grid', 'grid', function (GrupoPermissao $grupo): void {
                        $grupo->permissao('Ver', 'ver');
                        $grupo->permissao('Criar', 'criar');
                    });
                    $grupo->grupo('Imagem do Grid', 'grid-imagem', function (GrupoPermissao $grupo): void {
                        $grupo->permissao('Ver', 'ver');
                        $grupo->permissao('Criar', 'criar');
                        $grupo->permissao('Excluir', 'excluir');
                    });
                });
                $grupo->grupo('Lista de Produtos', 'lista-produtos', function (GrupoPermissao $grupo): void {
                    $grupo->grupo('Lista', 'lista', function (GrupoPermissao $grupo): void {
                        $grupo->permissao('Ver', 'ver');
                        $grupo->permissao('Criar', 'criar');
                    });
                });
                $grupo->grupo('Menu', 'menu', function (GrupoPermissao $grupo): void {
                    $grupo->grupo('Link do Menu', 'menu-link', function (GrupoPermissao $grupo): void {
                        $grupo->permissao('Criar', 'criar');
                        $grupo->permissao('Editar', 'editar');
                        $grupo->permissao('Excluir', 'excluir');
                        $grupo->permissao('Alterar Ordem', 'ordem');
                    });
                });

                $grupo->grupo('Versao', 'versao', function (GrupoPermissao $grupo): void {
                    $grupo->permissao('Ver', 'ver');
                    $grupo->permissao('Criar', 'criar');
                    $grupo->permissao('Editar', 'editar');
                    $grupo->permissao('Excluir', 'excluir');
                    $grupo->permissao('Aprovar', 'aprovar');
                    $grupo->permissao('Reprovar', 'reprovar');
                    $grupo->permissao('Publicar', 'publicar');
                    $grupo->permissao('Voltar', 'voltar');
                });
                $grupo->grupo('Componente', 'componente', function (GrupoPermissao $grupo): void {
                    $grupo->permissao('Alterar Ordem', 'ordem');
                    $grupo->permissao('Excluir', 'excluir');
                });
            });
    }
}
