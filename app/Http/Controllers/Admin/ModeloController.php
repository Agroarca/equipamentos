<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ModeloRequest;
use App\Models\Equipamentos\Marca;
use App\Models\Equipamentos\Modelo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ModeloController extends Controller
{
    public function inicio()
    {
        $modelos = Modelo::with('marca')->paginate(10);

        return Inertia::render('Admin/Modelo/Inicio', compact('modelos'));
    }

    public function criar()
    {
        $marcas = Marca::all();

        return Inertia::render('Admin/Modelo/Criar', compact('marcas'));
    }

    public function salvar(ModeloRequest $request)
    {
        Modelo::create($request->all());

        return redirect()->route('admin.modelos');
    }

    public function editar($id)
    {
        $modelo = Modelo::findOrFail($id);
        $marcas = Marca::all();

        return Inertia::render('Admin/Modelo/Editar', compact('modelo', 'marcas'));
    }

    public function atualizar(ModeloRequest $request, $id)
    {
        Modelo::findOrFail($id)->update($request->all());

        return redirect()->route('admin.modelos');
    }

    public function excluir($id)
    {
        Modelo::findOrFail($id)->delete();

        return redirect()->route('admin.modelos');
    }

    public function pesquisar(Request $request)
    {
        $modelos = Modelo::select('id', 'nome as texto')->where('nome', 'like', '%' . $request->input('termo') . '%')->take(10)->get();

        return response()->json($modelos);
    }
}
