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
        $response = $this->get('/senha/recuperar');
        $response->assertStatus(200);
    }

    public function testPodeReceberLinkReset()
    {
        Notification::fake();

        $user = Usuario::factory()->create();
        $this->post('/senha/recuperar', ['email' => $user->email]);

        Notification::assertSentTo($user, ResetPassword::class);
    }

    public function testPodeAcessarPaginaReset()
    {
        Notification::fake();

        $user = Usuario::factory()->create();
        $this->post('/senha/recuperar', ['email' => $user->email]);

        Notification::assertSentTo($user, ResetPassword::class, function ($notification) {
            $response = $this->get('/senha/redefinir/' . $notification->token);

            $response->assertStatus(200);

            return true;
        });
    }

    public function testPodeResetarTokenValido()
    {
        Notification::fake();

        $user = Usuario::factory()->create();

        $this->post('/senha/recuperar', ['email' => $user->email]);

        Notification::assertSentTo($user, ResetPassword::class, function ($notification) use ($user) {
            $response = $this->post('/senha/redefinir', [
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
