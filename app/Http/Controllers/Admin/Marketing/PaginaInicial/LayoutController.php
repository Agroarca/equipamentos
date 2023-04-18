<?php

namespace App\Http\Controllers\Admin\Marketing\PaginaInicial;

use App\Http\Controllers\Controller;
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
}
