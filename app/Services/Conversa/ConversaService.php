<?php

namespace App\Services\Conversa;

use App\Models\Equipamentos\Conversas\EquipamentoConversa;
use App\Models\Equipamentos\Conversas\Mensagem;
use App\Models\Equipamentos\Conversas\Visualizacao;
use App\Models\Notificacoes\Notificacao as NotificacoesModel;
use App\Models\Notificacoes\NotificacaoConversa;
use App\Models\Usuario;
use App\Notifications\MensagemWebsocket;
use App\Notifications\Notificacao;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Str;

/**
 * Classe responsável por processar as mensagens e visualizações de conversas.
 */
class ConversaService
{
    /**
     * Processa o envio de uma mensagem para o sistema.
     */
    public function processarEnvioMensagem(Mensagem $mensagem): void
    {
        DB::transaction(function () use ($mensagem): void {
            Visualizacao::where('equipamento_conversa_id', $mensagem->equipamento_conversa_id)
                ->where('usuario_id', $mensagem->usuario_id)
                ->update(['ultima_mensagem_id' => $mensagem->id]);

            $this->contarMensagensNaoVisualizadas($mensagem->equipamentoConversa);

            $usuarios = [
                $mensagem->equipamentoConversa->usuario,
                $mensagem->equipamentoConversa->equipamento->usuario,
            ];

            foreach ($usuarios as $usuario) {
                Notification::send($usuario, new MensagemWebsocket($mensagem));

                if ($usuario->id != $mensagem->usuario_id) {
                    $this->criarNotificacaoMensagem($mensagem, $usuario);
                }
            }
        });
    }

    /**
     * Processa a visualização de uma conversa.
     */
    public function processarVisualizacao(EquipamentoConversa $conversa): void
    {
        $this->contarMensagensNaoVisualizadas($conversa);
    }

    /**
     * Conta a quantidade de mensagens não visualizadas para cada usuario em uma conversa.
     */
    private function contarMensagensNaoVisualizadas(EquipamentoConversa $conversa): void
    {
        DB::statement('update equipamento_conversa_visualizacao visualizacao
                set visualizacao.mensagens_nao_visualizadas = (
                    select count(*) from equipamento_conversa_mensagens mensagens
                    where mensagens.id > visualizacao.ultima_mensagem_id
                    and mensagens.equipamento_conversa_id = ?)
                where visualizacao.equipamento_conversa_id = ?', [$conversa->id, $conversa->id]);
    }

    /**
     * Cria as visualizações de uma conversa.
     */
    public function criarVisualizacoes(EquipamentoConversa $conversa): void
    {
        $conversa->visualizacao()->create([
            'usuario_id' => $conversa->usuario_id,
            'ultima_mensagem_id' => 0,
        ]);

        $conversa->visualizacao()->create([
            'usuario_id' => $conversa->equipamento->usuario_id,
            'ultima_mensagem_id' => 0,
        ]);
    }

    /**
     * Cria e envia uma notificação de mensagem.
     */
    private function criarNotificacaoMensagem(Mensagem $mensagem, Usuario $usuario): void
    {
        DB::transaction(function () use ($mensagem, $usuario): void {
            $visualizacao = $mensagem->equipamentoConversa->visualizacao()->where('usuario_id', $usuario->id)->first();
            $naoVisualizadas = $visualizacao->mensagens_nao_visualizadas;

            $nova = Str::of('nova')->plural($naoVisualizadas);
            $mensagem = Str::of('mensagem')->plural($naoVisualizadas);
            $titulo = $mensagem->equipamentoConversa->equipamento->titulo;
            $texto = "Você tem $naoVisualizadas $nova $mensagem em $titulo";

            $conversa = NotificacaoConversa::create([
                'conversa_id' => $mensagem->equipamento_conversa_id,
            ]);

            $notificacao = new NotificacoesModel([
                'usuario_id' => $usuario->id,
                'texto' => $texto,
                'titulo' => 'Nova Mensagem!',
            ]);

            $conversa->notificacao()->save($notificacao);

            Notification::send($usuario, new Notificacao($notificacao));
        });
    }
}
