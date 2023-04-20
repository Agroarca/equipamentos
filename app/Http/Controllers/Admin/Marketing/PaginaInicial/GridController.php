<?php

namespace App\Http\Controllers\Admin\Marketing\PaginaInicial;

use App\Enums\Marketing\PaginaInicial\Grid\Formato;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Marketing\PaginaInicial\Grid\AdicionarGridRequest;
use App\Http\Requests\Admin\Marketing\PaginaInicial\Grid\AdicionarImagemRequest;
use App\Models\Marketing\PaginaInicial\Componente;
use App\Models\Marketing\PaginaInicial\Grid\Grid;
use App\Models\Marketing\PaginaInicial\Grid\GridImagem;
use App\Models\Marketing\PaginaInicial\Versao;
use App\Services\Site\PaginaInicialService;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class GridController extends Controller
{
    public function __construct(
        private PaginaInicialService $paginaInicialService
    ) {
    }

    public function adicionar(Versao $versao): mixed
    {
        $formatos = Formato::arrayNomes();
        return Inertia::render('Admin/Marketing/PaginaInicial/Grid/Adicionar', compact('versao', 'formatos'));
    }

    public function salvar(AdicionarGridRequest $request, Versao $versao): mixed
    {
        $grid = Grid::create($request->only('formato'));

        $componente = new Componente($request->only([
            'titulo',
            'subtitulo',
            'tela_cheia',
        ]));

        $componente->ordem = $this->paginaInicialService->proximaOrdem($versao);
        $componente->tipo()->associate($grid);
        $componente->versao_id = $versao->id;
        $componente->save();

        return redirect()->route('admin.marketing.paginaInicial.layout', $versao);
    }

    public function visualizar(Versao $versao, Grid $grid): mixed
    {
        $formato = Formato::arrayNomes()[$grid->formato->value];

        $grid->load([
            'imagens' => fn ($query) => $query->orderBy('ordem'),
        ]);

        return Inertia::render('Admin/Marketing/PaginaInicial/Grid/Visualizar', compact('versao', 'grid', 'formato'));
    }

    public function adicionarImagem(Versao $versao, Grid $grid): mixed
    {
        return Inertia::render('Admin/Marketing/PaginaInicial/Grid/AdicionarImagem', compact('versao', 'grid'));
    }

    public function salvarImagem(AdicionarImagemRequest $request, Versao $versao, Grid $grid): mixed
    {
        $gridImagem = new GridImagem($request->all());
        $gridImagem->grid_id = $grid->id;

        $imagemDesktop = $request->file('imagem_desktop');
        $imagemDesktop->store(config('equipamentos.path_imagens'));
        $gridImagem->nome_desktop = $imagemDesktop->hashName();

        if ($request->hasFile('imagem_mobile')) {
            $imagemMobile = $request->file('imagem_mobile');
            $imagemMobile->store(config('equipamentos.path_imagens'));
            $gridImagem->nome_mobile = $imagemMobile->hashName();
        }

        $gridImagem->save();

        return redirect()->route('admin.marketing.paginaInicial.layout.grid.visualizar', [$versao, $grid]);
    }

    public function excluirImagem(Versao $versao, Grid $grid, GridImagem $gridImagem): mixed
    {
        Storage::delete(config('equipamentos.path_imagens') . '/' . $gridImagem->nome_desktop);
        Storage::delete(config('equipamentos.path_imagens') . '/' . $gridImagem->nome_mobile);
        $gridImagem->delete();

        return redirect()->route('admin.marketing.paginaInicial.layout.grid.visualizar', [$versao, $grid]);
    }
}
