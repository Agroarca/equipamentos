<?php

namespace Database\Seeders;

use App\Models\Administracao\Permissoes\Grupo;
use App\Models\Administracao\Permissoes\PermissaoGrupo;
use Illuminate\Database\Seeder;

class PermissaoGrupoSeeder extends Seeder
{
    public function run(): void
    {
        $grupo = Grupo::create([
            'nome' => 'Administração',
        ]);

        $permissoes = [
            'administracao.permissoes.grupo:ver',
            'administracao.permissoes.grupo:criar',
            'administracao.permissoes.grupo:editar',
            'administracao.permissoes.grupo:excluir',
            'administracao.permissoes.grupo_usuario:ver',
            'administracao.permissoes.grupo_usuario:editar',
            'administracao.permissoes.permissao_grupo:ver',
            'administracao.permissoes.permissao_grupo:editar',
        ];

        foreach ($permissoes as $permissao) {
            PermissaoGrupo::create([
                'grupo_id' => $grupo->id,
                'chave' => $permissao,
            ]);
        }
    }
}
