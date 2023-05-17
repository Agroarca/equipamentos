<?php

namespace App\Http\Controllers\Admin\Equipamentos\Cadastro;

use App\Enums\Equipamentos\Cadastro\StatusEquipamento;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Equipamentos\Cadastro\EquipamentoImagemRequest;
use App\Http\Requests\Admin\Equipamentos\Cadastro\EquipamentoRequest;
use App\Http\Requests\Admin\Equipamentos\Cadastro\EquipamentoStatusRequest;
use App\Http\Requests\Admin\Equipamentos\Caracteristicas\CaracteristicasValorRequest;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Cadastro\EquipamentoImagem;
use App\Services\Equipamentos\EquipamentoCaracteristicaService;
use App\Services\Libs\HTMLPurifier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
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
        Gate::authorize('ver', Equipamento::class);
        $equipamentos = Equipamento::with('categoria')->paginate(10);
        $statusEquipamentos = StatusEquipamento::toArray();

        return Inertia::render(
            'Admin/Equipamentos/Cadastro/Equipamento/Inicio',
            compact('equipamentos', 'statusEquipamentos')
        );
    }

    public function criar()
    {
        Gate::authorize('criar', Equipamento::class);
        $categorias = Categoria::all()->pluck('nome', 'id');

        return Inertia::render('Admin/Equipamentos/Cadastro/Equipamento/Criar', compact('categorias'));
    }

    public function salvar(EquipamentoRequest $request)
    {
        Gate::authorize('criar', Equipamento::class);
        Equipamento::create([
            ...$request->all(),
            'usuario_id' => Auth::id(),
        ]);

        return redirect()->route('admin.equipamentos');
    }

    public function editar(int $id)
    {
        Gate::authorize('editar', Equipamento::class);
        $equipamento = Equipamento::with([
            'categoria',
            'imagens',
            'modelo',
            'modelo.marca',
        ])->findOrFail($id);

        $statusEquipamentos = StatusEquipamento::toArray();

        return Inertia::render(
            'Admin/Equipamentos/Cadastro/Equipamento/Editar/Cadastro',
            compact('equipamento', 'statusEquipamentos')
        );
    }

    public function editarDescricao(int $id)
    {
        Gate::authorize('editar', Equipamento::class);
        $equipamento = Equipamento::findOrFail($id);

        return Inertia::render('Admin/Equipamentos/Cadastro/Equipamento/Editar/Descricao', compact('equipamento'));
    }

    public function editarCaracteristicas(int $id)
    {
        Gate::authorize('editar', Equipamento::class);
        $equipamento = Equipamento::with('caracteristicas')->findOrFail($id);
        $caracteristicas = $this->equipCaracService->getCaracteristicasCategoria($equipamento->categoria_id);

        foreach ($caracteristicas as $key => $caracteristica) {
            $equipCarac = $equipamento->caracteristicas()->firstwhere('caracteristica_id', $caracteristica->id);
            if ($equipCarac === null || $equipCarac->valor === null) {
                continue;
            }

            $caracteristicas[$key]->valor = $equipCarac->valor->valor;
        }

        return Inertia::render(
            'Admin/Equipamentos/Cadastro/Equipamento/Editar/Caracteristicas',
            compact('equipamento', 'caracteristicas')
        );
    }

    public function editarImagens(int $id)
    {
        Gate::authorize('editar', Equipamento::class);
        $equipamento = Equipamento::with('imagens')->findOrFail($id);

        return Inertia::render(
            'Admin/Equipamentos/Cadastro/Equipamento/Editar/Imagens',
            compact('equipamento')
        );
    }

    public function editarAprovacao(int $id)
    {
        Gate::authorize('aprovar', Equipamento::class);
        $equipamento = Equipamento::findOrFail($id);

        if ($equipamento->status === StatusEquipamento::Aprovado
            || $equipamento->status === StatusEquipamento::Reprovado
        ) {
            return abort(403, 'Ação não permitida');
        }

        $statusEquipamento = StatusEquipamento::toArray();

        return Inertia::render(
            'Admin/Equipamentos/Cadastro/Equipamento/Editar/Aprovacao',
            compact('equipamento', 'statusEquipamento')
        );
    }

    public function atualizar(EquipamentoRequest $request, int $id)
    {
        Gate::authorize('editar', Equipamento::class);
        $equipamento = Equipamento::findOrFail($id);
        $equipamento->update($request->all());

        return redirect()->route('admin.equipamentos.editar', $id);
    }

    public function atualizarDescricao(Request $request, int $id)
    {
        Gate::authorize('editar', Equipamento::class);
        $equipamento = Equipamento::findOrFail($id);
        $equipamento->descricao = HTMLPurifier::purify($request->input('descricao'));
        $equipamento->save();

        return redirect()->route('admin.equipamentos.editarDescricao', $id);
    }

    public function atualizarStatus(EquipamentoStatusRequest $request, $id)
    {
        Gate::authorize('aprovar', Equipamento::class);
        $equipamento = Equipamento::findOrFail($id);
        $equipamento->status = $request->input('status');
        $equipamento->motivo_reprovado = HTMLPurifier::purify($request->input('motivo_reprovado'));
        $equipamento->save();

        return redirect()->route('admin.equipamentos.editar', $id);
    }

    public function excluir($id)
    {
        Gate::authorize('excluir', Equipamento::class);
        Equipamento::findOrFail($id)->delete();

        return redirect()->route('admin.equipamentos');
    }

    public function salvarCaracteristicas(CaracteristicasValorRequest $request, int $id)
    {
        Gate::authorize('editar', Equipamento::class);
        $equipamento = Equipamento::findOrFail($id);
        $this->equipCaracService->salvarCaracteristicas($equipamento, $request->all());

        return redirect()->route('admin.equipamentos.editarCaracteristicas', $id);
    }

    public function adicionarImagem(EquipamentoImagemRequest $request, int $equipamentoId)
    {
        Gate::authorize('editar', Equipamento::class);
        $equipamento = Equipamento::findOrFail($equipamentoId);

        $file = $request->file('imagem');
        $file->store(config('equipamentos.imagens.equipamentos'));

        $imagem = new EquipamentoImagem();
        $imagem->descricao = $request->input('descricao');
        $imagem->nome_arquivo = $file->hashName();
        $imagem->equipamento_id = $equipamento->id;
        $imagem->save();

        return redirect()->route('admin.equipamentos.editarImagens', $equipamentoId);
    }

    public function deletarImagem(int $equipamentoId, int $imagemId)
    {
        Gate::authorize('editar', Equipamento::class);
        $imagem = EquipamentoImagem::where('equipamento_id', $equipamentoId)->findOrFail($imagemId);

        Storage::delete(config('equipamentos.imagens.equipamentos') . '/' . $imagem->nome_arquivo);
        $imagem->delete();

        return redirect()->route('admin.equipamentos.editarImagens', $equipamentoId);
    }

    public function pesquisar(Request $request)
    {
        $equipamento = Equipamento::select('id', 'titulo as texto')
            ->whereFullText('titulo', $request->input('termo'))
            ->orWhere('titulo', 'like', '%' . $request->input('termo') . '%')
            ->where('status', StatusEquipamento::Aprovado)
            ->take(10)
            ->get();

        return response()->json($equipamento);
    }
}
