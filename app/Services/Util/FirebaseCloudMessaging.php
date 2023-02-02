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
        foreach ($usuario->tokens as $token) {
            $this->enviarMensagem($token, $notificacao->titulo, $notificacao->mensagem);
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

        try {
            $this->montarCliente()->post('https://fcm.googleapis.com/v1/projects/agroarca-equipamentos/messages:send', [
                'json' => [
                    'message' => [
                        'token' => $token,
                        'notification' => [
                            'title' => $titulo,
                            'body' => $mensagem,
                            'image' => null
                        ],
                        'fcm_options' => [
                            'link' => $link
                        ]
                    ]
                ]
            ]);
        } catch (\GuzzleHttp\Exception\RequestException $ex) {
            Log::error($ex->getResponse()?->getBody()?->getContents());
            throw $ex;
        }
    }
}