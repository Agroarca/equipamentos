<?php

namespace Tests\Feature\Console;

use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UsuarioAdminTest extends TestCase
{
    use RefreshDatabase;

    public function testePodeTornarAdminComCpf(): void
    {
        $usuario = Usuario::factory()->create();
        $command = $this->artisan('usuario:admin --cpf=' . $usuario->cpf);
        $command->assertSuccessful('Usuário atualizado com sucesso');
        $this->assertDatabaseHas('usuarios', [
            'id' => $usuario->id,
            'tipo_usuario' => 'admin',
        ]);
    }

    public function testePodeTornarAdminComEmail(): void
    {
        $usuario = Usuario::factory()->create();
        $command = $this->artisan('usuario:admin --email=' . $usuario->email);
        $command->assertSuccessful('Usuário atualizado com sucesso');
        $this->assertDatabaseHas('usuarios', [
            'id' => $usuario->id,
            'tipo_usuario' => 'admin',
        ]);
    }

    public function testePodeTornarAdminComId(): void
    {
        $usuario = Usuario::factory()->create();
        $command = $this->artisan('usuario:admin --id=' . $usuario->id);
        $command->assertSuccessful('Usuário atualizado com sucesso');
        $this->assertDatabaseHas('usuarios', [
            'id' => $usuario->id,
            'tipo_usuario' => 'admin',
        ]);
    }

    public function testeNaoPodeTornarAdminSemCpfEmailOuId(): void
    {
        $command = $this->artisan('usuario:admin');
        $command->assertExitCode(0);
        $command->expectsOutput('É necessário fornecer pelo menos uma das opções: --id, --cpf ou --email');
    }

    public function testeNaoPodeUsarComandoComUsuarioInexistente(): void
    {
        $command = $this->artisan('usuario:admin --id=1');
        $command->assertExitCode(0);
        $command->expectsOutput('Usuário não encontrado');
    }
}
