<?php

namespace App\Http\Controllers\Admin\Marketing\PaginaInicial;

use App\Enums\Marketing\PaginaInicial\Grid\Formato;
use App\Enums\Marketing\PaginaInicial\StatusVersao;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Marketing\PaginaInicial\Grid\AdicionarGridRequest;
use App\Http\Requests\Admin\Marketing\PaginaInicial\Grid\AdicionarImagemRequest;
use App\Models\Marketing\PaginaInicial\Componente;
use App\Models\Marketing\PaginaInicial\Grid\Grid;
use App\Models\Marketing\PaginaInicial\Grid\GridImagem;
use App\Models\Marketing\PaginaInicial\Versao;
use App\Services\Site\PaginaInicialService;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class GridController extends Controller
{
    public function __construct(
        private PaginaInicialService $paginaInicialService
    ) {
    }

    public function adicionar(Versao $versao): mixed
    {
        Gate::authorize('criar', Grid::class);
        $formatos = Formato::arrayNomes();
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
        return Inertia::render('Admin/Marketing/PaginaInicial/Grid/Adicionar', compact('versao', 'formatos'));
    }

    public function salvar(AdicionarGridRequest $request, Versao $versao): mixed
    {
        Gate::authorize('criar', Grid::class);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
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
        Gate::authorize('ver', $grid);
        $formato = Formato::arrayNomes()[$grid->formato->value];

        $grid->load([
            'imagens' => fn ($query) => $query->orderBy('ordem'),
            'componente'
        ]);

        $alerta = '';
        $imagensNecessarias = $grid->formato->imagensNecessarias();
        if ($grid->imagens->count() != $imagensNecessarias) {
            $alerta = "O Grid deve ter $imagensNecessarias imagens.";
        }

        return Inertia::render(
            'Admin/Marketing/PaginaInicial/Grid/Visualizar',
            compact('versao', 'grid', 'formato', 'alerta')
        );
    }

    public function adicionarImagem(Versao $versao, Grid $grid): mixed
    {
        Gate::authorize('criar', GridImagem::class);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
        return Inertia::render('Admin/Marketing/PaginaInicial/Grid/AdicionarImagem', compact('versao', 'grid'));
    }

    public function salvarImagem(AdicionarImagemRequest $request, Versao $versao, Grid $grid): mixed
    {
        Gate::authorize('criar', GridImagem::class);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
        $gridImagem = new GridImagem($request->all());
        $gridImagem->grid_id = $grid->id;
        $gridImagem->ordem = $grid->imagens->count() + 1;

        $imagemDesktop = $request->file('imagem_desktop');
        $imagemDesktop->store(config('equipamentos.imagens.pagina_inicial'));
        $gridImagem->nome_desktop = $imagemDesktop->hashName();

        if ($request->hasFile('imagem_mobile')) {
            $imagemMobile = $request->file('imagem_mobile');
            $imagemMobile->store(config('equipamentos.imagens.pagina_inicial'));
            $gridImagem->nome_mobile = $imagemMobile->hashName();
        }

        $gridImagem->save();

        return redirect()->route('admin.marketing.paginaInicial.layout.grid.visualizar', [$versao, $grid]);
    }

    public function visualizarImagem(Versao $versao, Grid $grid, GridImagem $gridImagem): mixed
    {
        Gate::authorize('ver', $gridImagem);
        return Inertia::render(
            'Admin/Marketing/PaginaInicial/Grid/VisualizarImagem',
            compact('versao', 'grid', 'gridImagem')
        );
    }

    public function excluirImagem(Versao $versao, Grid $grid, GridImagem $gridImagem): mixed
    {
        Gate::authorize('excluir', $gridImagem);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }

        Storage::delete(config('equipamentos.imagens.pagina_inicial') . $gridImagem->nome_desktop);
        Storage::delete(config('equipamentos.imagens.pagina_inicial') . $gridImagem->nome_mobile);
        $gridImagem->delete();

        $grid->imagens()->where('ordem', '>', $gridImagem->ordem)->decrement('ordem');

        return redirect()->route('admin.marketing.paginaInicial.layout.grid.visualizar', [$versao, $grid]);
    }

    public function ordemAcima(Versao $versao, Grid $grid, GridImagem $gridImagem)
    {
        Gate::authorize('ordem', $grid);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
        $ordem = $gridImagem->ordem;

        if ($ordem <= 1) {
            throw ValidationException::withMessages(['ordem' => 'A imagem já está na primeira posição']);
        }

        $imagemPosterior = $grid->imagens()->where('ordem', $ordem - 1)->first();
        $imagemPosterior->ordem = $ordem;
        $imagemPosterior->save();

        $gridImagem->ordem = $ordem - 1;
        $gridImagem->save();

        return redirect()->route('admin.marketing.paginaInicial.layout.grid.visualizar', [$versao, $grid]);
    }

    public function ordemAbaixo(Versao $versao, Grid $grid, GridImagem $gridImagem)
    {
        Gate::authorize('ordem', $grid);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
        $ordem = $gridImagem->ordem;

        if ($ordem >= $grid->imagens()->max('ordem')) {
            throw ValidationException::withMessages(['ordem' => 'A imagem já está na última posição']);
        }

        $imagemPosterior = $grid->imagens()->where('ordem', $ordem + 1)->first();
        $imagemPosterior->ordem = $ordem;
        $imagemPosterior->save();

        $gridImagem->ordem = $ordem + 1;
        $gridImagem->save();

        return redirect()->route('admin.marketing.paginaInicial.layout.grid.visualizar', [$versao, $grid]);
    }
}
