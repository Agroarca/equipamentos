<?php

namespace Tests;

use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Mockery;

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
     * Retorna um usuário administrador e não faz a verificação de autorização.
     */
    protected function ignorarTodasPermissoes(): void
    {
        $this->instance(
            PermissoesService::class,
            Mockery::mock(PermissoesService::class, function ($mock): mixed {
                $mock->shouldReceive('verificarPermissao')->andReturn(true);
            })
        );
    }

    /**
     * Retorna um usuário comum.
     */
    protected function getUsuario(): Usuario
    {
        return Usuario::factory()->create();
    }
}
