<?php

namespace App\Http\Controllers\Admin\Marketing\PaginaInicial;

use App\Enums\Marketing\PaginaInicial\StatusVersao;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Marketing\PaginaInicial\VersaoRequest;
use App\Models\Marketing\PaginaInicial\Versao;
use App\Services\Site\PaginaInicialService;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class VersaoController extends Controller
{
    public function __construct(
        private PaginaInicialService $paginaInicialService
    ) {
    }

    public function inicio(): mixed
    {
        Gate::authorize('ver', Versao::class);
        $versoes = Versao::paginate();
        $statusVersao = StatusVersao::toArray();
        return Inertia::render('Admin/Marketing/PaginaInicial/Versao/Inicio', compact('versoes', 'statusVersao'));
    }

    public function criar(): mixed
    {
        Gate::authorize('criar', Versao::class);
        return Inertia::render('Admin/Marketing/PaginaInicial/Versao/Criar');
    }

    public function salvar(VersaoRequest $request): mixed
    {
        Gate::authorize('criar', Versao::class);
        Versao::create($request->all());
        return redirect()->route('admin.marketing.paginaInicial');
    }

    public function visualizar(Versao $versao): mixed
    {
        Gate::authorize('ver', $versao);
        $this->paginaInicialService->carregarVersaoSemCache($versao);
        return Inertia::render('Admin/Marketing/PaginaInicial/Versao/Visualizar', compact('versao'));
    }

    public function editar(Versao $versao): mixed
    {
        Gate::authorize('editar', $versao);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
        return Inertia::render('Admin/Marketing/PaginaInicial/Versao/Editar', compact('versao'));
    }

    public function atualizar(VersaoRequest $request, Versao $versao): mixed
    {
        Gate::authorize('editar', $versao);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
        $versao->update($request->all());
        return redirect()->route('admin.marketing.paginaInicial');
    }

    public function excluir(Versao $versao): mixed
    {
        Gate::authorize('excluir', $versao);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
        $versao->delete();
        return redirect()->route('admin.marketing.paginaInicial');
    }

    public function aprovar(Versao $versao)
    {
        Gate::authorize('aprovar', $versao);
        if ($versao->status !== StatusVersao::Criado) {
            throw ValidationException::withMessages([
                'status' => 'Não é possivel aprovar uma versão com status diferente de criado',
            ]);
        }
        $this->paginaInicialService->validarVersao($versao);
        $versao->status = StatusVersao::Aprovado;
        $versao->save();
    }

    public function reprovar(Versao $versao)
    {
        Gate::authorize('reprovar', $versao);
        if ($versao->status !== StatusVersao::Criado) {
            throw ValidationException::withMessages([
                'status' => 'Não é possivel aprovar uma versão com status diferente de criado',
            ]);
        }
        $versao->status = StatusVersao::Reprovado;
        $versao->save();
    }

    public function publicar(Versao $versao)
    {
        Gate::authorize('publicar', $versao);
        if ($versao->status !== StatusVersao::Aprovado) {
            throw ValidationException::withMessages([
                'status' => 'Não é possivel publicar uma versão com status diferente de aprovado',
            ]);
        }
        $versao->status = StatusVersao::Publicado;
        $versao->save();
        Cache::tags('pagina-inicial')->flush();
    }

    public function voltar(Versao $versao)
    {
        Gate::authorize('voltar', $versao);
        $versao->status = StatusVersao::Criado;
        $versao->save();
        Cache::tags('pagina-inicial')->flush();
    }
}
