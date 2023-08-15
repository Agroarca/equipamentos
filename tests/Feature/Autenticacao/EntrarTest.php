<?php

namespace Tests\Feature\Autenticacao;

use App\Models\Usuario;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class EntrarTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $response = $this->get('/entrar');
        $response->assertStatus(200);
    }

    public function testPodeAutenticarEmail(): void
    {
        $usuario = Usuario::factory()->create();

        $response = $this->post('/entrar', [
            'email_cpf_cnpj' => $usuario->email,
            'password' => 'Password123',
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect(RouteServiceProvider::HOME);
    }

    public function testPodeAutenticarCpf(): void
    {
        $usuario = Usuario::factory()->create();

        $response = $this->post('/entrar', [
            'email_cpf_cnpj' => $usuario->cpf,
            'password' => 'Password123',
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect(RouteServiceProvider::HOME);
    }
    public function testPodeAutenticarCnpj(): void
    {
        $usuario = Usuario::factory()->pessoaJuridica()->create();

        $response = $this->post('/entrar', [
            'email_cpf_cnpj' => $usuario->cnpj,
            'password' => 'Password123',
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect(RouteServiceProvider::HOME);
    }

    public function testAutenticarSenhaIncorreta(): void
    {
        $usuario = Usuario::factory()->create();

        $this->post('/entrar', [
            'email' => $usuario->email,
            'password' => 'password-incorreto',
        ]);

        $this->assertGuest();
    }

    public function testNaoPodeAcessarApos5Tentativas(): void
    {
        $usuario = Usuario::factory()->create();

        for ($i = 0; $i < 5; $i++) {
            $response = $this->post('/entrar', [
                'email_cpf_cnpj' => $usuario->email,
                'password' => 'password-incorreto',
            ]);
            $response->assertInvalid(['email' => 'O E-mail e/ou a senha estão incorretos.']);
        }

        $response = $this->post('/entrar', [
            'email_cpf_cnpj' => $usuario->email,
            'password' => 'password-incorreto',
        ]);

        $response->assertInvalid(['email' => 'Muitas tentativas de login.']);
        $response->assertSessionHas('errors');
    }

    /**
     * Testa se o usuário é redirecionado para a rota anterior após o login.
     * Issue #402
     */
    public function testRedirecionarRotaAnteriorAposLogin(): void
    {
        $usuario = Usuario::factory()->create();

        $response = $this->get('/equipamento/cadastrar');

        $this->assertGuest();
        $response->assertRedirectToRoute('auth.acessar');
        $response->assertSessionHas('url.intended', url('/equipamento/cadastrar'));

        $response = $this->withSession([
            'url.intended' => url('/equipamento/cadastrar'),
        ])->post('/entrar', [
            'email_cpf_cnpj' => $usuario->email,
            'password' => 'Password123',
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect('/equipamento/cadastrar');
    }
}
