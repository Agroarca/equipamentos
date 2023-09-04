<?php

namespace App\Http\Controllers\Admin\Equipamentos\Cadastro;

use App\Http\Controllers\Controller;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Marca;
use App\Models\Equipamentos\Cadastro\MarcaCategoria;
use Illuminate\Http\Request;

class MarcaCategoriaController extends Controller
{
    public function adicionar(Request $request, Marca $marca): mixed
    {
        MarcaCategoria::firstOrCreate([
            'marca_id' => $marca->id,
            'categoria_id' => $request->categoria_id,
        ]);

        return redirect()->route('admin.marcas.editar', $marca->id);
    }

    public function remover(Marca $marca, Categoria $categoria): mixed
    {
        MarcaCategoria::where('marca_id', $marca->id)
            ->where('categoria_id', $categoria->id)
            ->delete();

        return redirect()->route('admin.marcas.editar', $marca->id);
    }
}
