<?php

namespace App\Services\Site;

use App\Enums\Marketing\PaginaInicial\StatusVersao;
use App\Models\Marketing\PaginaInicial\Banners\Banner;
use App\Models\Marketing\PaginaInicial\Componente;
use App\Models\Marketing\PaginaInicial\Grid\Grid;
use App\Models\Marketing\PaginaInicial\ListaProdutos\Lista;
use App\Models\Marketing\PaginaInicial\Versao;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

class PaginaInicialService
{
    /**
     * Construtor do Service.
     */
    public function __construct(
        private ListaService $listaService
    ) {
    }

    /**
     * Retorna a Versão Atual da Página Inicial
     */
    public function getVersaoAtual(): Versao
    {
        return Cache::tags('pagina-inicial')->remember('versao_atual', 60, function () {
            return Versao::where('status', StatusVersao::Publicado)
                ->where(fn ($query) => $query->whereNull('data_inicio')->orWhere('data_inicio', '<=', Carbon::now()))
                ->where(fn ($query) => $query->whereNull('data_fim')->orWhere('data_fim', '>', Carbon::now()))
                ->orderBy('prioridade', 'desc')
                ->first() ?? new Versao();
        });
    }

    /**
     * Retorna a Versão Atual da Página Inicial com todos os modelos carregados
     */
    public function carregarVersaoAtual(): Versao
    {
        return $this->carregarVersao($this->getVersaoAtual());
    }

    /**
     * Retorna o Menu da Versão Atual da Página Inicial
     */
    public function getMenu(): array
    {
        $versao = $this->getVersaoAtual();
        return Cache::tags('pagina-inicial')->remember(
            "menu-$versao->id",
            600,
            fn () => $versao->menuLinks()->orderBy('ordem')->get()->toArray()
        );
    }

    /**
     * Retorna a Versão com todos os modelos carregados
     */
    public function carregarVersao(Versao $versao): Versao
    {
        return Cache::tags('pagina-inicial')->remember(
            "versao_$versao->id",
            600,
            fn () => $this->carregarVersaoSemCache($versao)
        );
    }

    /**
     * Retorna a Versão com todos os modelos carregados ignorando a cache da pagina inicial
     */
    public function carregarVersaoSemCache(Versao $versao): Versao
    {
        $versao->load([
            'menuLinks' => fn ($query) => $query->orderBy('ordem'),
            'carrosselItens' => fn ($query) => $query->orderBy('ordem'),
            'componentes' => fn ($query) => $query->orderBy('ordem'),
            'componentes.tipo' => function (MorphTo $morphTo): void {
                $morphTo->morphWith([
                    Grid::class => ['imagens'],
                    Lista::class => [
                        'listaProdutos',
                    ],
                ]);
            },
        ]);

        $this->carregarEquipamentosListas($versao);

        return $versao;
    }

    /**
     * Carrega os equipamentos das listas
     */
    public function carregarEquipamentosListas(Versao $versao): void
    {
        foreach ($versao->componentes as $componente) {
            if ($componente->tipo_type == Lista::class) {
                $lista = $componente->tipo->listaProdutos;
                $lista->equipamentos = Cache::tags('pagina-inicial')
                    ->remember("$lista->id", 60, function () use ($lista) {
                        return $this->listaService->queryLista($lista->id)->get();
                    });
            }
        }
    }

    /**
     * Retorna o numero da ordem do próximo componente
     */
    public function proximaOrdem(Versao $versao): int
    {
        $max = $versao->componentes()->max('ordem');
        if ($max) {
            return $max + 1;
        }

        return 2;
    }

    /**
     * Exclui um componente da versão
     */
    public function excluirComponente(Componente $componente): void
    {
        if ($componente->tipo_type == Banner::class) {
            $this->excluirBannerImagens($componente);
        }

        $componente->tipo()->delete();
        $componente->delete();

        $componente->versao->componentes()->where('ordem', '>', $componente->ordem)->decrement('ordem');
    }

    /**
     * Exclui as imagens do banner
     */
    private function excluirBannerImagens(Componente $componente): void
    {
        $banner = $componente->tipo;
        Storage::delete(config('equipamentos.imagens.pagina_inicial') . '/' . $banner->nome_desktop);
        Storage::delete(config('equipamentos.imagens.pagina_inicial') . '/' . $banner->nome_mobile);
        Storage::delete(config('equipamentos.imagens.pagina_inicial') . '/' . $banner->nome_desktop_secundario);
        Storage::delete(config('equipamentos.imagens.pagina_inicial') . '/' . $banner->nome_mobile_secundario);
    }

    /**
     * Move o componente para cima na ordem
     *
     * @throws ValidationException Quando não pode alterar a ordem
     */
    public function ordemAcima(Componente $componente): void
    {
        $ordem = $componente->ordem;

        if ($ordem <= 2) {
            throw ValidationException::withMessages(['ordem' => 'O componente já está na primeira posição']);
        }

        $componenteAnterior = $componente->versao->componentes()->where('ordem', $ordem - 1)->first();
        $componenteAnterior->ordem = $ordem;
        $componenteAnterior->save();

        $componente->ordem = $ordem - 1;
        $componente->save();
    }

    /**
     * Move o componente para baixo na ordem
     *
     * @throws ValidationException Quando não pode alterar a ordem
     */
    public function ordemAbaixo(Componente $componente): void
    {
        $ordem = $componente->ordem;

        if ($ordem >= $componente->versao->componentes()->max('ordem')) {
            throw ValidationException::withMessages(['ordem' => 'O componente já está na última posição']);
        }

        $componentePosterior = $componente->versao->componentes()->where('ordem', $ordem + 1)->first();
        $componentePosterior->ordem = $ordem;
        $componentePosterior->save();

        $componente->ordem = $ordem + 1;
        $componente->save();
    }

    /**
     * Valida se o Grid tem o número de imagens necessárias
     *
     * @throws ValidationException Quando não tem o número de imagens
     */
    public function validarImagensNecessarias(Grid $grid): void
    {
        $quantidadeImagens = $grid->imagens()->count();

        if ($quantidadeImagens < $grid->formato->imagensNecessarias()) {
            $componenteId = $grid->componente->id;
            throw ValidationException::withMessages([
                'grid' => "O Grid ($componenteId) não tem o número mínimo de imagens necessárias",
            ]);
        }

        if ($quantidadeImagens > $grid->formato->imagensNecessarias()) {
            $componenteId = $grid->componente->id;
            throw ValidationException::withMessages([
                'grid' => "O Grid ($componenteId) tem mais imagens do que o número permitido de imagens",
            ]);
        }
    }

    /**
     * Valida se a versão pode ser aprovada
     *
     * @throws ValidationException Quando não tem o número de imagens
     */
    public function validarVersao(Versao $versao): void
    {
        if ($versao->menuLinks->count() == 0) {
            throw ValidationException::withMessages([
                'carrossel' => 'O Menu deve ter pelo menos um item',
            ]);
        }

        if ($versao->carrosselItens->count() == 0) {
            throw ValidationException::withMessages([
                'carrossel' => 'O Carrossel Principal deve ter pelo menos um item',
            ]);
        }

        foreach ($versao->componentes as $componente) {
            if ($componente->tipo_type == Grid::class) {
                $this->validarImagensNecessarias($componente->tipo);
            }
        }
    }
}
