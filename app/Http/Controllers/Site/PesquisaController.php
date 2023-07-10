<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Cadastro\Cidade;
use Illuminate\Http\Request;

class PesquisaController extends Controller
{
    public function cidade(Request $request)
    {
        $cidades = Cidade::whereFullText('nome', $request->input('termo'))
            ->orWhere('nome', 'like', '%' . $request->input('termo') . '%')
            ->take(10)
            ->get();

        $cidades = $cidades->map(function ($cidade) {
            return [
                'id' => $cidade->id,
                'texto' => $cidade->display_name,
            ];
        });

        return response()->json($cidades);
    }
}
