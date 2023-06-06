<?php

namespace Tests\Feature\Admin\Marketing\PaginaInicial;

use App\Enums\Marketing\PaginaInicial\StatusVersao;
use App\Models\Marketing\PaginaInicial\Banners\Banner;
use App\Models\Marketing\PaginaInicial\Componente;
use App\Models\Marketing\PaginaInicial\Grid\Grid;
use App\Models\Marketing\PaginaInicial\ListaProdutos\Lista;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;

class LayoutTest extends PaginaInicialTestBase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $versao = $this->getVersaoBase();
        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.versao:ver'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout");

        $response->assertStatus(200);
        $response->assertInertia(
            fn ($page) => $page
                ->component('Admin/Marketing/PaginaInicial/Layout/Inicio')
                ->has('versao')
                ->where('versao.id', $versao->id)
        );
    }

    public function testPodeAcessarComDados(): void
    {
        $versao = $this->getVersaoCompleto();
        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.versao:ver'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout");

        $response->assertStatus(200);
        $response->assertInertia(
            fn ($page) => $page
                ->component('Admin/Marketing/PaginaInicial/Layout/Inicio')
                ->has('versao')
                ->where('versao.id', $versao->id)
                ->has('versao.carrossel_itens', 2)
                ->has('versao.componentes', 3)
                ->where('versao.componentes.0.tipo_type', Banner::class)
                ->where('versao.componentes.1.tipo_type', Lista::class)
                ->where('versao.componentes.2.tipo_type', Grid::class)
                ->has('versao.componentes.2.tipo.imagens', 3)
        );
    }

    public function testPodeExcluirBanner(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $banner = $this->criarBannerComImagem($versao);

        $componenteId = $banner->componente->id;
        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componenteId/excluir");


        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $banner->nome_desktop);
        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout', $versao->id);
        $this->assertDatabaseMissing(app(Banner::class)->getTable(), [
            'id' => $banner->id,
        ]);
        $this->assertDatabaseMissing(app(Componente::class)->getTable(), [
            'id' => $componenteId,
        ]);
    }

    public function testPodeExcluirGrid(): void
    {
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);

        $componenteId = $grid->componente->id;
        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componenteId/excluir");


        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout', $versao->id);
        $this->assertDatabaseMissing(app(Grid::class)->getTable(), [
            'id' => $grid->id,
        ]);
        $this->assertDatabaseMissing(app(Componente::class)->getTable(), [
            'id' => $componenteId,
        ]);
    }

    public function testPodeExcluirListaProdutos(): void
    {
        $versao = $this->getVersaoBase();
        $lista = $this->criarLista($versao);

        $componenteId = $lista->componente->id;
        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componenteId/excluir");

        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout', $versao->id);
        $this->assertDatabaseMissing(app(Lista::class)->getTable(), [
            'id' => $lista->id,
        ]);
        $this->assertDatabaseMissing(app(Componente::class)->getTable(), [
            'id' => $componenteId,
        ]);
    }

    public function testPodeAlterarOrdemAcima(): void
    {
        $versao = $this->getVersaoCompleto();

        $componente1 = $versao->componentes[0];
        $componente1->ordem = 2;
        $componente1->save();

        $componente2 = $versao->componentes[1];
        $componente2->ordem = 3;
        $componente2->save();

        $componente3 = $versao->componentes[2];
        $componente3->ordem = 4;
        $componente3->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componente2->id/ordem/acima"
        );

        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout', $versao->id);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente1->id,
            'ordem' => 3,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente2->id,
            'ordem' => 2,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente3->id,
            'ordem' => 4,
        ]);
    }

    public function testNaoPodeAlterarOrdemAcimaPrimeiroComponente(): void
    {
        $versao = $this->getVersaoCompleto();

        $componente1 = $versao->componentes[0];
        $componente1->ordem = 2;
        $componente1->save();

        $componente2 = $versao->componentes[1];
        $componente2->ordem = 3;
        $componente2->save();

        $componente3 = $versao->componentes[2];
        $componente3->ordem = 4;
        $componente3->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componente1->id/ordem/acima"
        );

        $response->assertInvalid(['ordem']);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente1->id,
            'ordem' => 2,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente2->id,
            'ordem' => 3,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente3->id,
            'ordem' => 4,
        ]);
    }

    public function testPodeAlterarOrdemAbaixo(): void
    {
        $versao = $this->getVersaoCompleto();

        $componente1 = $versao->componentes[0];
        $componente1->ordem = 2;
        $componente1->save();

        $componente2 = $versao->componentes[1];
        $componente2->ordem = 3;
        $componente2->save();

        $componente3 = $versao->componentes[2];
        $componente3->ordem = 4;
        $componente3->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componente2->id/ordem/abaixo"
        );

        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout', $versao->id);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente1->id,
            'ordem' => 2,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente2->id,
            'ordem' => 4,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente3->id,
            'ordem' => 3,
        ]);
    }

    public function testNaoPodeAlterarOrdemAbaixoUltimoComponente(): void
    {
        $versao = $this->getVersaoCompleto();

        $componente1 = $versao->componentes[0];
        $componente1->ordem = 2;
        $componente1->save();

        $componente2 = $versao->componentes[1];
        $componente2->ordem = 3;
        $componente2->save();

        $componente3 = $versao->componentes[2];
        $componente3->ordem = 4;
        $componente3->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componente3->id/ordem/abaixo"
        );

        $response->assertInvalid(['ordem']);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente1->id,
            'ordem' => 2,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente2->id,
            'ordem' => 3,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente3->id,
            'ordem' => 4,
        ]);
    }

    public function testNaoPodeExcluirBannerVersaoAprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $banner = $this->criarBanner($versao);

        $componenteId = $banner->componente->id;
        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componenteId/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Banner::class)->getTable(), [
            'id' => $banner->id,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componenteId,
        ]);
    }

    public function testNaoPodeExcluirBannerVersaoReprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $banner = $this->criarBanner($versao);

        $componenteId = $banner->componente->id;
        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componenteId/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Banner::class)->getTable(), [
            'id' => $banner->id,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componenteId,
        ]);
    }

    public function testNaoPodeExcluirBannerVersaoPublicada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $banner = $this->criarBanner($versao);

        $componenteId = $banner->componente->id;
        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componenteId/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Banner::class)->getTable(), [
            'id' => $banner->id,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componenteId,
        ]);
    }

    public function testNaoPodeExcluirGridVersaoAprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $grid = $this->criarGrid($versao);

        $componenteId = $grid->componente->id;
        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componenteId/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Grid::class)->getTable(), [
            'id' => $grid->id,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componenteId,
        ]);
    }

    public function testNaoPodeExcluirGridVersaoReprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $grid = $this->criarGrid($versao);

        $componenteId = $grid->componente->id;
        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componenteId/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Grid::class)->getTable(), [
            'id' => $grid->id,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componenteId,
        ]);
    }

    public function testNaoPodeExcluirGridVersaoPublicada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $grid = $this->criarGrid($versao);

        $componenteId = $grid->componente->id;
        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componenteId/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Grid::class)->getTable(), [
            'id' => $grid->id,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componenteId,
        ]);
    }

    public function testNaoPodeExcluirListaProdutosVersaoAprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $lista = $this->criarLista($versao);

        $componenteId = $lista->componente->id;
        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componenteId/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Lista::class)->getTable(), [
            'id' => $lista->id,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componenteId,
        ]);
    }

    public function testNaoPodeExcluirListaProdutosVersaoReprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $lista = $this->criarLista($versao);

        $componenteId = $lista->componente->id;
        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componenteId/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Lista::class)->getTable(), [
            'id' => $lista->id,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componenteId,
        ]);
    }

    public function testNaoPodeExcluirListaProdutosVersaoPublicada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $lista = $this->criarLista($versao);

        $componenteId = $lista->componente->id;
        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componenteId/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Lista::class)->getTable(), [
            'id' => $lista->id,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componenteId,
        ]);
    }

    public function testNaoPodeAlterarOrdemAcimaVersaoAprovada(): void
    {
        $versao = $this->getVersaoCompleto();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $componente1 = $versao->componentes[0];
        $componente1->ordem = 2;
        $componente1->save();

        $componente2 = $versao->componentes[1];
        $componente2->ordem = 3;
        $componente2->save();

        $componente3 = $versao->componentes[2];
        $componente3->ordem = 4;
        $componente3->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componente2->id/ordem/acima"
        );

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente1->id,
            'ordem' => 2,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente2->id,
            'ordem' => 3,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente3->id,
            'ordem' => 4,
        ]);
    }

    public function testNaoPodeAlterarOrdemAcimaVersaoReprovada(): void
    {
        $versao = $this->getVersaoCompleto();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $componente1 = $versao->componentes[0];
        $componente1->ordem = 2;
        $componente1->save();

        $componente2 = $versao->componentes[1];
        $componente2->ordem = 3;
        $componente2->save();

        $componente3 = $versao->componentes[2];
        $componente3->ordem = 4;
        $componente3->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componente2->id/ordem/acima"
        );

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente1->id,
            'ordem' => 2,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente2->id,
            'ordem' => 3,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente3->id,
            'ordem' => 4,
        ]);
    }

    public function testNaoPodeAlterarOrdemAcimaVersaoPublicada(): void
    {
        $versao = $this->getVersaoCompleto();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $componente1 = $versao->componentes[0];
        $componente1->ordem = 2;
        $componente1->save();

        $componente2 = $versao->componentes[1];
        $componente2->ordem = 3;
        $componente2->save();

        $componente3 = $versao->componentes[2];
        $componente3->ordem = 4;
        $componente3->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componente2->id/ordem/acima"
        );

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente1->id,
            'ordem' => 2,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente2->id,
            'ordem' => 3,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente3->id,
            'ordem' => 4,
        ]);
    }

    public function testNaoPodeAlterarOrdemAbaixoVersaoAprovada(): void
    {
        $versao = $this->getVersaoCompleto();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $componente1 = $versao->componentes[0];
        $componente1->ordem = 2;
        $componente1->save();

        $componente2 = $versao->componentes[1];
        $componente2->ordem = 3;
        $componente2->save();

        $componente3 = $versao->componentes[2];
        $componente3->ordem = 4;
        $componente3->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componente2->id/ordem/abaixo"
        );

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente1->id,
            'ordem' => 2,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente2->id,
            'ordem' => 3,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente3->id,
            'ordem' => 4,
        ]);
    }

    public function testNaoPodeAlterarOrdemAbaixoVersaoReprovada(): void
    {
        $versao = $this->getVersaoCompleto();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $componente1 = $versao->componentes[0];
        $componente1->ordem = 2;
        $componente1->save();

        $componente2 = $versao->componentes[1];
        $componente2->ordem = 3;
        $componente2->save();

        $componente3 = $versao->componentes[2];
        $componente3->ordem = 4;
        $componente3->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componente2->id/ordem/abaixo"
        );

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente1->id,
            'ordem' => 2,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente2->id,
            'ordem' => 3,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente3->id,
            'ordem' => 4,
        ]);
    }

    public function testNaoPodeAlterarOrdemAbaixoVersaoPublicada(): void
    {
        $versao = $this->getVersaoCompleto();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $componente1 = $versao->componentes[0];
        $componente1->ordem = 2;
        $componente1->save();

        $componente2 = $versao->componentes[1];
        $componente2->ordem = 3;
        $componente2->save();

        $componente3 = $versao->componentes[2];
        $componente3->ordem = 4;
        $componente3->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.componente:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componente2->id/ordem/abaixo"
        );

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente1->id,
            'ordem' => 2,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente2->id,
            'ordem' => 3,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componente3->id,
            'ordem' => 4,
        ]);
    }

    public function testNaoPodeAcessarSemPermissao(): void
    {
        $versao = $this->getVersaoBase();
        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout");

        $response->assertStatus(403);
    }

    public function testNaoPodeExcluirBannerSemPermissao(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $banner = $this->criarBannerComImagem($versao);

        $componenteId = $banner->componente->id;
        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componenteId/excluir");


        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Banner::class)->getTable(), [
            'id' => $banner->id,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componenteId,
        ]);
    }

    public function testNaoPodeExcluirGridSemPermissao(): void
    {
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);

        $componenteId = $grid->componente->id;
        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componenteId/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Grid::class)->getTable(), [
            'id' => $grid->id,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componenteId,
        ]);
    }

    public function testNaoPodeExcluirListaProdutosSemPermissao(): void
    {
        $versao = $this->getVersaoBase();
        $lista = $this->criarLista($versao);

        $componenteId = $lista->componente->id;
        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componenteId/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Lista::class)->getTable(), [
            'id' => $lista->id,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'id' => $componenteId,
        ]);
    }

    public function testNaoPodeAlterarOrdemAcimaSemPermissao(): void
    {
        $versao = $this->getVersaoCompleto();

        $componente1 = $versao->componentes[0];
        $componente1->ordem = 2;
        $componente1->save();

        $componente2 = $versao->componentes[1];
        $componente2->ordem = 3;
        $componente2->save();

        $componente3 = $versao->componentes[2];
        $componente3->ordem = 4;
        $componente3->save();

        $response = $this->actingAs($this->getAdmin())->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componente2->id/ordem/acima"
        );

        $response->assertStatus(403);
    }

    public function testNaoPodeAlterarOrdemAbaixoSemPermissao(): void
    {
        $versao = $this->getVersaoCompleto();

        $componente1 = $versao->componentes[0];
        $componente1->ordem = 2;
        $componente1->save();

        $componente2 = $versao->componentes[1];
        $componente2->ordem = 3;
        $componente2->save();

        $componente3 = $versao->componentes[2];
        $componente3->ordem = 4;
        $componente3->save();

        $response = $this->actingAs($this->getAdmin())->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/componente/$componente2->id/ordem/abaixo"
        );

        $response->assertStatus(403);
    }
}
