<?php

namespace App\Services\Notificacoes;

use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Conversas\EquipamentoConversa;
use App\Models\Equipamentos\Conversas\Visualizacao;
use App\Models\Notificacoes\Equipamentos\NotificacaoConversaEquipamento;
use App\Models\Usuario;
use Illuminate\Support\Facades\DB;
use App\Models\Notificacoes\Notificacao;
use App\Notifications\Notificacao as NotificationsNotificacao;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Str;

class NotificacaoConversaService
{
    private string $visualizacaoTable;

    private string $conversasTable;

    private string $notificacaoConvEquipTable;

    private string $notificacaoTable;

    /**
     * Construtor do Service.
     */
    public function __construct()
    {
        $this->visualizacaoTable = app(Visualizacao::class)->getTable();
        $this->conversasTable = app(EquipamentoConversa::class)->getTable();
        $this->notificacaoConvEquipTable = app(NotificacaoConversaEquipamento::class)->getTable();
        $this->notificacaoTable = app(Notificacao::class)->getTable();
    }

    /**
     * Envia a notificação de conversa.
     */
    public function enviarNotificacaoMensagem(Equipamento $equipamento, Usuario $usuario): void
    {
        DB::transaction(function () use ($equipamento, $usuario): void {
            $notificacao = $this->retornarNotificacao($equipamento, $usuario);

            if ($notificacao !== null) {
                $this->atualizarNotificacao($notificacao->notificacao, $equipamento, $usuario);
            } else {
                $this->criarNotificacao($equipamento, $usuario);
            }

            Notification::send($usuario, new NotificationsNotificacao($notificacao->notificacao));
        });
    }

    /**
     * Retorna a notificação de um equipamento e usuario.
     */
    private function retornarNotificacao(Equipamento $equipamento, Usuario $usuario): NotificacaoConversaEquipamento
    {
        return NotificacaoConversaEquipamento::where('equipamento_id', $equipamento->id)
            ->join(
                $this->notificacaoTable,
                "$this->notificacaoTable.tipo_id",
                '=',
                "$this->notificacaoConvEquipTable.id"
            )->where('usuario_id', $usuario->id)->first();
    }

    /**
     * Retorna a query para buscar as notificações de conversas.
     */
    private function queryVisualizacao(Equipamento $equipamento, Usuario $usuario): mixed
    {
        return $equipamento
            ->conversas()
            ->join($this->visualizacaoTable, 'equipamento_conversa_id', '=', "$this->conversasTable .id")
            ->where("$this->visualizacaoTable.usuario_id", $usuario->id);
    }

    /**
     * Cria a notificação de conversa.
     */
    private function criarNotificacao(Equipamento $equipamento, Usuario $usuario): NotificacaoConversaEquipamento
    {
        $notificacao = $this->criarNotificacaoBase($equipamento, $usuario);

        $notificacaoConversa = NotificacaoConversaEquipamento::create([
            'equipamento_id' => $equipamento->id,
        ]);

        $notificacaoConversa->notificacao()->save($notificacao);
        return $notificacaoConversa;
    }

    /**
     * Cria a notificação base
     */
    private function criarNotificacaoBase(Equipamento $equipamento, Usuario $usuario): Notificacao
    {
        return new Notificacao([
            'usuario_id' => $usuario->id,
            'texto' => $this->getMensagemNotificacao($equipamento, $usuario),
            'titulo' => "Nova mensagem em $equipamento->titulo!",
        ]);
    }

    /**
     * Retorna a mensagem de notificação.
     */
    private function getMensagemNotificacao(Equipamento $equipamento, Usuario $usuario): string {
        $query = $this->queryVisualizacao($equipamento, $usuario);
        $tituloEquipamento = $equipamento->titulo;

        $qtdConversas = $query->count("$this->conversasTable.id");
        $msgsNaoVisualizadas = $query->sum("$this->visualizacaoTable.mensagens_nao_visualizadas");

        $nova = Str::of('nova')->plural($msgsNaoVisualizadas);
        $mensagem = Str::of('mensagem')->plural($msgsNaoVisualizadas);
        $conversa = Str::of('conversa')->plural($qtdConversas);

        return "Você tem $msgsNaoVisualizadas $nova $mensagem em $qtdConversas $conversa de $tituloEquipamento.";
    }

    /**
     * Atualiza a notificação
     */
    private function atualizarNotificacao(Notificacao $notificacao, Equipamento $equipamento, Usuario $usuario): void
    {
        $notificacao->texto = $this->getMensagemNotificacao($equipamento, $usuario);
        $notificacao->titulo = "Nova mensagem em $equipamento->titulo!";
        $notificacao->save();
    }
}
