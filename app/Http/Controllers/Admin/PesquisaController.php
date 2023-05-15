<?php

namespace App\Http\Controllers\Admin;

use App\Enums\Usuario\TipoUsuario;
use App\Http\Controllers\Controller;
use App\Models\Usuario;
use Illuminate\Http\Request;

class PesquisaController extends Controller
{
    public function usuarioAdmin(Request $request): mixed
    {
        $usuarios = Usuario::select('id', 'nome as texto')
            ->where('tipo_usuario', TipoUsuario::Admin->value)
            ->whereFullText('nome', $request->input('termo'))
            ->orWhere('nome', 'like', '%' . $request->input('termo') . '%')
            ->orWhere('email', 'like', '%' . $request->input('termo') . '%')
            ->orWhere('cpf', 'like', '%' . $request->input('termo') . '%')
            ->orWhere('cnpj', 'like', '%' . $request->input('termo') . '%')
            ->take(10)
            ->get();

        return response()->json($usuarios);
    }
}
