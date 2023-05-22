<?php

namespace Tests;

use App\Models\Administracao\Permissoes\Grupo;
use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Arr;

/**
 * Classe base dos testes do sistema.
 */
abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    /**
     * Retorna um usuário administrador.
     */
    protected function getAdmin(): Usuario
    {
        return Usuario::factory()->admin()->create();
    }

    /**
     * Retorna um usuário comum.
     */
    protected function getUsuario(): Usuario
    {
        return Usuario::factory()->create();
    }

    /**
     * Ignora todas as permissões durante o teste
     */
    protected function ignorarTodasPermissoes(): void
    {
        $this->mock(PermissoesService::class)
            ->shouldReceive('temPermissao')
            ->andReturn(true);
    }

    /**
     * Adicionar as permissoes a um usuário
     */
    protected function adicionarPermissoes(Usuario $usuario, array $permissoes): void
    {
        $grupo = Grupo::factory()->create();

        $permissoes = Arr::map($permissoes, fn ($permissao) => [
            'chave' => $permissao,
            'valor' => true,
        ]);

        $service = app(PermissoesService::class);
        $service->salvarPermissoesGrupo($grupo, $permissoes);
        $service->adicionarUsuarioGrupo($usuario->id, $grupo);
    }

    /**
     * Retorna um usuário administrador com a permissão informada
     */
    protected function getAdminComPermissao($permissao): Usuario
    {
        $admin = $this->getAdmin();
        $this->adicionarPermissoes($admin, [$permissao]);
        return $admin;
    }
}
