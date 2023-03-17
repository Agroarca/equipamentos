<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\MarcaRequest;
use App\Models\Equipamentos\Marca;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MarcaController extends Controller
{
    public function inicio()
    {
        $marcas = Marca::paginate(10);

        return Inertia::render('Admin/Marca/Inicio', compact('marcas'));
    }

    public function criar()
    {
        return Inertia::render('Admin/Marca/Criar');
    }

    public function salvar(MarcaRequest $request)
    {
        Marca::create($request->all());

        return redirect()->route('admin.marcas');
    }

    public function editar($id)
    {
        $marca = Marca::findOrFail($id);

        return Inertia::render('Admin/Marca/Editar', compact('marca'));
    }

    public function atualizar(MarcaRequest $request, $id)
    {
        Marca::findOrFail($id)->update($request->all());

        return redirect()->route('admin.marcas');
    }

    public function excluir($id)
    {
        Marca::findOrFail($id)->delete();

        return redirect()->route('admin.marcas');
    }
    public function pesquisar(Request $request)
    {
        $marcas = Marca::select('id', 'nome as texto')
            ->whereFullText('nome', $request->input('termo'))
            ->orWhere('nome', 'like', '%' . $request->input('termo') . '%')
            ->take(10)
            ->get();

        return response()->json($marcas);
    }
}
