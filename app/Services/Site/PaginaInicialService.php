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
        return Versao::where('status', StatusVersao::Publicado)
            ->where(fn ($query) => $query->whereNull('data_inicio')->orWhere('data_inicio', '>=', Carbon::now()))
            ->where(fn ($query) => $query->whereNull('data_fim')->orWhere('data_fim', '<', Carbon::now()))
            ->orderBy('prioridade', 'desc')
            ->first();
    }

    /**
     * Retorna a Versão Atual da Página Inicial com todos os modelos carregados
     */
    public function carregarVersaoAtual(): Versao
    {
        return $this->carregarVersao($this->getVersaoAtual());
    }

    /**
     * Retorna a Versão com todos os modelos carregados
     */
    public function carregarVersao(Versao $versao): Versao
    {
        $versao->load([
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

        foreach ($versao->componentes as $componente) {
            if ($componente->tipo_type == Lista::class) {
                $componente->tipo->listaProdutos->equipamentos = $this->listaService
                    ->queryLista($componente->tipo->listaProdutos->id)->inRandomOrder()->limit(4)->get();
            }
        }

        return $versao;
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
    }

    /**
     * Exclui as imagens do banner
     */
    private function excluirBannerImagens(Componente $componente): void
    {
        $banner = $componente->tipo;
        Storage::delete(config('equipamentos.path_imagens') . '/' . $banner->nome_desktop);
        Storage::delete(config('equipamentos.path_imagens') . '/' . $banner->nome_mobile);
    }

    /**
     * Move o componente para cima na ordem
     */
    public function ordemAcima(Componente $componente): void
    {
        $ordem = $componente->ordem;

        if ($ordem <= 2) {
            throw new ValidationException('O componente já está na primeira posição');
        }

        $componenteAnterior = $componente->versao->componentes()->where('ordem', $ordem - 1)->first();
        $componenteAnterior->ordem = $ordem;
        $componenteAnterior->save();

        $componente->ordem = $ordem - 1;
        $componente->save();
    }

    /**
     * Move o componente para baixo na ordem
     */
    public function ordemAbaixo(Componente $componente): void
    {
        $ordem = $componente->ordem;

        if ($ordem >= $componente->versao->componentes()->max('ordem')) {
            throw new ValidationException('O componente já está na última posição');
        }

        $componentePosterior = $componente->versao->componentes()->where('ordem', $ordem + 1)->first();
        $componentePosterior->ordem = $ordem;
        $componentePosterior->save();

        $componente->ordem = $ordem + 1;
        $componente->save();
    }
}
