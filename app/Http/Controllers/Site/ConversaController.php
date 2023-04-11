<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Equipamentos\Conversa\EnviarMensagemRequest;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Conversas\EquipamentoConversa;
use App\Models\Equipamentos\Conversas\Mensagem;
use App\Services\Equipamentos\Conversa\ConversaService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ConversaController extends Controller
{
    private int $mensagensPorPagina;

    private int $mensagensTempoExcluirSecs;

    public function __construct(
        public ConversaService $conversaService
    ) {
        $this->mensagensPorPagina = config('equipamentos.mensagens_por_pagina');
        $this->mensagensTempoExcluirSecs = config('equipamentos.mensagens_tempo_excluir_secs');
    }

    public function conversaEquipamento(int $equipamentoId)
    {
        $equipamento = Equipamento::findOrFail($equipamentoId);

        if ($equipamento->usuario_id === Auth::id()) {
            $conversas = $equipamento->conversas()->with([
                'usuario',
                'visualizacao' => fn ($query) => $query->where('usuario_id', Auth::id()),
            ])->orderBy('updated_at', 'desc')->paginate();

            return Inertia::render('Site/Equipamento/Conversa/Conversas', compact(['equipamento', 'conversas']));
        }

        $conversa = EquipamentoConversa::firstOrCreate([
            'equipamento_id' => $equipamento->id,
            'usuario_id' => Auth::id(),
        ]);

        if ($conversa->wasRecentlyCreated) {
            $this->conversaService->criarVisualizacoes($conversa);
        }

        return redirect()->route('site.conversa', $conversa->id);
    }

    public function conversa(int $conversaId)
    {
        $usuarioId = Auth::id();
        $conversa = EquipamentoConversa::findOrFail($conversaId);
        $conversa->load('equipamento');
        $mensagensTempoExcluir = $this->mensagensTempoExcluirSecs;

        $conversa->visualizacao = $conversa->visualizacao()->where('usuario_id', $usuarioId)->first();

        $mensagensAnteriores = $conversa->mensagens()
            ->where('id', '<=', $conversa->visualizacao->ultima_mensagem_id)
            ->latest('id')
            ->take($this->mensagensPorPagina)
            ->get();

        $mensagensProximas = $conversa->mensagens()
            ->where('id', '>', $conversa->visualizacao->ultima_mensagem_id)
            ->get();

        $conversa->mensagens = collect([$mensagensAnteriores, $mensagensProximas])->collapse()->sortBy('id')->values();

        return Inertia::render(
            'Site/Equipamento/Conversa/Conversa',
            compact('conversa', 'usuarioId', 'mensagensTempoExcluir')
        );
    }

    public function enviar(EnviarMensagemRequest $request, int $id)
    {
        $request->enviar();
        $mensagem = new Mensagem();
        DB::transaction(function () use ($request, $id, $mensagem) {
            $conversa = EquipamentoConversa::findOrFail($id);
            $mensagem->equipamento_conversa_id = $conversa->id;
            $mensagem->usuario_id = Auth::id();
            $mensagem->mensagem = $request->input('mensagem');
            $mensagem->save();

            $visualizacao = $conversa->visualizacao()->where('usuario_id', Auth::id())->first();
            $visualizacao->ultima_mensagem_id = $mensagem->id;
            $visualizacao->save();

            $this->conversaService->processarEnvioMensagem($mensagem);
        });
        return response()->json($mensagem);
    }

    public function mensagensAnteriores(int $idConversa, int $id)
    {
        $conversa = EquipamentoConversa::findOrFail($idConversa);
        $query = $conversa->mensagens()->where('id', '<', $id);

        return response()->json($this->retornarMensagens($query));
    }

    public function mensagensPosteriores(int $idConversa, int $id)
    {
        $conversa = EquipamentoConversa::findOrFail($idConversa);
        $query = $conversa->mensagens()->where('id', '>', $id);

        return response()->json($this->retornarMensagens($query));
    }

    public function retornarMensagens($query): array
    {
        $retorno = [];
        $retorno['mais'] = $query->count() > 20;
        $retorno['mensagens'] = $query
            ->latest('id')
            ->take($this->mensagensPorPagina)
            ->get()
            ->sortBy('id')
            ->values();

        return $retorno;
    }

    public function visualizacao(int $idConversa, int $id)
    {
        $conversa = EquipamentoConversa::findOrFail($idConversa);
        $mensagem = $conversa->mensagens()->findOrFail($id);
        $visualizacao = $conversa->visualizacao()->where('usuario_id', Auth::id())->first();

        if ($mensagem->id > $visualizacao->ultima_mensagem_id) {
            $visualizacao->ultima_mensagem_id = $mensagem->id;
            $visualizacao->save();
            $this->conversaService->processarVisualizacao($conversa);
        }
    }

    public function excluirMensagem(int $idConversa, int $id)
    {
        $mensagem = Mensagem::where('equipamento_conversa_id', $idConversa)->findOrFail($id);
        $mensagem->delete();
        $this->conversaService->processarExclusaoMensagem($mensagem);

        return response()->json('ok');
    }
}
