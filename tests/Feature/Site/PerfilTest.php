<?php

namespace Tests\Feature\Site;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Illuminate\Support\Str;
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

    public function testPodeAlterarDadosSemSenha(): void
    {
        $usuario = $this->getUsuario();
        $response = $this->actingAs($usuario)
            ->post('/perfil/atualizar', [
                'nome' => 'Nome alterado',
                'email' => 'teste@exemple.com',
                'cpf_cnpj' => $usuario->cpf,
                'celular' => $usuario->celular,
                'password' => '',
                'password_confirmation' => '',
            ]);
        $response->assertRedirectToRoute('site.perfil');
    }

    public function testPodeAlterarDadosComSenha(): void
    {
        $usuario = $this->getUsuario();
        $novaSenha = Str::random(25);
        $response = $this->actingAs($usuario)
            ->post('/perfil/atualizar', [
                'nome' => 'Nome alterado',
                'email' => 'teste@exemple.com',
                'cpf_cnpj' => $usuario->cpf,
                'celular' => $usuario->celular,
                'password' => $novaSenha,
                'password_confirmation' => $novaSenha,
            ]);
        $response->assertRedirectToRoute('site.perfil');
    }

    public function testNaoPodeAlterarDadosComSenhaDiferenteDaConfirmacao(): void
    {
        $usuario = $this->getUsuario();
        $response = $this->actingAs($usuario)
            ->post('/perfil/atualizar', [
                'nome' => 'Nome alterado',
                'email' => 'teste@exemple.com',
                'cpf_cnpj' => $usuario->cpf,
                'celular' => $usuario->celular,
                'password' => Str::random(25),
                'password_confirmation' => Str::random(25),
            ]);

        $response->assertInvalid('password');
    }

    public function testNaoPodeAlterarDadosComSenhaSemConfirmacao(): void
    {
        $usuario = $this->getUsuario();
        $response = $this->actingAs($usuario)
            ->post('/perfil/atualizar', [
                'nome' => 'Nome alterado',
                'email' => 'teste@exemple.com',
                'cpf_cnpj' => $usuario->cpf,
                'celular' => $usuario->celular,
                'password' => Str::random(25),
            ]);

        $response->assertInvalid('password');
    }
}
