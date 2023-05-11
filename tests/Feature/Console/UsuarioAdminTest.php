<?php

namespace Tests\Feature\Console;

use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UsuarioAdminTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeTornarAdminComCpf(): void
    {
        $usuario = Usuario::factory()->create();
        $command = $this->artisan('usuario:admin --cpf=' . $usuario->cpf);
        $command->assertSuccessful('Usuário atualizado com sucesso');
        $this->assertDatabaseHas('usuarios', [
            'id' => $usuario->id,
            'tipo_usuario' => 'admin',
        ]);
    }

    public function testPodeTornarAdminComEmail(): void
    {
        $usuario = Usuario::factory()->create();
        $command = $this->artisan('usuario:admin --email=' . $usuario->email);
        $command->assertSuccessful('Usuário atualizado com sucesso');
        $this->assertDatabaseHas('usuarios', [
            'id' => $usuario->id,
            'tipo_usuario' => 'admin',
        ]);
    }

    public function testPodeTornarAdminComId(): void
    {
        $usuario = Usuario::factory()->create();
        $command = $this->artisan('usuario:admin --id=' . $usuario->id);
        $command->assertSuccessful('Usuário atualizado com sucesso');
        $this->assertDatabaseHas('usuarios', [
            'id' => $usuario->id,
            'tipo_usuario' => 'admin',
        ]);
    }

    public function testNaoPodeTornarAdminSemCpfEmailOuId(): void
    {
        $command = $this->artisan('usuario:admin');
        $command->assertExitCode(0);
        $command->expectsOutput('É necessário fornecer pelo menos uma das opções: --id, --cpf ou --email');
    }

    public function testNaoPodeUsarComandoComUsuarioInexistente(): void
    {
        $command = $this->artisan('usuario:admin --id=1');
        $command->assertExitCode(0);
        $command->expectsOutput('Usuário não encontrado');
    }
}
