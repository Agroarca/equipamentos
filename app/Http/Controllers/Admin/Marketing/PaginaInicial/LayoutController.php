<?php

namespace App\Http\Controllers\Admin\Marketing\PaginaInicial;

use App\Http\Controllers\Controller;
use App\Models\Marketing\PaginaInicial\Componente;
use App\Models\Marketing\PaginaInicial\Versao;
use App\Services\Site\PaginaInicialService;
use Inertia\Inertia;

class LayoutController extends Controller
{
    public function __construct(
        private PaginaInicialService $paginaInicialService
    ) {
    }

    public function inicio(Versao $versao): mixed
    {
        $this->paginaInicialService->carregarVersao($versao);
        return Inertia::Render('Admin/Marketing/PaginaInicial/Layout/Inicio', compact('versao'));
    }

    public function excluirComponente(Versao $versao, Componente $componente): mixed
    {
        $this->paginaInicialService->excluirComponente($componente);
        return redirect()->route('admin.marketing.paginaInicial.layout', $versao);
    }

    public function ordemAcima(Versao $versao, Componente $componente): mixed
    {
        $this->paginaInicialService->ordemAcima($componente);
        return redirect()->route('admin.marketing.paginaInicial.layout', $versao);
    }

    public function ordemAbaixo(Versao $versao, Componente $componente): mixed
    {
        $this->paginaInicialService->ordemAbaixo($componente);
        return redirect()->route('admin.marketing.paginaInicial.layout', $versao);
    }
}
