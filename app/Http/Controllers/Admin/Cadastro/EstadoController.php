<?php

namespace App\Http\Controllers\Admin\Cadastro;

use App\Http\Controllers\Controller;
use App\Models\Cadastro\Estado;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class EstadoController extends Controller
{
    public function inicio(): mixed
    {
        Gate::authorize('ver', Estado::class);
        $estados = Estado::paginate();
        return Inertia::render('Admin/Cadastro/Estado/Inicio', compact('estados'));
    }

    public function criar(): mixed
    {
        Gate::authorize('criar', Estado::class);
        return Inertia::render('Admin/Cadastro/Estado/Criar');
    }

    public function salvar(Request $request): mixed
    {
        Gate::authorize('criar', Estado::class);
        Estado::create($request->all());
        return redirect()->route('admin.estados');
    }

    public function editar(Estado $estado): mixed
    {
        Gate::authorize('editar', Estado::class);
        return Inertia::render('Admin/Cadastro/Estado/Editar', compact('estado'));
    }

    public function atualizar(Request $request, Estado $estado): mixed
    {
        Gate::authorize('editar', Estado::class);
        $estado->update($request->all());
        return redirect()->route('admin.estados');
    }

    public function excluir(Estado $estado): mixed
    {
        Gate::authorize('excluir', Estado::class);
        $estado->delete();
        return redirect()->route('admin.estados');
    }
}
