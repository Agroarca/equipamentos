<?php

namespace App\Http\Controllers\Admin\Marketing\PaginaInicial;

use App\Enums\Marketing\PaginaInicial\StatusVersao;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Marketing\PaginaInicial\Carrossel\AdicionarImagemRequest;
use App\Models\Marketing\PaginaInicial\Carrossel\CarrosselItem;
use App\Models\Marketing\PaginaInicial\Versao;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class CarrosselController extends Controller
{
    public function visualizar(Versao $versao)
    {
        Gate::authorize('ver', CarrosselItem::class);
        $versao->load([
            'carrosselItens' => fn ($query) => $query->orderBy('ordem'),
        ]);
        return Inertia::Render('Admin/Marketing/PaginaInicial/CarrosselPrincipal/Visualizar', compact('versao'));
    }

    public function adicionar(Versao $versao): mixed
    {
        Gate::authorize('criar', CarrosselItem::class);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
        return Inertia::Render('Admin/Marketing/PaginaInicial/CarrosselPrincipal/AdicionarImagem', compact('versao'));
    }

    public function salvar(AdicionarImagemRequest $request, Versao $versao): mixed
    {
        Gate::authorize('criar', CarrosselItem::class);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
        $imagemDesktop = $request->file('imagem_desktop');
        $imagemDesktop->store(config('equipamentos.imagens.pagina_inicial'));

        $imagemMobile = $request->file('imagem_mobile');
        $imagemMobile->store(config('equipamentos.imagens.pagina_inicial'));

        $item = new CarrosselItem($request->all());
        $item->versao_id = $versao->id;
        $item->nome_arquivo_desktop = $imagemDesktop->hashName();
        $item->nome_arquivo_mobile = $imagemMobile->hashName();
        $item->ordem = $versao->carrosselItens()->count() + 1;
        $item->save();

        return redirect()->route('admin.marketing.paginaInicial.layout.carrossel.visualizar', $versao->id);
    }

    public function excluir(Versao $versao, CarrosselItem $item): mixed
    {
        Gate::authorize('excluir', $item);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
        Storage::delete(config('equipamentos.imagens.pagina_inicial') . '/' . $item->nome_arquivo_desktop);
        Storage::delete(config('equipamentos.imagens.pagina_inicial') . '/' . $item->nome_arquivo_mobile);
        $item->delete();

        $versao->carrosselItens()->where('ordem', '>', $item->ordem)->decrement('ordem');

        return redirect()->route('admin.marketing.paginaInicial.layout.carrossel.visualizar', $versao->id);
    }

    public function visualizarItem(Versao $versao, CarrosselItem $item): mixed
    {
        Gate::authorize('ver', $item);
        return Inertia::Render(
            'Admin/Marketing/PaginaInicial/CarrosselPrincipal/VisualizarItem',
            compact('versao', 'item')
        );
    }

    public function ordemAcima(Versao $versao, CarrosselItem $item): mixed
    {
        Gate::authorize('ordem', $item);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }

        $ordem = $item->ordem;
        if ($ordem <= 1) {
            throw ValidationException::withMessages(['ordem' => 'A imagem já está na primeira posição']);
        }

        $itemPosterior = $versao->carrosselItens()->where('ordem', $ordem - 1)->first();
        $itemPosterior->ordem = $ordem;
        $itemPosterior->save();

        $item->ordem = $ordem - 1;
        $item->save();

        return redirect()->route('admin.marketing.paginaInicial.layout.carrossel.visualizar', [$versao]);
    }

    public function ordemAbaixo(Versao $versao, CarrosselItem $item)
    {
        Gate::authorize('ordem', $item);
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }

        $ordem = $item->ordem;
        if ($ordem >= $versao->carrosselItens()->max('ordem')) {
            throw ValidationException::withMessages(['ordem' => 'A imagem já está na última posição']);
        }

        $itemPosterior = $versao->carrosselItens()->where('ordem', $ordem + 1)->first();
        $itemPosterior->ordem = $ordem;
        $itemPosterior->save();

        $item->ordem = $ordem + 1;
        $item->save();

        return redirect()->route('admin.marketing.paginaInicial.layout.carrossel.visualizar', [$versao]);
    }
}
