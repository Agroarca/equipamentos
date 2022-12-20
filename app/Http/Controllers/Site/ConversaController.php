<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Http\Requests\Conversa\EnviarMensagemRequest;
use App\Models\Equipamentos\Conversas\EquipamentoConversa;
use App\Models\Equipamentos\Conversas\Mensagem;
use App\Models\Equipamentos\Equipamento;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ConversaController extends Controller
{
    public function conversaEquipamento($equipamento_id)
    {
        $equipamento = Equipamento::findOrFail($equipamento_id);
        $conversa = EquipamentoConversa::firstOrCreate([
            'equipamento_id' => $equipamento->id,
            'usuario_id' => Auth::id()
        ]);

        return redirect()->route('site.conversa', $conversa->id);
    }

    public function conversa($conversaId)
    {
        $conversa = EquipamentoConversa::findOrFail($conversaId);
        $conversa->load('equipamento');
        $mensagens = $conversa->mensagens()->latest()->take(20)->get();

        return Inertia::render('Site/Conversa/Conversa', compact('conversa', 'mensagens'));
    }

    public function enviar(EnviarMensagemRequest $request, $id)
    {
        $conversa = EquipamentoConversa::findOrFail($id);
        $mensagem = new Mensagem();
        $mensagem->equipamento_conversa_id = $conversa->id;
        $mensagem->usuario_id = Auth::id();
        $mensagem->mensagem = $request->input('mensagem');
        $mensagem->save();

        return redirect()->route('site.conversa', $conversa->id);
    }
}
