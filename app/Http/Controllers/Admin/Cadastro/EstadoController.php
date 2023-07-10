<?php

namespace App\Http\Controllers\Admin\Cadastro;

use App\Http\Controllers\Controller;
use App\Models\Cadastro\Estado;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EstadoController extends Controller
{
    public function inicio(): mixed
    {
        $estados = Estado::paginate();
        return Inertia::render('Admin/Cadastro/Estado/Inicio', compact('estados'));
    }

    public function criar(): mixed
    {
        return Inertia::render('Admin/Cadastro/Estado/Criar');
    }

    public function salvar(Request $request): mixed
    {
        Estado::create($request->all());
        return redirect()->route('admin.estados');
    }

    public function editar(Estado $estado): mixed
    {
        return Inertia::render('Admin/Cadastro/Estado/Editar', compact('estado'));
    }

    public function atualizar(Request $request, Estado $estado): mixed
    {
        $estado->update($request->all());
        return redirect()->route('admin.estados');
    }

    public function excluir(Estado $estado): mixed
    {
        $estado->delete();
        return redirect()->route('admin.estados');
    }
}
