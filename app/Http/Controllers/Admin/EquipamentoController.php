<?php

namespace App\Http\Controllers\Admin;

use App\Enums\Cadastro\StatusEquipamento;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CaracteristicasValorRequest;
use App\Http\Requests\Admin\EquipamentoRequest;
use App\Http\Requests\Admin\EquipamentoStatusRequest;
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
        $equipamentos = Equipamento::with('categoria')->paginate(10);
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

    public function editar(int $id)
    {
        $equipamento = Equipamento::with([
            'categoria',
            'imagens',
            'modelo',
            'modelo.marca',
        ])->findOrFail($id);

        $statusEquipamentos = StatusEquipamento::toArray();

        return Inertia::render(
            'Admin/Equipamento/Editar/Cadastro',
            compact('equipamento', 'statusEquipamentos')
        );
    }

    public function editarDescricao(int $id)
    {
        $equipamento = Equipamento::findOrFail($id);

        return Inertia::render('Admin/Equipamento/Editar/Descricao', compact('equipamento'));
    }

    public function editarCaracteristicas(int $id)
    {
        $equipamento = Equipamento::with('caracteristicas')->findOrFail($id);
        $caracteristicas = $this->equipCaracService->getCaracteristicasCategoria($equipamento->categoria_id);

        foreach ($caracteristicas as $key => $caracteristica) {
            $equipCarac = $equipamento->caracteristicas()->firstwhere('caracteristica_id', $caracteristica->id);
            if ($equipCarac === null || $equipCarac->valor === null) {
                continue;
            }

            $caracteristicas[$key]->valor = $equipCarac->valor->valor;
        }

        return Inertia::render('Admin/Equipamento/Editar/Caracteristicas', compact('equipamento', 'caracteristicas'));
    }

    public function editarImagens(int $id)
    {
        $equipamento = Equipamento::with('imagens')->findOrFail($id);

        return Inertia::render('Admin/Equipamento/Editar/Imagens', compact('equipamento'));
    }

    public function editarAprovacao(int $id)
    {
        $equipamento = Equipamento::findOrFail($id);
        $statusEquipamento = StatusEquipamento::toArray();

        return Inertia::render('Admin/Equipamento/Editar/Aprovacao', compact('equipamento', 'statusEquipamento'));
    }

    public function atualizar(EquipamentoRequest $request, int $id)
    {
        $equipamento = Equipamento::findOrFail($id);
        $equipamento->update($request->all());

        return redirect()->route('admin.equipamentos.editar', $id);
    }

    public function atualizarDescricao(Request $request, int $id)
    {
        $equipamento = Equipamento::findOrFail($id);
        $equipamento->descricao = HTMLPurifier::purify($request->input('descricao'));
        $equipamento->save();

        return redirect()->route('admin.equipamentos.editarDescricao', $id);
    }

    public function atualizarStatus(EquipamentoStatusRequest $request, $id)
    {
        $equipamento = Equipamento::findOrFail($id);
        $equipamento->status = $request->input('status');
        $equipamento->motivo_reprovado = HTMLPurifier::purify($request->input('motivo_reprovado'));
        $equipamento->save();

        return redirect()->route('admin.equipamentos.editar', $id);
    }

    public function excluir($id)
    {
        Equipamento::findOrFail($id)->delete();

        return redirect()->route('admin.equipamentos');
    }

    public function salvarCaracteristicas(CaracteristicasValorRequest $request, int $id)
    {
        $equipamento = Equipamento::findOrFail($id);
        $this->equipCaracService->salvarCaracteristicas($equipamento, $request->all());

        return redirect()->route('admin.equipamentos.editarCaracteristicas', $id);
    }

    public function adicionarImagem(EquipamentoImagemRequest $request, int $equipamentoId)
    {
        $equipamento = Equipamento::findOrFail($equipamentoId);

        $file = $request->file('imagem');
        $file->store(config('equipamentos.path_imagens'));

        $imagem = new EquipamentoImagem();
        $imagem->descricao = $request->input('descricao');
        $imagem->nome_arquivo = $file->hashName();
        $imagem->equipamento_id = $equipamento->id;
        $imagem->save();

        return redirect()->route('admin.equipamentos.editarImagens', $equipamentoId);
    }

    public function deletarImagem(int $equipamentoId, int $imagemId)
    {
        $imagem = EquipamentoImagem::where('equipamento_id', $equipamentoId)->findOrFail($imagemId);

        Storage::delete(config('equipamentos.path_imagens') . '/' . $imagem->nome_arquivo);
        $imagem->delete();

        return redirect()->route('admin.equipamentos.editarImagens', $equipamentoId);
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
