<?php

namespace App\Http\Controllers\Admin\Marketing\PaginaInicial;

use App\Enums\Marketing\PaginaInicial\StatusVersao;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Marketing\PaginaInicial\VersaoRequest;
use App\Models\Marketing\PaginaInicial\Versao;
use App\Services\Site\PaginaInicialService;
use Inertia\Inertia;

class VersaoController extends Controller
{
    public function __construct(
        private PaginaInicialService $paginaInicialService
    ) {
    }

    public function inicio(): mixed
    {
        $versoes = Versao::paginate();
        $statusVersao = StatusVersao::toArray();
        return Inertia::render('Admin/Marketing/PaginaInicial/Versao/Inicio', compact('versoes', 'statusVersao'));
    }

    public function criar(): mixed
    {
        return Inertia::render('Admin/Marketing/PaginaInicial/Versao/Criar');
    }

    public function salvar(VersaoRequest $request): mixed
    {
        Versao::create($request->all());
        return redirect()->route('admin.marketing.paginaInicial');
    }

    public function visualizar(Versao $versao): mixed
    {
        $this->paginaInicialService->carregarVersao($versao);
        return Inertia::render('Admin/Marketing/PaginaInicial/Versao/Visualizar', compact('versao'));
    }

    public function editar(Versao $versao): mixed
    {
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
        return Inertia::render('Admin/Marketing/PaginaInicial/Versao/Editar', compact('versao'));
    }

    public function atualizar(VersaoRequest $request, Versao $versao): mixed
    {
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
        $versao->update($request->all());
        return redirect()->route('admin.marketing.paginaInicial');
    }

    public function excluir(Versao $versao): mixed
    {
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
        $versao->delete();
        return redirect()->route('admin.marketing.paginaInicial');
    }

    public function aprovar(Versao $versao)
    {
        $this->paginaInicialService->validarVersao($versao);
        $versao->status = StatusVersao::Aprovado;
        $versao->save();
    }

    public function reprovar(Versao $versao)
    {
        $versao->status = StatusVersao::Reprovado;
        $versao->save();
    }

    public function publicar(Versao $versao)
    {
        $versao->status = StatusVersao::Publicado;
        $versao->save();
    }

    public function voltar(Versao $versao)
    {
        $versao->status = StatusVersao::Criado;
        $versao->save();
    }
}
