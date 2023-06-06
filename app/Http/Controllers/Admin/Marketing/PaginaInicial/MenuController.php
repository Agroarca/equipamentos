<?php

namespace App\Http\Controllers\Admin\Marketing\PaginaInicial;

use App\Enums\Marketing\PaginaInicial\StatusVersao;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Marketing\PaginaInicial\Menu\MenuLinkRequest;
use App\Models\Marketing\PaginaInicial\Menu\MenuLink;
use App\Models\Marketing\PaginaInicial\Versao;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function adicionar(Versao $versao): mixed
    {
        Gate::authorize('criar', MenuLink::class);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }

        return Inertia::render('Admin/Marketing/PaginaInicial/Menu/Criar', compact('versao'));
    }

    public function salvar(MenuLinkRequest $request, Versao $versao): mixed
    {
        Gate::authorize('criar', MenuLink::class);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }

        MenuLink::create([
            ...$request->all(),
            'versao_id' => $versao->id,
            'ordem' => $versao->menuLinks()->count() + 1,
        ]);
        return redirect()->route('admin.marketing.paginaInicial.layout', $versao);
    }

    public function editar(Versao $versao, MenuLink $menuLink): mixed
    {
        Gate::authorize('editar', $menuLink);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }

        return Inertia::render('Admin/Marketing/PaginaInicial/Menu/Editar', compact('versao', 'menuLink'));
    }

    public function atualizar(MenuLinkRequest $request, Versao $versao, MenuLink $menuLink): mixed
    {
        Gate::authorize('editar', $menuLink);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }

        $menuLink->update($request->all());
        return redirect()->route('admin.marketing.paginaInicial.layout', $versao);
    }

    public function excluir(Versao $versao, MenuLink $menuLink): mixed
    {
        Gate::authorize('excluir', $menuLink);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }

        $menuLink->delete();
        return redirect()->route('admin.marketing.paginaInicial.layout', $versao);
    }

    public function ordemAcima(Versao $versao, MenuLink $menuLink)
    {
        Gate::authorize('ordem', $menuLink);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }

        $ordem = $menuLink->ordem;

        if ($ordem <= 1) {
            throw ValidationException::withMessages(['ordem' => 'A imagem já está na primeira posição']);
        }

        $linkPosterior = $versao->menuLinks()->where('ordem', $ordem - 1)->first();
        $linkPosterior->ordem = $ordem;
        $linkPosterior->save();

        $menuLink->ordem = $ordem - 1;
        $menuLink->save();

        return redirect()->route('admin.marketing.paginaInicial.layout', compact('versao'));
    }

    public function ordemAbaixo(Versao $versao, MenuLink $menuLink)
    {
        Gate::authorize('ordem', $menuLink);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
        $ordem = $menuLink->ordem;

        if ($ordem >= $versao->menuLinks()->max('ordem')) {
            throw ValidationException::withMessages(['ordem' => 'A imagem já está na última posição']);
        }

        $linkPosterior = $versao->menuLinks()->where('ordem', $ordem + 1)->first();
        $linkPosterior->ordem = $ordem;
        $linkPosterior->save();

        $menuLink->ordem = $ordem + 1;
        $menuLink->save();

        return redirect()->route('admin.marketing.paginaInicial.layout', compact('versao'));
    }
}
