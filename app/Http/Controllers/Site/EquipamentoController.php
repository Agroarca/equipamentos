<?php

namespace App\Http\Controllers\Site;

use App\Enums\Equipamentos\Cadastro\StatusEquipamento;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Equipamentos\Cadastro\EquipamentoRequest;
use App\Http\Requests\Admin\Equipamentos\Caracteristicas\CaracteristicasValorRequest;
use App\Http\Requests\Site\Equipamento\Cadastro\EquipamentoDescricaoRequest;
use App\Http\Requests\Site\Equipamento\Cadastro\EquipamentoImagemRequest;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Cadastro\EquipamentoImagem;
use App\Services\Equipamentos\EquipamentoCaracteristicaService;
use App\Services\Libs\HTMLPurifier;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class EquipamentoController extends Controller
{
    public function __construct(
        private EquipamentoCaracteristicaService $equipCaracService
    ) {
    }

    public function cadastrar(?int $id = null)
    {
        $categorias = Categoria::all()->pluck('nome', 'id');
        $equipamento = null;
        if ($id) {
            $equipamento = Equipamento::with([
                'categoria',
                'imagens',
                'modelo',
                'modelo.marca',
            ])->findOrFail($id);
        }
        return Inertia::render('Site/Equipamento/Cadastrar/Novo', compact('categorias', 'equipamento'));
    }

    public function salvar(EquipamentoRequest $request)
    {
        if ($request->has('id')) {
            $equipamento = Equipamento::findOrFail($request->input('id'));
            $equipamento->update($request->all());
        } else {
            $equipamento = Equipamento::create([
                ...$request->all(),
                'usuario_id' => Auth::id(),
                'passo_cadastro' => 2,
                'status' => StatusEquipamento::Cadastrando->value,
            ]);
        }

        return redirect()->route('site.equipamento.imagens', $equipamento->id);
    }

    public function imagens($id)
    {
        $equipamento = Equipamento::with(['imagens'])->findOrFail($id);

        return Inertia::render('Site/Equipamento/Cadastrar/Imagens', compact('equipamento'));
    }

    public function salvarImagens(EquipamentoImagemRequest $request, $id)
    {
        $equipamento = Equipamento::findOrFail($id);

        $file = $request->file('imagem');
        $file->store(config('equipamentos.path_imagens'));

        $imagem = new EquipamentoImagem();
        $imagem->descricao = $request->input('descricao');
        $imagem->nome_arquivo = $file->hashName();
        $imagem->equipamento_id = $equipamento->id;
        $imagem->save();

        return redirect()->route('site.equipamento.imagens', $equipamento->id);
    }

    public function excluirImagem(int $id, int $imagemId)
    {
        $imagem = EquipamentoImagem::where('equipamento_id', $id)->findOrFail($imagemId);

        Storage::delete(config('equipamentos.path_imagens') . '/' . $imagem->nome_arquivo);
        $imagem->delete();

        return redirect()->route('site.equipamento.imagens', $id);
    }

    public function imagensContinuar($id)
    {
        $equipamento = Equipamento::with(['imagens'])->findOrFail($id);
        if ($equipamento->imagens->count() == 0) {
            throw ValidationException::withMessages(['imagem' => 'É necessário cadastrar pelo menos uma imagem.']);
        }
        if ($equipamento->passo_cadastro < 3) {
            $equipamento->passo_cadastro = 3;
        }
        $equipamento->save();

        return redirect()->route('site.equipamento.descricao', $equipamento->id);
    }

    public function descricao($id)
    {
        $equipamento = Equipamento::findOrFail($id);

        return Inertia::render('Site/Equipamento/Cadastrar/Descricao', compact('equipamento'));
    }

    public function salvarDescricao(EquipamentoDescricaoRequest $request, $id)
    {
        $equipamento = Equipamento::findOrFail($id);
        $equipamento->descricao = HTMLPurifier::purify($request->input('descricao'));
        if ($equipamento->passo_cadastro < 4) {
            $equipamento->passo_cadastro = 4;
        }
        $equipamento->save();

        return redirect()->route('site.equipamento.caracteristicas', $equipamento->id);
    }

    public function caracteristicas($id)
    {
        $equipamento = Equipamento::findOrFail($id);

        $caracteristicas = $this->equipCaracService->getCaracteristicasCategoria($equipamento->categoria_id);
        foreach ($caracteristicas as $key => $caracteristica) {
            $equipCarac = $equipamento->caracteristicas()->firstwhere('caracteristica_id', $caracteristica->id);
            if ($equipCarac === null || $equipCarac->valor === null) {
                continue;
            }

            $caracteristicas[$key]->valor = $equipCarac->valor->valor;
        }

        return Inertia::render('Site/Equipamento/Cadastrar/Caracteristicas', compact('equipamento', 'caracteristicas'));
    }

    public function salvarCaracteristicas(CaracteristicasValorRequest $request, $id)
    {
        $equipamento = Equipamento::findOrFail($id);
        $this->equipCaracService->salvarCaracteristicas($equipamento, $request->all());
        if ($equipamento->passo_cadastro < 5) {
            $equipamento->passo_cadastro = 5;
        }
        if ($equipamento->status == StatusEquipamento::Cadastrando->value) {
            $equipamento->status = StatusEquipamento::Criado->value;
        }
        $equipamento->save();

        return redirect()->route('site.equipamento.finalizar', $equipamento->id);
    }

    public function finalizar($id)
    {
        $equipamento = Equipamento::findOrFail($id);

        return Inertia::render('Site/Equipamento/Cadastrar/Finalizar', compact('equipamento'));
    }
}
