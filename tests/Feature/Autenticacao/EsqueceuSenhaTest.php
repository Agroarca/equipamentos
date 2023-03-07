<?php

namespace Tests\Feature\Autenticacao;

use App\Models\Usuario;
use Illuminate\Support\Facades\Notification;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class EsqueceuSenhaTest extends TestCase
{
    use RefreshDatabase;

    public function testEsqueceuSenha(): void
    {
        $response = $this->get('/forgot-password');
        $response->assertStatus(200);
    }

    public function testPodeReceberLinkReset()
    {
        Notification::fake();

        $user = Usuario::factory()->create();
        $this->post('/forgot-password', ['email' => $user->email]);

        Notification::assertSentTo($user, ResetPassword::class);
    }

    public function testPodeAcessarPaginaReset()
    {
        Notification::fake();

        $user = Usuario::factory()->create();
        $this->post('/forgot-password', ['email' => $user->email]);

        Notification::assertSentTo($user, ResetPassword::class, function ($notification) {
            $response = $this->get('/reset-password/' . $notification->token);

            $response->assertStatus(200);

            return true;
        });
    }

    public function testPodeResetarTokenValido()
    {
        Notification::fake();

        $user = Usuario::factory()->create();

        $this->post('/forgot-password', ['email' => $user->email]);

        Notification::assertSentTo($user, ResetPassword::class, function ($notification) use ($user) {
            $response = $this->post('/reset-password', [
                'token' => $notification->token,
                'email' => $user->email,
                'password' => 'password',
                'password_confirmation' => 'password',
            ]);

            $response->assertSessionHasNoErrors();

            return true;
        });
    }
}
