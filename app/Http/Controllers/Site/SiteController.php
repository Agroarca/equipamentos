<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Services\Equipamentos\EquipamentoCaracteristicaService;
use Inertia\Inertia;

class SiteController extends Controller
{
    public function __construct(
        private EquipamentoCaracteristicaService $equipCaracService
    ) {
    }

    public function inicio()
    {
        return Inertia::render('Site/Inicio');
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

        return Inertia::render('Site/Equipamento/Cadastrar/Novo', compact('categorias'));
    }
}
