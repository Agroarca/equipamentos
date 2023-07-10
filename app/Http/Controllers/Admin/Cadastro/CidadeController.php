<?php

namespace App\Http\Controllers\Admin\Cadastro;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Cadastro\CidadeRequest;
use App\Models\Cadastro\Cidade;
use App\Models\Cadastro\Estado;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class CidadeController extends Controller
{
    public function inicio(): mixed
    {
        Gate::authorize('ver', Cidade::class);
        $cidades = Cidade::with('estado')->paginate();
        return Inertia::render('Admin/Cadastro/Cidade/Inicio', compact('cidades'));
    }

    public function criar(): mixed
    {
        Gate::authorize('criar', Cidade::class);
        $estados = Estado::all();
        return Inertia::render('Admin/Cadastro/Cidade/Criar', compact('estados'));
    }

    public function salvar(CidadeRequest $request): mixed
    {
        Gate::authorize('criar', Cidade::class);
        Cidade::create($request->all());
        return redirect()->route('admin.cidades');
    }

    public function editar(Cidade $cidade): mixed
    {
        Gate::authorize('editar', Cidade::class);
        $estados = Estado::all();
        return Inertia::render('Admin/Cadastro/Cidade/Editar', compact('cidade', 'estados'));
    }

    public function atualizar(CidadeRequest $request, Cidade $cidade): mixed
    {
        Gate::authorize('editar', Cidade::class);
        $cidade->update($request->all());
        return redirect()->route('admin.cidades');
    }

    public function excluir(Cidade $cidade): mixed
    {
        Gate::authorize('excluir', Cidade::class);
        $cidade->delete();
        return redirect()->route('admin.cidades');
    }
}
