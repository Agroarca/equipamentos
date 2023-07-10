<?php

namespace App\Http\Controllers\Admin\Cadastro;

use App\Http\Controllers\Controller;
use App\Models\Cadastro\Cidade;
use App\Models\Cadastro\Estado;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CidadeController extends Controller
{
    public function inicio(): mixed
    {
        $cidades = Cidade::with('estado')->paginate();
        return Inertia::render('Admin/Cadastro/Cidade/Inicio', compact('cidades'));
    }

    public function criar(): mixed
    {
        $estados = Estado::all();
        return Inertia::render('Admin/Cadastro/Cidade/Criar', compact('estados'));
    }

    public function salvar(Request $request): mixed
    {
        Cidade::create($request->all());
        return redirect()->route('admin.cidades');
    }

    public function editar(Cidade $cidade): mixed
    {
        $estados = Estado::all();
        return Inertia::render('Admin/Cadastro/Cidade/Editar', compact('cidade', 'estados'));
    }

    public function atualizar(Request $request, Cidade $cidade): mixed
    {
        $cidade->update($request->all());
        return redirect()->route('admin.cidades');
    }

    public function excluir(Cidade $cidade): mixed
    {
        $cidade->delete();
        return redirect()->route('admin.cidades');
    }
}
