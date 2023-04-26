<?php

namespace App\Http\Controllers\Admin\Marketing\PaginaInicial;

use App\Enums\Marketing\PaginaInicial\StatusVersao;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Marketing\PaginaInicial\Carrossel\AdicionarImagemRequest;
use App\Models\Marketing\PaginaInicial\Carrossel\CarrosselItem;
use App\Models\Marketing\PaginaInicial\Versao;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CarrosselController extends Controller
{
    public function visualizar(Versao $versao)
    {
        $versao->load([
            'carrosselItens' => fn ($query) => $query->orderBy('ordem'),
        ]);
        return Inertia::Render('Admin/Marketing/PaginaInicial/CarrosselPrincipal/Visualizar', compact('versao'));
    }

    public function adicionar(Versao $versao): mixed
    {
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
        return Inertia::Render('Admin/Marketing/PaginaInicial/CarrosselPrincipal/AdicionarImagem', compact('versao'));
    }

    public function salvar(AdicionarImagemRequest $request, Versao $versao): mixed
    {
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
        $imagemDesktop = $request->file('imagem_desktop');
        $imagemDesktop->store(config('equipamentos.path_imagens'));

        $imagemMobile = $request->file('imagem_mobile');
        $imagemMobile->store(config('equipamentos.path_imagens'));

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
        if ($versao->status !== StatusVersao::Criado) {
            $nome = $versao->status->name;
            abort(403, "Não é possivel editar uma versao com status $nome");
        }
        Storage::delete(config('equipamentos.path_imagens') . '/' . $item->nome_arquivo_desktop);
        Storage::delete(config('equipamentos.path_imagens') . '/' . $item->nome_arquivo_mobile);
        $item->delete();

        return redirect()->route('admin.marketing.paginaInicial.layout.carrossel.visualizar', $versao->id);
    }

    public function visualizarItem(Versao $versao, CarrosselItem $item): mixed
    {
        return Inertia::Render(
            'Admin/Marketing/PaginaInicial/CarrosselPrincipal/VisualizarItem',
            compact('versao', 'item')
        );
    }
}
