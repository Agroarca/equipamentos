<?php

namespace App\Http\Controllers\Admin;

use App\Enums\Cadastro\StatusEquipamento;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CaracteristicasValorRequest;
use App\Http\Requests\Admin\EquipamentoRequest;
use App\Http\Requests\Equipamento\EquipamentoImagemRequest;
use App\Models\Equipamentos\Categoria;
use App\Models\Equipamentos\Equipamento;
use App\Models\Equipamentos\EquipamentoImagem;
use App\Models\Equipamentos\Marca;
use App\Models\Equipamentos\Modelo;
use App\Services\Equipamentos\EquipamentoCaracteristicaService;
use App\Services\Util\HTMLPurifier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class EquipamentoController extends Controller
{
    public function __construct(
        private EquipamentoCaracteristicaService $equipCaracService
    ) {
    }

    public function inicio()
    {
        $equipamentos = Equipamento::withoutGlobalScope('aprovado')->with('categoria')->paginate(10);
        $statusEquipamentos = StatusEquipamento::toArray();
        return Inertia::render('Admin/Equipamento/Inicio', compact('equipamentos', 'statusEquipamentos'));
    }

    public function criar()
    {
        $categorias = Categoria::all()->pluck('nome', 'id');

        return Inertia::render('Admin/Equipamento/Criar', compact('categorias'));
    }

    public function salvar(EquipamentoRequest $request)
    {
        Equipamento::create([
            ...$request->all(),
            'usuario_id' => Auth::id(),
        ]);

        return redirect()->route('admin.equipamentos');
    }

    public function editar($id)
    {
        $equipamento = Equipamento::withoutGlobalScope('aprovado')->with([
            'categoria',
            'imagens',
            'modelo' => function ($query) {
                $query->withoutGlobalScope('aprovado');
            },
            'modelo.marca' => function ($query) {
                $query->withoutGlobalScope('aprovado');
            }
        ])->findOrFail($id);

        $caracteristicas = $this->equipCaracService->getCaracteristicasCategoria($equipamento->categoria_id);
        $statusEquipamentos = StatusEquipamento::toArray();
        foreach ($caracteristicas as $key => $caracteristica) {
            $equipCarac = $equipamento->caracteristicas()->firstwhere('caracteristica_id', $caracteristica->id);
            if (is_null($equipCarac) || is_null($equipCarac->valor)) {
                continue;
            }

            $caracteristicas[$key]->valor = $equipCarac->valor->valor;
        }

        return Inertia::render(
            'Admin/Equipamento/Editar',
            compact('equipamento', 'caracteristicas', 'statusEquipamentos')
        );
    }

    public function atualizar(EquipamentoRequest $request, $id)
    {
        $equipamento = Equipamento::withoutGlobalScope('aprovado')->findOrFail($id);
        $equipamento->update($request->all());

        return redirect()->route('admin.equipamentos.editar', $id);
    }

    public function atualizarDescricao(Request $request, $id)
    {
        $equipamento = Equipamento::withoutGlobalScope('aprovado')->findOrFail($id);
        $equipamento->descricao = HTMLPurifier::purify($request->input('descricao'));
        $equipamento->save();

        return redirect()->route('admin.equipamentos.editar', $id);
    }

    public function excluir($id)
    {
        Equipamento::withoutGlobalScope('aprovado')->findOrFail($id)->delete();

        return redirect()->route('admin.equipamentos');
    }

    public function salvarCaracteristicas(CaracteristicasValorRequest $request, $id)
    {
        $equipamento = Equipamento::withoutGlobalScope('aprovado')->findOrFail($id);
        $this->equipCaracService->salvarCaracteristicas($equipamento, $request->all());

        return redirect()->route('admin.equipamentos.editar', $id);
    }

    public function adicionarImagem(EquipamentoImagemRequest $request, $equipamentoId)
    {
        $equipamento = Equipamento::withoutGlobalScope('aprovado')->findOrFail($equipamentoId);

        $file = $request->file('imagem');
        $file->store(config('equipamentos.path_imagens'));

        $imagem = new EquipamentoImagem();
        $imagem->descricao = $request->input('descricao');
        $imagem->nome_arquivo = $file->hashName();
        $imagem->equipamento_id = $equipamento->id;
        $imagem->save();

        return redirect()->route('admin.equipamentos.editar', $equipamentoId);
    }

    public function deletarImagem($equipamentoId, $imagemId)
    {
        $imagem = EquipamentoImagem::withoutGlobalScope('aprovado')
            ->where('equipamento_id', $equipamentoId)
            ->findOrFail($imagemId);

        Storage::delete(config('equipamentos.path_imagens') . '/' . $imagem->nome_arquivo);
        $imagem->delete();

        return redirect()->route('admin.equipamentos.editar', $equipamentoId);
    }

    public function pesquisar(Request $request)
    {
        $equipamento = Equipamento::select('id', 'titulo as texto')
            ->whereFullText('titulo', $request->input('termo'))
            ->orWhere('titulo', 'like', '%' . $request->input('termo') . '%')
            ->take(10)
            ->get();

        return response()->json($equipamento);
    }
}
