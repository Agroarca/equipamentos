<?php

namespace Tests\Feature\Autenticacao;

use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;

class AcessarTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $response = $this->get('/acessar');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Auth/Acessar'));
    }

    public function testPodeAcessarUsuarioComEmail(): void
    {
        $usuario = Usuario::factory()->create();

        $response = $this->post('/acessar', [
            'email_cpf_cnpj' => $usuario->email,
        ]);

        $response->assertRedirectToRoute('auth.entrar');
        $response->assertSessionHasInput('email_cpf_cnpj', $usuario->email);
    }

    public function testPodeAcessarUsuarioComCpf(): void
    {
        $usuario = Usuario::factory()->create();

        $response = $this->post('/acessar', [
            'email_cpf_cnpj' => $usuario->cpf,
        ]);

        $response->assertRedirectToRoute('auth.entrar');
        $response->assertSessionHasInput('email_cpf_cnpj', $usuario->cpf);
    }

    public function testPodeAcessarUsuarioComCnpj(): void
    {
        $usuario = Usuario::factory()->pessoaJuridica()->create();

        $response = $this->post('/acessar', [
            'email_cpf_cnpj' => $usuario->cnpj,
        ]);

        $response->assertRedirectToRoute('auth.entrar');
        $response->assertSessionHasInput('email_cpf_cnpj', $usuario->cnpj);
    }

    public function testPodeAcessarUsuarioNovoComEmail(): void
    {
        $usuario = Usuario::factory()->make();

        $response = $this->post('/acessar', [
            'email_cpf_cnpj' => $usuario->email,
        ]);

        $response->assertRedirectToRoute('auth.registrar');
        $response->assertSessionHasInput('email', $usuario->email);
    }

    public function testPodeAcessarUsuarioNovoComCpf(): void
    {
        $usuario = Usuario::factory()->make();

        $response = $this->post('/acessar', [
            'email_cpf_cnpj' => $usuario->cpf,
        ]);

        $response->assertRedirectToRoute('auth.registrar');
        $response->assertSessionHasInput('cpf', $usuario->cpf);
    }

    public function testPodeAcessarUsuarioNovoComCnpj(): void
    {
        $usuario = Usuario::factory()->pessoaJuridica()->make();

        $response = $this->post('/acessar', [
            'email_cpf_cnpj' => $usuario->cnpj,
        ]);

        $response->assertRedirectToRoute('auth.registrar');
        $response->assertSessionHasInput('cnpj', $usuario->cnpj);
    }

    public function testNaoPodeAcessarValorInvalido(): void
    {
        $response = $this->post('/acessar', [
            'email_cpf_cnpj' => '123',
        ]);

        $response->assertInvalid(['email_cpf_cnpj']);
    }

    public function testNaoPodeAcessarEmailInvalido(): void
    {
        $response = $this->post('/acessar', [
            'email_cpf_cnpj' => 'aaaa@',
        ]);

        $response->assertInvalid(['email']);
    }

    public function testNaoPodeAcessarCpfInvalido(): void
    {
        $response = $this->post('/acessar', [
            'email_cpf_cnpj' => '00000000000',
        ]);

        $response->assertInvalid(['cpf']);
    }

    public function testNaoPodeAcessarCnpjInvalido(): void
    {
        $response = $this->post('/acessar', [
            'email_cpf_cnpj' => '00000000000000',
        ]);

        $response->assertInvalid(['cnpj']);
    }
}
