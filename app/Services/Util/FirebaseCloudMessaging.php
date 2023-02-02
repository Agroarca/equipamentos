<?php

namespace App\Services\Util;

use App\Models\Notificacoes\Notificacao;
use App\Models\Usuario;
use Google\Auth\ApplicationDefaultCredentials;
use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;
use Illuminate\Support\Facades\Log;

class FirebaseCloudMessaging
{
    public function enviarNotificacao(Usuario $usuario, Notificacao $notificacao)
    {
        $tokens = [];

        $link = route('site.notificacao', [$notificacao->id]);
        foreach ($usuario->tokens as $token) {
            $this->enviarMensagem($token->token, $notificacao->titulo, $notificacao->texto, $link);
        }
    }

    function montarCliente()
    {
        $middleware  = ApplicationDefaultCredentials::getMiddleware(['https://www.googleapis.com/auth/firebase.messaging']);
        $stack = HandlerStack::create();
        $stack->push($middleware);

        $client = new Client([
            'auth' => 'google_auth',
            'handler' => $stack
        ]);

        return $client;
    }

    function enviarMensagem($token, $titulo, $mensagem, $link = null)
    {

        $data = [
            'json' => [
                'message' => [
                    'token' => $token,
                    'notification' => [
                        'title' => $titulo,
                        'body' => $mensagem,
                    ]
                ]
            ]
        ];
        try {
            Log::error('data:');
            Log::error($data);
            $this->montarCliente()->post('https://fcm.googleapis.com/v1/projects/agroarca-equipamentos/messages:send', $data);
        } catch (\GuzzleHttp\Exception\RequestException $ex) {
            Log::error('response:');
            Log::error($ex->getResponse()?->getBody()?->getContents());
            throw $ex;
        }
    }
}
