<?php

namespace Tests\Feature\Autenticacao;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class SairTest extends TestCase
{
    use RefreshDatabase;

    public function testSair(): void
    {
        $usuario = $this->getUsuario();
        Auth::login($usuario);
        $this->actingAs($this->getUsuario());

        $response = $this->get('/sair');

        $this->assertGuest();
        $response->assertRedirect('/');
    }
}
