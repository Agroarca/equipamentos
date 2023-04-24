<?php

namespace App\Http\Controllers\Admin\Marketing\PaginaInicial;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Marketing\PaginaInicial\Banner\AdicionarBannerRequest;
use App\Models\Marketing\PaginaInicial\Banners\Banner;
use App\Models\Marketing\PaginaInicial\Componente;
use App\Models\Marketing\PaginaInicial\Versao;
use App\Services\Site\PaginaInicialService;
use Inertia\Inertia;

class BannerController extends Controller
{
    public function __construct(
        private PaginaInicialService $paginaInicialService
    ) {
    }

    public function adicionar(Versao $versao): mixed
    {
        return Inertia::render('Admin/Marketing/PaginaInicial/Banner/Adicionar', compact('versao'));
    }

    public function salvar(AdicionarBannerRequest $request, Versao $versao): mixed
    {
        $banner = new Banner($request->all());

        $imagemDesktop = $request->file('imagem_desktop');
        $imagemDesktop->store(config('equipamentos.path_imagens'));
        $banner->nome_desktop = $imagemDesktop->hashName();

        if ($request->hasFile('imagem_mobile')) {
            $imagemMobile = $request->file('imagem_mobile');
            $imagemMobile->store(config('equipamentos.path_imagens'));
            $banner->nome_mobile = $imagemMobile->hashName();
        }

        $banner->save();

        $componente = new Componente($request->only([
            'titulo',
            'subtitulo',
            'tela_cheia',
        ]));

        $componente->ordem = $this->paginaInicialService->proximaOrdem($versao);
        $componente->tipo()->associate($banner);
        $componente->versao_id = $versao->id;
        $componente->save();

        return redirect()->route('admin.marketing.paginaInicial.layout', $versao);
    }

    public function visualizar(Versao $versao, Banner $banner): mixed
    {
        $banner->load('componente');
        return Inertia::render('Admin/Marketing/PaginaInicial/Banner/Visualizar', compact('versao', 'banner'));
    }
}
