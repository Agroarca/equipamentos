<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Notificacoes\UsuarioTokenFCM;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotificacaoController extends Controller
{
    public function notificacao($id)
    {
        abort(403, 'Acesso negado');
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
