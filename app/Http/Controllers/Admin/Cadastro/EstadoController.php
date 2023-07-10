<?php

namespace App\Http\Controllers\Admin\Cadastro;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Cadastro\EstadoRequest;
use App\Models\Cadastro\Estado;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;
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

    public function salvar(EstadoRequest $request): mixed
    {
        Gate::authorize('criar', Estado::class);
        Estado::create($request->all());
        return redirect()->route('admin.estados');
    }

    public function editar(Estado $estado): mixed
    {
        Gate::authorize('editar', $estado);
        return Inertia::render('Admin/Cadastro/Estado/Editar', compact('estado'));
    }

    public function atualizar(EstadoRequest $request, Estado $estado): mixed
    {
        Gate::authorize('editar', $estado);
        $estado->update($request->all());
        return redirect()->route('admin.estados');
    }

    public function excluir(Estado $estado): mixed
    {
        Gate::authorize('excluir', $estado);
        $estado->delete();
        return redirect()->route('admin.estados');
    }
}
