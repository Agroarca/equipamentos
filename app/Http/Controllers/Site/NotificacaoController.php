<?php

namespace App\Http\Controllers\Site;

use App\Enums\Notificacoes\StatusNotificacao;
use App\Http\Controllers\Controller;
use App\Models\Notificacoes\Notificacao;
use App\Models\Notificacoes\UsuarioTokenFCM;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class NotificacaoController extends Controller
{
    public function inicio()
    {
        $notificacoes = Notificacao::where('usuario_id', Auth::id())
            ->with('tipo')
            ->orderBy('updated_at', 'desc')
            ->paginate();

        return Inertia::render('Site/Notificacao/Inicio', compact('notificacoes'));
    }

    public function notificacao(Notificacao $notificacao)
    {
        $notificacao->update(['status' => StatusNotificacao::Visualizado]);
        return response()->redirectTo($notificacao->tipo->url);
    }

    public function salvarToken(Request $request)
    {
        UsuarioTokenFCM::firstOrCreate([
            'usuario_id' => Auth::id(),
            'token' => $request->input('token'),
        ]);

        return response()->json(['status' => 'OK']);
    }
}
