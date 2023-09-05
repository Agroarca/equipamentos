<?php

namespace Tests\Feature\Site;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class PerfilTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $response = $this->actingAs($this->getUsuario())
            ->get('/perfil');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Perfil/Perfil')
            ->has('user'));
    }

    public function testPodeEditar(): void
    {
        $response = $this->actingAs($this->getUsuario())
            ->get('/perfil/editar');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Perfil/EditarPerfil')
            ->has('user'));
    }

    public function testPodeAlterarDadosSemSenha(): void
    {
        $usuario = $this->getUsuario();
        $response = $this->actingAs($usuario)
            ->post('/perfil/salvar', [
                'nome' => 'Nome alterado',
                'email' => 'teste@exemple.com',
                'cpf_cnpj' => $usuario->cpf,
                'celular' => $usuario->celular,
                'password' => '',
            ]);
        $response->assertRedirectToRoute('site.perfil');
    }

    public function testPodeAlterarDadosComSenha(): void
    {
        $usuario = $this->getUsuario();
        $response = $this->actingAs($usuario)
            ->post('/perfil/salvar', [
                'nome' => 'Nome alterado',
                'email' => 'teste@exemple.com',
                'cpf_cnpj' => $usuario->cpf,
                'celular' => $usuario->celular,
                'password' => 'Password123',
            ]);
        $response->assertRedirectToRoute('site.perfil');
    }

    public function testNaoPodeAlterarDadosComSenhaSemCaracteresMaiusculos(): void
    {
        $usuario = $this->getUsuario();
        $response = $this->actingAs($usuario)
            ->post('/perfil/salvar', [
                'nome' => 'Nome alterado',
                'email' => 'teste@exemple.com',
                'cpf_cnpj' => $usuario->cpf,
                'celular' => $usuario->celular,
                'password' => 'password123',
            ]);
        $response->assertInvalid(['password']);
    }

    public function testNaoPodeAlterarDadosComSenhaSemCaracteresMinusculos(): void
    {
        $usuario = $this->getUsuario();
        $response = $this->actingAs($usuario)
            ->post('/perfil/salvar', [
                'nome' => 'Nome alterado',
                'email' => 'teste@exemple.com',
                'cpf_cnpj' => $usuario->cpf,
                'celular' => $usuario->celular,
                'password' => 'PASSWORD123',
            ]);
        $response->assertInvalid(['password']);
    }

    public function testNaoPodeAlterarDadosComSenhaSemNumeros(): void
    {
        $usuario = $this->getUsuario();
        $response = $this->actingAs($usuario)
            ->post('/perfil/salvar', [
                'nome' => 'Nome alterado',
                'email' => 'teste@exemple.com',
                'cpf_cnpj' => $usuario->cpf,
                'celular' => $usuario->celular,
                'password' => 'Password',
            ]);
        $response->assertInvalid(['password']);
    }

    public function testNaoPodeAlterarSenhaSem8CaracteresMinimos(): void
    {
        $usuario = $this->getUsuario();
        $response = $this->actingAs($usuario)
            ->post('/perfil/salvar', [
                'nome' => 'Nome alterado',
                'email' => 'teste@exemple.com',
                'cpf_cnpj' => $usuario->cpf,
                'celular' => $usuario->celular,
                'password' => 'Pass123',
            ]);
        $response->assertInvalid(['password']);
    }

    public function testPodeLogarAposAlterarSenha(): void
    {
        $usuario = $this->getUsuario();
        $response = $this->actingAs($usuario)
            ->post('/perfil/salvar', [
                'nome' => 'Nome alterado',
                'email' => $usuario->email,
                'cpf_cnpj' => $usuario->cpf,
                'celular' => $usuario->celular,
                'password' => 'Password123',
            ]);

        $response->assertValid();

        $response->assertRedirectToRoute('site.perfil');

        Auth::logout();

        $this->assertGuest();

        $responseLogin = $this->post('/entrar', [
            'email_cpf_cnpj' => $usuario->email,
            'password' => 'Password123',
        ]);

        $responseLogin->assertRedirectToRoute('site.perfil');

        $this->assertAuthenticated();
    }

    public function testNaoPodeLogarComSenhaAntiga(): void
    {
        $usuario = $this->getUsuario();
        $response = $this->actingAs($usuario)
            ->post('/perfil/salvar', [
                'nome' => 'Nome alterado',
                'email' => $usuario->email,
                'cpf_cnpj' => $usuario->cpf,
                'celular' => $usuario->celular,
                'password' => 'Password123',
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('site.perfil');

        Auth::logout();

        $this->assertGuest();

        $responseLogin = $this->post('/entrar', [
            'email_cpf_cnpj' => $usuario->email,
            'password' => 'Password',
        ]);

        $responseLogin->assertInvalid('email');

        $this->assertGuest();
    }
}
