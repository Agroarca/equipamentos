<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Http\Requests\Conversa\EnviarMensagemRequest;
use App\Models\Equipamentos\Conversas\EquipamentoConversa;
use App\Models\Equipamentos\Conversas\Mensagem;
use App\Models\Equipamentos\Equipamento;
use App\Services\Conversa\ConversaService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ConversaController extends Controller
{
    private $mensagensPorPagina;

    public function __construct(
        public ConversaService $conversaService
    ) {
        $this->mensagensPorPagina = config('equipamentos.mensagens_por_pagina');
    }

    public function conversaEquipamento($equipamento_id)
    {
        $equipamento = Equipamento::findOrFail($equipamento_id);

        if ($equipamento->usuario_id == Auth::id()) {
            $conversas = $equipamento->conversas()->with([
                'usuario',
                'visualizacao' => fn ($query) => $query->where('usuario_id', Auth::id()),
            ])->orderBy('updated_at', 'desc')->paginate();

            return Inertia::render('Site/Conversa/Conversas', compact(['equipamento', 'conversas']));
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

    public function conversa($conversaId)
    {
        $usuario_id = Auth::id();
        $conversa = EquipamentoConversa::findOrFail($conversaId);
        $conversa->load('equipamento');

        $conversa->visualizacao = $conversa->visualizacao()->where('usuario_id', $usuario_id)->first();

        $mensagensAnteriores = $conversa->mensagens()->where('id', '<=', $conversa->visualizacao->ultima_mensagem_id)->latest('id')->take($this->mensagensPorPagina)->get();
        $mensagensProximas = $conversa->mensagens()->where('id', '>', $conversa->visualizacao->ultima_mensagem_id)->get();
        $conversa->mensagens = collect([$mensagensAnteriores, $mensagensProximas])->collapse()->sortBy('id')->values();

        return Inertia::render('Site/Conversa/Conversa', compact('conversa', 'usuario_id'));
    }

    public function enviar(EnviarMensagemRequest $request, $id)
    {
        DB::transaction(function () use ($request, $id) {
            $conversa = EquipamentoConversa::findOrFail($id);
            $mensagem = new Mensagem();
            $mensagem->equipamento_conversa_id = $conversa->id;
            $mensagem->usuario_id = Auth::id();
            $mensagem->mensagem = $request->input('mensagem');
            $mensagem->save();

            $visualizacao = $conversa->visualizacao()->where('usuario_id', Auth::id())->first();
            $visualizacao->ultima_mensagem_id = $mensagem->id;
            $visualizacao->save();

            $this->conversaService->processarEnvioMensagem($mensagem);
        });
    }

    public function mensagensAnteriores($idConversa, $id)
    {
        $conversa = EquipamentoConversa::findOrFail($idConversa);
        $query = $conversa->mensagens()->where('id', '<', $id);

        return response()->json($this->retornarMensagens($query));
    }

    public function mensagensPosteriores($idConversa, $id)
    {
        $conversa = EquipamentoConversa::findOrFail($idConversa);
        $query = $conversa->mensagens()->where('id', '>', $id);

        return response()->json($this->retornarMensagens($query));
    }

    public function retornarMensagens($query)
    {
        $retorno = [];
        $retorno['mais'] = $query->count() > 20;
        $retorno['mensagens'] = $query->latest('id')->take($this->mensagensPorPagina)->get()->sortBy('id')->values();

        return $retorno;
    }

    public function visualizacao($idConversa, $id)
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
}
