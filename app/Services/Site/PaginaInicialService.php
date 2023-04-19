<?php

namespace App\Services\Site;

use App\Enums\Marketing\PaginaInicial\StatusVersao;
use App\Models\Marketing\PaginaInicial\Banners\Banner;
use App\Models\Marketing\PaginaInicial\Componente;
use App\Models\Marketing\PaginaInicial\Grid\Grid;
use App\Models\Marketing\PaginaInicial\ListaProdutos\Lista;
use App\Models\Marketing\PaginaInicial\Versao;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Storage;

class PaginaInicialService
{
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
        return $versao->load([
            'carrosselItens' => fn ($query) => $query->orderBy('ordem'),
            'componentes' => fn ($query) => $query->orderBy('ordem'),
            'componentes.tipo',
            'componentes.tipo.imagens',
            'componentes.tipo.listaProdutos',
        ]);
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
}