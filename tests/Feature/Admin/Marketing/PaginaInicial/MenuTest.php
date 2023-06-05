<?php

namespace Tests\Feature\Admin\Marketing\PaginaInicial;

use App\Enums\Marketing\PaginaInicial\StatusVersao;
use App\Models\Marketing\PaginaInicial\Menu\MenuLink;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Illuminate\Support\Str;

class MenuTest extends PaginaInicialTestBase
{
    use RefreshDatabase;

    public function testPodeAcessarAdicionar(): void
    {
        $versao = $this->getVersaoBase();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:criar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/adicionar");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/Menu/Criar')
        );
    }

    public function testPodeAdicionar(): void
    {
        $versao = $this->getVersaoBase();
        $nome = Str::random(10);
        $link = Str::random(10);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/menu/salvar", [
                'link' => $link,
                'nome' => $nome,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout', $versao->id);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'link' => $link,
            'nome' => $nome,
        ]);
    }

    public function testNaoPodeAdicionarSemCampos(): void
    {
        $versao = $this->getVersaoBase();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/menu/salvar", []);

        $response->assertInvalid(['nome', 'link']);
    }

    public function testPodeAcessarEditar(): void
    {
        $versao = $this->getVersaoBase();
        $menuLink = MenuLink::factory()->create([
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:editar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$menuLink->id/editar");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/Menu/Editar')
                ->where('versao.id', $versao->id)
                ->where('menuLink.id', $menuLink->id)
        );
    }

    public function testPodeEditar(): void
    {
        $versao = $this->getVersaoBase();
        $menuLink = MenuLink::factory()->create([
            'versao_id' => $versao->id,
        ]);
        $nome = Str::random(10);
        $link = Str::random(10);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:editar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$menuLink->id/atualizar", [
                'link' => $link,
                'nome' => $nome,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout', $versao->id);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $menuLink->id,
            'link' => $link,
            'nome' => $nome,
        ]);
    }

    public function testPodeExcluir(): void
    {
        $versao = $this->getVersaoBase();
        $item = MenuLink::create([
            'ordem' => 1,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$item->id/excluir");

        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout', $versao->id);
        $this->assertDatabaseMissing(app(MenuLink::class)->getTable(), [
            'id' => $item->id,
        ]);
    }

    public function testPodeAlterarOrdemAbaixo(): void
    {
        $versao = $this->getVersaoBase();
        $item1 = MenuLink::create([
            'ordem' => 1,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);
        $item2 = MenuLink::create([
            'ordem' => 2,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$item1->id/ordem/abaixo");

        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout', $versao->id);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 2,
        ]);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 1,
        ]);
    }

    public function testPodeAlterarOrdemAcima(): void
    {
        $versao = $this->getVersaoBase();
        $item1 = MenuLink::create([
            'ordem' => 1,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);
        $item2 = MenuLink::create([
            'ordem' => 2,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$item2->id/ordem/acima");

        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout', $versao->id);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 2,
        ]);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 1,
        ]);
    }

    public function testNaoPodeAlterarOrdemAbaixoUltimoItem(): void
    {
        $versao = $this->getVersaoBase();
        $item1 = MenuLink::create([
            'ordem' => 1,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);
        $item2 = MenuLink::create([
            'ordem' => 2,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$item2->id/ordem/abaixo");

        $response->assertInvalid('ordem');
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAlterarOrdemAcimaPrimeiroItem(): void
    {
        $versao = $this->getVersaoBase();
        $item1 = MenuLink::create([
            'ordem' => 1,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);
        $item2 = MenuLink::create([
            'ordem' => 2,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$item1->id/ordem/acima");

        $response->assertInvalid('ordem');
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 2,
        ]);
    }

    public function naoPodeAcessarAdicionarVersaoAprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:criar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/adicionar");

        $response->assertStatus(403);
    }

    public function testNaoPodeAdicionarVersaoAprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/menu/salvar", [
                'link' => Str::random(10),
                'nome' => Str::random(10),
            ]);

        $response->assertStatus(403);
    }

    public function naoPodeAcessarEditarVersaoAprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();
        $menuLink = MenuLink::factory()->create([
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:editar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$menuLink->id/editar");

        $response->assertStatus(403);
    }

    public function testNaoPodeEditarVersaoAprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();
        $menuLink = MenuLink::factory()->create([
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:editar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$menuLink->id/atualizar", [
                'link' => Str::random(10),
                'nome' => Str::random(10),
            ]);

        $response->assertStatus(403);
    }

    public function testNaoPodeExcluirVersaoAprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();
        $menuLink = MenuLink::factory()->create([
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$menuLink->id/excluir");

        $response->assertStatus(403);
    }

    public function testNaoPodeAlterarOrdemAcimaAprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();
        $item1 = MenuLink::create([
            'ordem' => 1,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);
        $item2 = MenuLink::create([
            'ordem' => 2,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$item2->id/ordem/acima");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAlterarOrdemAbaixoAprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();
        $item1 = MenuLink::create([
            'ordem' => 1,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);
        $item2 = MenuLink::create([
            'ordem' => 2,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$item1->id/ordem/abaixo");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAdicionarVersaoReprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/menu/salvar", [
                'link' => Str::random(10),
                'nome' => Str::random(10),
            ]);

        $response->assertStatus(403);
    }

    public function naoPodeAcessarEditarVersaoReprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();
        $menuLink = MenuLink::factory()->create([
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:editar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$menuLink->id/editar");

        $response->assertStatus(403);
    }

    public function testNaoPodeEditarVersaoReprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();
        $menuLink = MenuLink::factory()->create([
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:editar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$menuLink->id/atualizar", [
                'link' => Str::random(10),
                'nome' => Str::random(10),
            ]);

        $response->assertStatus(403);
    }

    public function testNaoPodeExcluirVersaoReprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();
        $menuLink = MenuLink::factory()->create([
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$menuLink->id/excluir");

        $response->assertStatus(403);
    }

    public function testNaoPodeAlterarOrdemAcimaReprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();
        $item1 = MenuLink::create([
            'ordem' => 1,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);
        $item2 = MenuLink::create([
            'ordem' => 2,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$item1->id/ordem/acima");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAlterarOrdemAbaixoReprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();
        $item1 = MenuLink::create([
            'ordem' => 1,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);
        $item2 = MenuLink::create([
            'ordem' => 2,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$item2->id/ordem/abaixo");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAdicionarVersaoPublicada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/menu/salvar", [
                'link' => Str::random(10),
                'nome' => Str::random(10),
            ]);

        $response->assertStatus(403);
    }

    public function naoPodeAcessarEditarVersaoPublicada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();
        $menuLink = MenuLink::factory()->create([
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:editar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$menuLink->id/editar");

        $response->assertStatus(403);
    }

    public function testNaoPodeEditarVersaoPublicada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();
        $menuLink = MenuLink::factory()->create([
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:editar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$menuLink->id/atualizar", [
                'link' => Str::random(10),
                'nome' => Str::random(10),
            ]);

        $response->assertStatus(403);
    }

    public function testNaoPodeExcluirVersaoPublicada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();
        $menuLink = MenuLink::factory()->create([
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$menuLink->id/excluir");

        $response->assertStatus(403);
    }

    public function testNaoPodeAlterarOrdemAcimaPublicada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();
        $item1 = MenuLink::create([
            'ordem' => 1,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);
        $item2 = MenuLink::create([
            'ordem' => 2,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$item1->id/ordem/acima");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAlterarOrdemAbaixoPublicada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();
        $item1 = MenuLink::create([
            'ordem' => 1,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);
        $item2 = MenuLink::create([
            'ordem' => 2,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.menu.menu-link:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$item2->id/ordem/abaixo");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAcessarAdicionarSemPermissao(): void
    {
        $versao = $this->getVersaoBase();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/adicionar");

        $response->assertStatus(403);
    }

    public function testNaoPodeAdicionarSemPermissao(): void
    {
        $versao = $this->getVersaoBase();
        $nome = Str::random(10);
        $link = Str::random(10);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/menu/salvar", [
                'link' => $link,
                'nome' => $nome,
            ]);

        $response->assertStatus(403);
        $this->assertDatabaseMissing(app(MenuLink::class)->getTable(), [
            'link' => $link,
            'nome' => $nome,
        ]);
    }

    public function testNaoPodeAcessarEditarSemPermissao(): void
    {
        $versao = $this->getVersaoBase();
        $menuLink = MenuLink::factory()->create([
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$menuLink->id/editar");

        $response->assertStatus(403);
    }

    public function testNaoPodeEditarSemPermissao(): void
    {
        $versao = $this->getVersaoBase();
        $menuLink = MenuLink::factory()->create([
            'versao_id' => $versao->id,
        ]);
        $nome = Str::random(10);
        $link = Str::random(10);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$menuLink->id/atualizar", [
                'link' => $link,
                'nome' => $nome,
            ]);

        $response->assertStatus(403);
        $this->assertDatabaseMissing(app(MenuLink::class)->getTable(), [
            'id' => $menuLink->id,
            'link' => $link,
            'nome' => $nome,
        ]);
    }

    public function testNaoPodeExcluirSemPermissao(): void
    {
        $versao = $this->getVersaoBase();
        $item = MenuLink::create([
            'ordem' => 1,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$item->id/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(MenuLink::class)->getTable(), [
            'id' => $item->id,
        ]);
    }

    public function testNaoPodeAlterarOrdemAbaixoSemPermissao(): void
    {
        $versao = $this->getVersaoBase();
        $item1 = MenuLink::create([
            'ordem' => 1,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$item1->id/ordem/abaixo");

        $response->assertStatus(403);
    }

    public function testNaoPodeAlterarOrdemAcimaSemPermissao(): void
    {
        $versao = $this->getVersaoBase();
        $item2 = MenuLink::create([
            'ordem' => 2,
            'nome' => Str::random(10),
            'link' => Str::random(10),
            'versao_id' => $versao->id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/menu/$item2->id/ordem/acima");

        $response->assertStatus(403);
    }
}
