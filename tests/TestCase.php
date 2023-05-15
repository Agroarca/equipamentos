<?php

namespace Tests;

use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

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
}
