<?php

//phpcs:disable SlevomatCodingStandard.Functions.FunctionLength.FunctionLength

namespace App\Services\Util;

use App\Models\Notificacoes\Notificacao;
use App\Models\Usuario;
use Google\Auth\ApplicationDefaultCredentials;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\HandlerStack;
use Illuminate\Support\Facades\Log;

/**
 * Classe responsável por enviar notificações via Firebase Cloud Messaging.
 */
class FirebaseCloudMessaging
{
    /**
     * Envia uma notificação para um usuário.
     */
    public function enviarNotificacao(Usuario $usuario, Notificacao $notificacao): void
    {
        $link = route('site.notificacao', [$notificacao->id]);
        foreach ($usuario->tokens as $token) {
            $this->enviarMensagem($token->token, $notificacao->titulo, $notificacao->texto, $link);
        }
    }

    /**
     * Monta o cliente HTTP com a autorização do google.
     */
    public function montarCliente(): Client
    {
        $middleware = ApplicationDefaultCredentials::getMiddleware(
            ['https://www.googleapis.com/auth/firebase.messaging']
        );
        $stack = HandlerStack::create();
        $stack->push($middleware);

        return new Client([
            'auth' => 'google_auth',
            'handler' => $stack,
        ]);
    }

    /**
     * Envia uma mensagem para um token.
     *
     * @throws RequestException Erro ao enviar a mensagem para o FCM.
     */
    public function enviarMensagem(string $token, string $titulo, string $mensagem): void
    {
        $data = [
            'json' => [
                'message' => [
                    'token' => $token,
                    'notification' => [
                        'title' => $titulo,
                        'body' => $mensagem,
                    ],
                ],
            ],
        ];
        try {
            Log::error('data:');
            Log::error($data);
            $this->montarCliente()->post(
                'https://fcm.googleapis.com/v1/projects/agroarca-equipamentos/messages:send',
                $data
            );
        } catch (RequestException $ex) {
            Log::error('response:');
            Log::error($ex->getResponse()?->getBody()?->getContents());
            throw $ex;
        }
    }
}
