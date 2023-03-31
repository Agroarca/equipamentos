<?php

namespace App\Http\Controllers\Site;

use App\Enums\Equipamentos\Cadastro\StatusEquipamento;
use App\Http\Controllers\Controller;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Conversas\Visualizacao;
use App\Services\Equipamentos\EquipamentoCaracteristicaService;
use Illuminate\Support\Facades\Auth;
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

    public function equipamentosPerfil()
    {
        $equipamentos = Equipamento::addSelect([
            'mensagens_nao_visualizadas' => Visualizacao::selectRaw('sum(mensagens_nao_visualizadas)')
                ->join('equipamento_conversas', 'equipamento_conversa_id', '=', 'equipamento_conversas.id')
                ->whereColumn('equipamento_conversa_visualizacao.usuario_id', 'equipamentos.usuario_id')
                ->whereColumn('equipamento_id', 'equipamentos.id'),
        ])
            ->with('modelo', 'modelo.marca', 'imagens')
            ->where('usuario_id', Auth::user()->id)
            ->paginate(10);


        $status = StatusEquipamento::toArray();

        return Inertia::render('Site/Perfil/Equipamentos', compact('equipamentos', 'status'));
    }

    public function equipamentoReprovado(int $id)
    {
        $equipamento = Equipamento::where('usuario_id', Auth::user()->id)
            ->where('status', StatusEquipamento::Reprovado)
            ->findOrFail($id);

        return Inertia::render('Site/Equipamento/Reprovado', compact('equipamento'));
    }
}
