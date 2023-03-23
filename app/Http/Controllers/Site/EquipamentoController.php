<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CaracteristicasValorRequest;
use App\Http\Requests\Admin\EquipamentoRequest;
use App\Http\Requests\Equipamento\EquipamentoImagemRequest;
use App\Models\Equipamentos\Categoria;
use App\Models\Equipamentos\Equipamento;
use App\Models\Equipamentos\EquipamentoImagem;
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

    public function cadastrar()
    {
        $categorias = Categoria::all()->pluck('nome', 'id');

        return Inertia::render('Site/Equipamento/Cadastrar/Novo', compact('categorias'));
    }

    public function salvar(EquipamentoRequest $request)
    {
        $equipamento = Equipamento::create([
            ...$request->all(),
            'usuario_id' => Auth::id(),
            'passo_cadastro' => 1,
        ]);

        return redirect()->route('site.equipamento.imagens', $equipamento->id);
    }

    public function imagens($id)
    {
        $equipamento = Equipamento::withoutGlobalScope('aprovado')->with(['imagens'])->findOrFail($id);

        return Inertia::render('Site/Equipamento/Cadastrar/Imagens', compact('equipamento'));
    }

    public function salvarImagens(EquipamentoImagemRequest $request, $id)
    {
        $equipamento = Equipamento::withoutGlobalScope('aprovado')->findOrFail($id);

        $file = $request->file('imagem');
        $file->store(config('equipamentos.path_imagens'));

        $imagem = new EquipamentoImagem();
        $imagem->descricao = $request->input('descricao');
        $imagem->nome_arquivo = $file->hashName();
        $imagem->equipamento_id = $equipamento->id;
        $imagem->save();

        return redirect()->route('site.equipamento.imagens', $equipamento->id);
    }

    public function excluirImagem($id, $imagem_id)
    {
        $imagem = EquipamentoImagem::withoutGlobalScope('aprovado')
            ->where('equipamento_id', $id)
            ->findOrFail($imagem_id);

        Storage::delete(config('equipamentos.path_imagens') . '/' . $imagem->nome_arquivo);
        $imagem->delete();

        return redirect()->route('site.equipamento.imagens', $id);
    }

    public function validarImagens($id)
    {
        $equipamento = Equipamento::withoutGlobalScope('aprovado')->with(['imagens'])->findOrFail($id);

        if ($equipamento->imagens->count() == 0) {
            return redirect()->route('site.equipamento.imagens', $equipamento->id);
        }

        return redirect()->route('site.equipamento.descricao', $equipamento->id);
    }

    public function descricao($id)
    {
        $equipamento = Equipamento::withoutGlobalScope('aprovado')->findOrFail($id);

        return Inertia::render('Site/Equipamento/Cadastrar/Descricao', compact('equipamento'));
    }

    public function salvarDescricao(Request $request, $id)
    {
        $equipamento = Equipamento::withoutGlobalScope('aprovado')->findOrFail($id);
        $equipamento->descricao = HTMLPurifier::purify($request->input('descricao'));
        $equipamento->passo_cadastro = 3;
        $equipamento->save();

        return redirect()->route('site.equipamento.caracteristicas', $equipamento->id);
    }

    public function caracteristicas($id)
    {
        $equipamento = Equipamento::withoutGlobalScope('aprovado')->findOrFail($id);

        $caracteristicas = $this->equipCaracService->getCaracteristicasCategoria($equipamento->categoria_id);
        foreach ($caracteristicas as $key => $caracteristica) {
            $equipCarac = $equipamento->caracteristicas()->firstwhere('caracteristica_id', $caracteristica->id);
            if (is_null($equipCarac) || is_null($equipCarac->valor)) {
                continue;
            }

            $caracteristicas[$key]->valor = $equipCarac->valor->valor;
        }

        return Inertia::render('Site/Equipamento/Cadastrar/Caracteristicas', compact('equipamento', 'caracteristicas'));
    }

    public function salvarCaracteristicas(CaracteristicasValorRequest $request, $id)
    {
        $equipamento = Equipamento::withoutGlobalScope('aprovado')->findOrFail($id);
        $this->equipCaracService->salvarCaracteristicas($equipamento, $request->all());
        $equipamento->passo_cadastro = 4;
        $equipamento->save();

        return redirect()->route('equipamento.finalizar', $equipamento->id);
    }

    public function finalizar($id)
    {
        $equipamento = Equipamento::withoutGlobalScope('aprovado')->findOrFail($id);

        return Inertia::render('Site/Equipamento/Cadastrar/Finalizar', compact('equipamento'));
    }
}
