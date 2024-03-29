<?php

// phpcs:disable Generic.Files.LineLength.MaxExceeded

namespace App\Http\Controllers\Site;

use App\Enums\Equipamentos\Cadastro\StatusCadastro;
use App\Enums\Equipamentos\Cadastro\StatusEquipamento;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Equipamentos\Cadastro\EquipamentoRequest;
use App\Http\Requests\Admin\Equipamentos\Caracteristicas\CaracteristicasValorRequest;
use App\Http\Requests\Site\Equipamento\Cadastro\EquipamentoDescricaoRequest;
use App\Http\Requests\Site\Equipamento\Cadastro\EquipamentoImagemRequest;
use App\Jobs\Imagens\ConverterEquipamentoImagemJob;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Cadastro\EquipamentoImagem;
use App\Models\Equipamentos\Cadastro\Marca;
use App\Models\Equipamentos\Cadastro\MarcaCategoria;
use App\Models\Equipamentos\Cadastro\Modelo;
use App\Services\Equipamentos\Cadastro\EquipamentoService;
use App\Services\Equipamentos\EquipamentoCaracteristicaService;
use App\Services\Libs\HTMLPurifier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class EquipamentoController extends Controller
{
    public function __construct(
        private EquipamentoCaracteristicaService $equipCaracService,
        private EquipamentoService $equipService
    ) {
    }

    public function cadastrar()
    {
        $categorias = Categoria::where('categoria_mae_id', null)->get();
        return Inertia::render('Site/Equipamento/Cadastrar/Categoria', compact('categorias'));
    }

    public function editar(int $id)
    {
        $equipamento = Equipamento::with([
            'categoria',
            'imagens',
            'modelo',
            'modelo.marca',
            'categoria',
            'cidade',
        ])->findOrFail($id);

        if ($equipamento->usuario_id !== Auth::id()) {
            return abort(403, 'Você não tem permissão para editar este equipamento');
        }

        if ($equipamento->status === StatusEquipamento::Aprovado) {
            return abort(403, 'Você não pode editar um equipamento aprovado');
        }

        return Inertia::render('Site/Equipamento/Editar/Editar', compact('equipamento'));
    }

    public function cadastro(int $id)
    {
        $categoria = Categoria::findOrFail($id);
        $categoria->append('tem_caracteristicas');

        return Inertia::render('Site/Equipamento/Cadastrar/Novo', compact('categoria'));
    }

    public function salvar(EquipamentoRequest $request)
    {
        if ($request->has('id')) {
            $equipamento = Equipamento::findOrFail($request->input('id'));

            if ($equipamento->usuario_id !== Auth::id()) {
                return abort(403, 'Você não tem permissão para editar este equipamento');
            }

            if ($equipamento->status === StatusEquipamento::Aprovado) {
                return abort(403, 'Você não pode editar um equipamento aprovado');
            }

            $equipamento->update($request->all());
        } else {
            $equipamento = Equipamento::create([
                ...$request->all(),
                'usuario_id' => Auth::id(),
                'passo_cadastro' => 1,
                'status' => StatusEquipamento::Cadastrando,
            ]);
        }

        return redirect()->route('site.equipamento.imagens', $equipamento->id);
    }

    public function imagens($id)
    {
        $equipamento = Equipamento::with(['imagens', 'categoria'])->findOrFail($id);
        $equipamento->categoria->append('tem_caracteristicas');

        return Inertia::render('Site/Equipamento/Cadastrar/Imagens', compact('equipamento'));
    }

    public function salvarImagens(EquipamentoImagemRequest $request, $id)
    {
        $equipamento = Equipamento::findOrFail($id);

        $file = $request->file('imagem');
        $file->store($this->equipService->getStoragePathImagem($equipamento->id));

        $imagem = new EquipamentoImagem();
        $imagem->nome_arquivo = $file->hashName();
        $imagem->equipamento_id = $equipamento->id;
        $imagem->save();

        if ($equipamento->passo_cadastro < 2) {
            $equipamento->passo_cadastro = 2;
        }
        $equipamento->save();

        ConverterEquipamentoImagemJob::dispatch($imagem);

        return redirect()->route('site.equipamento.imagens', $equipamento->id);
    }

    public function excluirImagem(int $id, int $imagemId)
    {
        $imagem = EquipamentoImagem::where('equipamento_id', $id)->findOrFail($imagemId);

        Storage::delete($this->equipService->getStoragePathImagem($id) . $imagem->nome_arquivo);
        Storage::delete($this->equipService->getStoragePathImagem($id) . $imagem->nome_arquivo_secundario);
        $imagem->delete();

        return redirect()->route('site.equipamento.imagens', $id);
    }

    public function imagensContinuar($id)
    {
        $equipamento = Equipamento::with(['imagens'])->findOrFail($id);
        if (!$this->equipService->temImagem($equipamento)) {
            throw ValidationException::withMessages(['imagem' => 'É necessário cadastrar pelo menos uma imagem.']);
        }


        return redirect()->route('site.equipamento.descricao', $equipamento->id);
    }

    public function descricao($id)
    {
        $equipamento = Equipamento::with('imagens')->findOrFail($id);

        if (!$this->equipService->temImagem($equipamento)) {
            return abort(403, 'Imagens não cadastradas');
        }
        $equipamento->categoria->append('tem_caracteristicas');

        return Inertia::render('Site/Equipamento/Cadastrar/Descricao', compact('equipamento'));
    }

    public function salvarDescricao(EquipamentoDescricaoRequest $request, $id)
    {
        $equipamento = Equipamento::findOrFail($id);
        $equipamento->descricao = HTMLPurifier::purify($request->input('descricao'));
        if ($equipamento->passo_cadastro < 3) {
            $equipamento->passo_cadastro = 3;
        }
        $equipamento->save();

        if (!$equipamento->categoria->tem_caracteristicas) {
            $this->equipService->enviarParaAprovacao($equipamento);
            return redirect()->route('site.equipamento.finalizar', $equipamento->id);
        }

        return redirect()->route('site.equipamento.caracteristicas', $equipamento->id);
    }

    public function caracteristicas($id)
    {
        $equipamento = Equipamento::with('imagens', 'categoria')->findOrFail($id);

        if (!$this->equipService->temImagem($equipamento)) {
            return abort(403, 'Imagens não cadastradas');
        }

        if (!$this->equipService->temDescricao($equipamento)) {
            return abort(403, 'Descrição não cadastrada');
        }

        if (!$equipamento->categoria->tem_caracteristicas) {
            return redirect()->route('site.equipamento.editar', $equipamento->id);
        }

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
        $this->equipService->enviarParaAprovacao($equipamento);

        return redirect()->route('site.equipamento.finalizar', $equipamento->id);
    }

    public function finalizar($id)
    {
        $equipamento = Equipamento::with('imagens')->findOrFail($id);

        if (!$this->equipService->temImagem($equipamento)) {
            return abort(403, 'Imagens não cadastradas');
        }

        if (!$this->equipService->temDescricao($equipamento)) {
            return abort(403, 'Descrição não cadastrada');
        }

        if ($this->equipService->faltamCaracteristicasObrigatorias($equipamento)) {
            return abort(403, 'Características não cadastradas');
        }

        return Inertia::render('Site/Equipamento/Cadastrar/Finalizar', compact('equipamento'));
    }

    public function pesquisarMarca(Request $request, $categoriaId = null)
    {
        $marTbl = app(Marca::class)->getTable();
        $marCatTbl = app(MarcaCategoria::class)->getTable();

        $marcas = Marca::select('id', 'nome as texto')
            ->where(function ($query) use ($request) {
                $query
                    ->whereFullText('nome', $request->input('termo'))
                    ->orWhere('nome', 'like', '%' . $request->input('termo') . '%');
            })
            ->where('status', StatusCadastro::Aprovado)
            ->whereRaw(
                "(
                    not exists (select * from $marCatTbl where $marCatTbl.marca_id = $marTbl.id)
                    or exists (select * from $marCatTbl where $marCatTbl.marca_id = $marTbl.id
                        and $marCatTbl.categoria_id in (
                            with recursive cats(id) as (
                                select id from categorias where @id = id
                                union all select cat.categoria_mae_id from categorias cat inner join cats on cat.id = cats.id
                            ) select id from cats , (select @id := ?) inicializacao
                )))",
                [$categoriaId]
            )
            ->take(10)
            ->get();

        return response()->json($marcas);
    }

    public function pesquisarModelo(Request $request, ?int $marcaId = null)
    {
        $modelos = Modelo::select('id', 'nome as texto')
            ->where(function ($query) use ($request) {
                $query
                    ->whereFullText('nome', $request->input('termo'))
                    ->orWhere('nome', 'like', '%' . $request->input('termo') . '%');
            })
            ->when($marcaId, function ($query) use ($marcaId) {
                $query->where('marca_id', $marcaId);
            })
            ->where('status', StatusCadastro::Aprovado)
            ->take(10)
            ->get();

        return response()->json($modelos);
    }

    public function salvarMarcaAjax(Request $request)
    {
        $marca = Marca::create($request->all());

        return response()->json($marca);
    }

    public function salvarModeloAjax(Request $request)
    {
        $modelo = Modelo::create($request->all());

        return response()->json($modelo);
    }
}
