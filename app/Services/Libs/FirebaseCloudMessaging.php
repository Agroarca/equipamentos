<?php

//phpcs:disable SlevomatCodingStandard.Functions.FunctionLength.FunctionLength

namespace App\Services\Libs;

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
        foreach ($usuario->tokens as $token) {
            $this->enviarRequest($token->token, $notificacao);
        }
    }

    /**
     * Monta o cliente HTTP com a autorização do google.
     */
    private function montarCliente(): Client
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
     */
    private function enviarRequest(string $token, Notificacao $notificacao): void
    {
        try {
            $data = $this->getJsonNotificacao($token, $notificacao);
            $this->montarCliente()->post(
                'https://fcm.googleapis.com/v1/projects/agroarca-equipamentos/messages:send',
                $data
            );
        } catch (RequestException $ex) {
            Log::error('Erro ao enviar notificação para o FCM: ', [
                'data' => $data,
                'response' => $ex->getResponse()?->getBody()?->getContents(),
            ]);
        }
    }

    /**
     * Monta o json para enviar a notificação.
     */
    private function getJsonNotificacao(string $token, Notificacao $notificacao): array
    {
        return [
            'json' => [
                'message' => [
                    'token' => $token,
                    'notification' => [
                        'title' => $notificacao->titulo,
                        'body' => $notificacao->texto,
                    ],
                    'android' => [
                        'notification' => [
                            'click_action' => route('site.notificacao', [$notificacao->id]),
                        ],
                    ],
                    'apns' => [
                        'payload' => [
                            'aps' => [
                                'category' => 'NOTIFICACAO',
                            ],
                        ],
                    ],
                    'webpush' => [
                        'fcm_options' => [
                            'link' => route('site.notificacao', [$notificacao->id], true),
                        ],
                    ]
                ],
            ],
        ];
    }
}
