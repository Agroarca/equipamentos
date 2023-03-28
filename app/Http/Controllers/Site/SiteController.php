<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Usuario;
use App\Services\Equipamentos\EquipamentoCaracteristicaService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class SiteController extends Controller
{
    public function __construct(
        private EquipamentoCaracteristicaService $equipCaracService
    ) {
    }

    public function inicio()
    {
        return Inertia::render('Inicio');
    }

    public function equipamento(int $id)
    {
        $equipamento = Equipamento::aprovado()->findOrFail($id);

        $equipamento->load([
            'caracteristicas',
            'caracteristicas.caracteristica',
            'caracteristicas.valor',
            'categoria',
            'modelo',
            'imagens',
        ]);

        return Inertia::render('Site/Equipamento/Inicio', compact('equipamento'));
    }

    public function cadastrarEquipamento()
    {
        $categorias = Categoria::all()->pluck('nome', 'id');

        return Inertia::render('Site/Equipamento/Cadastrar', compact('categorias'));
    }

    // public function perfil()
    // {
    //     $user = Auth::user()->makeVisible(['cpf', 'cnpj', 'celular'])->toArray();

    //     return Inertia::render('Site/Perfil/Perfil', compact('user'));
    // }

    // public function atualizarPerfil(RegisteredUserRequest $request)
    // {
    //     $user = Usuario::findOrFail(Auth::user()->id);

    //     $user->update($request->all());

    //     return Redirect::route('site.perfil');
    // }
}
