<?php

namespace App\Services\Site;

use App\Enums\Marketing\PaginaInicial\StatusVersao;
use App\Models\Marketing\PaginaInicial\Versao;
use Carbon\Carbon;

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
        ]);
    }
}
