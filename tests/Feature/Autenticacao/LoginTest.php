<?php

namespace Tests\Feature\Autenticacao;

use App\Models\Usuario;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LoginTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $response = $this->get('/login');
        $response->assertStatus(200);
    }

    public function testePodeAutenticar(): void
    {
        $usuario = Usuario::factory()->create();

        $response = $this->post('/login', [
            'email' => $usuario->email,
            'password' => 'password',
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect(RouteServiceProvider::HOME);
    }

    public function testeAutenticarSenhaIncorreta(): void
    {
        $usuario = Usuario::factory()->create();

        $response = $this->post('/login', [
            'email' => $usuario->email,
            'password' => 'password-incorreto',
        ]);

        $this->assertGuest();
    }
}
