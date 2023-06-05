<?php

namespace Tests\Feature\Admin\Marketing\PaginaInicial;

use App\Enums\Marketing\PaginaInicial\Grid\Formato;
use App\Enums\Marketing\PaginaInicial\StatusVersao;
use App\Models\Marketing\PaginaInicial\Grid\Grid;
use App\Models\Marketing\PaginaInicial\Grid\GridImagem;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia;
use Illuminate\Support\Str;

class GridTest extends PaginaInicialTestBase
{
    use RefreshDatabase;

    public function testPodeAcessarAdicionar(): void
    {
        $versao = $this->getVersaoBase();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:criar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/adicionar");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/Grid/Adicionar')
                ->has('formatos', count(Formato::values()))
        );
    }

    public function testPodeCriarNovo(): void
    {
        $versao = $this->getVersaoBase();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/grid/salvar", [
                'tela_cheia' => true,
                'formato' => Formato::Banner_3x1_1x3->value,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout', $versao->id);
        $this->assertDatabaseHas(app(Grid::class)->getTable(), [
            'formato' => Formato::Banner_3x1_1x3->value,
        ]);
    }

    public function testPodeVisualizar(): void
    {
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:ver'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/visualizar");


        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/Grid/Visualizar')
                ->has('formato')
                ->where('versao.id', $versao->id)
                ->where('grid.id', $grid->id)
        );
    }

    public function testPodeVisualizarComDados(): void
    {
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);
        $this->criarGridImagem($grid, 3);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:ver'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/visualizar");


        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/Grid/Visualizar')
                ->has('formato')
                ->where('versao.id', $versao->id)
                ->where('grid.id', $grid->id)
                ->has('grid.imagens', 3)
        );
    }

    public function testPodeAcessarAdicionarImagem(): void
    {
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid-imagem:criar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/adicionar");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/Grid/AdicionarImagem')
        );
    }

    public function testPodeAdicionarImagem(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);
        $link = Str::random(10);
        $descricao = Str::random(10);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 500, 500);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid-imagem:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/salvar", [
                'link' => $link,
                'descricao' => $descricao,
                'imagem_desktop' => $imagemDesktop,
            ]);

        $response->assertValid();
        Storage::assertExists(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout.grid.visualizar', [
            $versao->id,
            $grid->id,
        ]);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'link' => $link,
            'descricao' => $descricao,
            'nome_desktop' => $imagemDesktop->hashName(),
        ]);
    }

    public function testPodeAdicionarImagemDeskEMobile(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);
        $link = Str::random(10);
        $descricao = Str::random(10);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 500, 500);
        $imagemMobile = UploadedFile::fake()->image('imagem.png', 500, 500);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid-imagem:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/salvar", [
                'link' => $link,
                'descricao' => $descricao,
                'imagem_desktop' => $imagemDesktop,
                'imagem_mobile' => $imagemMobile,
            ]);

        $response->assertValid();
        Storage::assertExists(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        Storage::assertExists(config('equipamentos.imagens.pagina_inicial') . $imagemMobile->hashName());
        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout.grid.visualizar', [
            $versao->id,
            $grid->id,
        ]);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'link' => $link,
            'descricao' => $descricao,
            'nome_desktop' => $imagemDesktop->hashName(),
            'nome_mobile' => $imagemMobile->hashName(),
        ]);
    }

    public function testNaoPodeAdicionarSemCampos(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid-imagem:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/salvar", []);

        $response->assertInvalid(['link', 'descricao', 'imagem_desktop']);
    }

    public function testPodeVisualizarImagem(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);
        $imagem = $this->criarGridImagem($grid)[0];

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid-imagem:ver'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/$imagem->id/visualizar");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/Grid/VisualizarImagem')
                ->where('versao.id', $versao->id)
                ->where('grid.id', $grid->id)
                ->where('gridImagem.id', $imagem->id)
        );
    }

    public function testPodeExcluir(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 500, 500);
        $imagemDesktop->store(config('equipamentos.imagens.pagina_inicial'));
        $name = $imagemDesktop->hashName();

        $gridImagem = GridImagem::create([
            'ordem' => 1,
            'link' => Str::random(10),
            'descricao' => Str::random(10),
            'nome_desktop' => $name,
            'grid_id' => $grid->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid-imagem:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/$gridImagem->id/excluir");

        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout.grid.visualizar', [
            $versao->id,
            $grid->id,
        ]);
        $this->assertDatabaseMissing(app(GridImagem::class)->getTable(), [
            'id' => $gridImagem->id,
        ]);
    }

    public function testPodeAlterarOrdemAcima(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);
        $imagens = $this->criarGridImagem($grid, 3);

        $imagem1 = $imagens[0];
        $imagem1->ordem = 1;
        $imagem1->save();

        $imagem2 = $imagens[1];
        $imagem2->ordem = 2;
        $imagem2->save();

        $imagem3 = $imagens[2];
        $imagem3->ordem = 3;
        $imagem3->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/$imagem2->id/ordem/acima"
        );

        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout.grid.visualizar', [
            $versao->id,
            $grid->id,
        ]);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem1->id,
            'ordem' => 2,
        ]);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem2->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem3->id,
            'ordem' => 3,
        ]);
    }

    public function testNaoPodeAlterarOrdemAcimaPrimeiraPosicao(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);
        $imagens = $this->criarGridImagem($grid, 2);

        $imagem1 = $imagens[0];
        $imagem1->ordem = 1;
        $imagem1->save();

        $imagem2 = $imagens[1];
        $imagem2->ordem = 2;
        $imagem2->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/$imagem1->id/ordem/acima"
        );

        $response->assertInvalid('ordem');
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem2->id,
            'ordem' => 2,
        ]);
    }

    public function testPodeAlterarOrdemAbaixo(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);
        $imagens = $this->criarGridImagem($grid, 3);

        $imagem1 = $imagens[0];
        $imagem1->ordem = 1;
        $imagem1->save();

        $imagem2 = $imagens[1];
        $imagem2->ordem = 2;
        $imagem2->save();

        $imagem3 = $imagens[2];
        $imagem3->ordem = 3;
        $imagem3->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/$imagem2->id/ordem/abaixo"
        );

        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout.grid.visualizar', [
            $versao->id,
            $grid->id,
        ]);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem2->id,
            'ordem' => 3,
        ]);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem3->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAlterarOrdemAbaixoUltimaPos(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);
        $imagens = $this->criarGridImagem($grid, 2);

        $imagem1 = $imagens[0];
        $imagem1->ordem = 1;
        $imagem1->save();

        $imagem2 = $imagens[1];
        $imagem2->ordem = 2;
        $imagem2->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/$imagem2->id/ordem/abaixo"
        );

        $response->assertInvalid('ordem');
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAdicionarVersaoAprovada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:criar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/adicionar", []);

        $response->assertStatus(403);
    }

    public function testNaoPodeAdicionarVersaoReprovada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:criar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/adicionar", []);

        $response->assertStatus(403);
    }

    public function testNaoPodeAdicionarVersaoPublicada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:criar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/adicionar", []);

        $response->assertStatus(403);
    }

    public function testNaoPodeCriarNovoVersaoAprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/grid/salvar", [
                'tela_cheia' => true,
                'formato' => Formato::Banner_3x1_1x3->value,
            ]);

        $response->assertStatus(403);
    }

    public function testNaoPodeCriarNovoVersaoReprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/grid/salvar", [
                'tela_cheia' => true,
                'formato' => Formato::Banner_3x1_1x3->value,
            ]);

        $response->assertStatus(403);
    }

    public function testNaoPodeCriarNovoVersaoPublicada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/grid/salvar", [
                'tela_cheia' => true,
                'formato' => Formato::Banner_3x1_1x3->value,
            ]);

        $response->assertStatus(403);
    }

    public function testNaoPodeAcessarAdicionarImagemVersaoAprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $grid = $this->criarGrid($versao);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid-imagem:criar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/adicionar");

        $response->assertStatus(403);
    }

    public function testNaoPodeAcessarAdicionarImagemVersaoReprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $grid = $this->criarGrid($versao);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid-imagem:criar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/adicionar");

        $response->assertStatus(403);
    }

    public function testNaoPodeAcessarAdicionarImagemVersaoPublicada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $grid = $this->criarGrid($versao);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid-imagem:criar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/adicionar");

        $response->assertStatus(403);
    }

    public function testNaoPodeAdicionarImagemVersaoAprovada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $grid = $this->criarGrid($versao);
        $link = Str::random(10);
        $descricao = Str::random(10);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 500, 500);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid-imagem:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/salvar", [
                'link' => $link,
                'descricao' => $descricao,
                'imagem_desktop' => $imagemDesktop,
            ]);

        $response->assertStatus(403);
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        $this->assertDatabaseMissing(app(GridImagem::class)->getTable(), [
            'link' => $link,
            'descricao' => $descricao,
            'nome_desktop' => $imagemDesktop->hashName(),
        ]);
    }

    public function testNaoPodeAdicionarImagemVersaoReprovada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $grid = $this->criarGrid($versao);
        $link = Str::random(10);
        $descricao = Str::random(10);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 500, 500);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid-imagem:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/salvar", [
                'link' => $link,
                'descricao' => $descricao,
                'imagem_desktop' => $imagemDesktop,
            ]);

        $response->assertStatus(403);
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        $this->assertDatabaseMissing(app(GridImagem::class)->getTable(), [
            'link' => $link,
            'descricao' => $descricao,
            'nome_desktop' => $imagemDesktop->hashName(),
        ]);
    }

    public function testNaoPodeAdicionarImagemVersaoPublicada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $grid = $this->criarGrid($versao);
        $link = Str::random(10);
        $descricao = Str::random(10);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 500, 500);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid-imagem:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/salvar", [
                'link' => $link,
                'descricao' => $descricao,
                'imagem_desktop' => $imagemDesktop,
            ]);

        $response->assertStatus(403);
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        $this->assertDatabaseMissing(app(GridImagem::class)->getTable(), [
            'link' => $link,
            'descricao' => $descricao,
            'nome_desktop' => $imagemDesktop->hashName(),
        ]);
    }

    public function testNaoPodeExcluirImagemVersaoAprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $grid = $this->criarGrid($versao);
        $imagem = $this->criarGridImagem($grid)[0];

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid-imagem:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/$imagem->id/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem->id,
        ]);
    }

    public function testNaoPodeExcluirImagemVersaoReprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $grid = $this->criarGrid($versao);
        $imagem = $this->criarGridImagem($grid)[0];

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid-imagem:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/$imagem->id/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem->id,
        ]);
    }

    public function testNaoPodeExcluirImagemVersaoPublicada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $grid = $this->criarGrid($versao);
        $imagem = $this->criarGridImagem($grid)[0];

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid-imagem:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/$imagem->id/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem->id,
        ]);
    }

    public function testNaoPodeAlterarOrdemAcimaVersaoAprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $grid = $this->criarGrid($versao);
        $imagens = $this->criarGridImagem($grid, 2);

        $imagem1 = $imagens[0];
        $imagem1->ordem = 1;
        $imagem1->save();

        $imagem2 = $imagens[1];
        $imagem2->ordem = 2;
        $imagem2->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/$imagem2->id/ordem/acima"
        );

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAlterarOrdemAcimaVersaoReprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $grid = $this->criarGrid($versao);
        $imagens = $this->criarGridImagem($grid, 2);

        $imagem1 = $imagens[0];
        $imagem1->ordem = 1;
        $imagem1->save();

        $imagem2 = $imagens[1];
        $imagem2->ordem = 2;
        $imagem2->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/$imagem2->id/ordem/acima"
        );

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAlterarOrdemAcimaVersaoPublicada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $grid = $this->criarGrid($versao);
        $imagens = $this->criarGridImagem($grid, 2);

        $imagem1 = $imagens[0];
        $imagem1->ordem = 1;
        $imagem1->save();

        $imagem2 = $imagens[1];
        $imagem2->ordem = 2;
        $imagem2->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/$imagem2->id/ordem/acima"
        );

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAlterarOrdemAbaixoVersaoAprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $grid = $this->criarGrid($versao);
        $imagens = $this->criarGridImagem($grid, 2);

        $imagem1 = $imagens[0];
        $imagem1->ordem = 1;
        $imagem1->save();

        $imagem2 = $imagens[1];
        $imagem2->ordem = 2;
        $imagem2->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/$imagem2->id/ordem/abaixo"
        );

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAlterarOrdemAbaixoVersaoReprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $grid = $this->criarGrid($versao);
        $imagens = $this->criarGridImagem($grid, 2);

        $imagem1 = $imagens[0];
        $imagem1->ordem = 1;
        $imagem1->save();

        $imagem2 = $imagens[1];
        $imagem2->ordem = 2;
        $imagem2->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/$imagem2->id/ordem/abaixo"
        );

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAlterarOrdemAbaixoVersaoPublicada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $grid = $this->criarGrid($versao);
        $imagens = $this->criarGridImagem($grid, 2);

        $imagem1 = $imagens[0];
        $imagem1->ordem = 1;
        $imagem1->save();

        $imagem2 = $imagens[1];
        $imagem2->ordem = 2;
        $imagem2->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.grid.grid:ordem'))->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/$imagem2->id/ordem/abaixo"
        );

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $imagem2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAcessarAdicionarSemPermissao(): void
    {
        $versao = $this->getVersaoBase();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/adicionar");


        $response->assertStatus(403);
    }

    public function testNaoPodeCriarNovoSemPermissao(): void
    {
        $versao = $this->getVersaoBase();

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/grid/salvar", [
                'tela_cheia' => true,
                'formato' => Formato::Banner_3x1_1x3->value,
            ]);

        $response->assertStatus(403);
    }

    public function testNaoPodeVisualizarSemPermissao(): void
    {
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/visualizar");

        $response->assertStatus(403);
    }

    public function testNaoPodeAcessarAdicionarImagemSemPermissao(): void
    {
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/adicionar");

        $response->assertStatus(403);
    }

    public function testNaoPodeAdicionarImagemSemPermissao(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);
        $link = Str::random(10);
        $descricao = Str::random(10);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 500, 500);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/salvar", [
                'link' => $link,
                'descricao' => $descricao,
                'imagem_desktop' => $imagemDesktop,
            ]);

        $response->assertStatus(403);
        $this->assertDatabaseMissing(app(GridImagem::class)->getTable(), [
            'link' => $link,
            'descricao' => $descricao,
        ]);
    }

    public function testNaoPodeVisualizarImagemSemPermissao(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);
        $imagem = $this->criarGridImagem($grid)[0];

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/$imagem->id/visualizar");

        $response->assertStatus(403);
    }

    public function testNaoPodeExcluirSemPermissao(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 500, 500);
        $imagemDesktop->store(config('equipamentos.imagens.pagina_inicial'));
        $name = $imagemDesktop->hashName();

        $gridImagem = GridImagem::create([
            'ordem' => 1,
            'link' => Str::random(10),
            'descricao' => Str::random(10),
            'nome_desktop' => $name,
            'grid_id' => $grid->id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/$gridImagem->id/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $gridImagem->id,
        ]);
    }

    public function testNaoPodeAlterarOrdemAcimaSemPermissao(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);
        $imagens = $this->criarGridImagem($grid, 3);

        $imagem1 = $imagens[0];
        $imagem1->ordem = 1;
        $imagem1->save();

        $imagem2 = $imagens[1];
        $imagem2->ordem = 2;
        $imagem2->save();

        $imagem3 = $imagens[2];
        $imagem3->ordem = 3;
        $imagem3->save();

        $response = $this->actingAs($this->getAdmin())->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/$imagem2->id/ordem/acima"
        );

        $response->assertStatus(403);
    }

    public function testNaoPodeAlterarOrdemAbaixoSemPermissao(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);
        $imagens = $this->criarGridImagem($grid, 3);

        $imagem1 = $imagens[0];
        $imagem1->ordem = 1;
        $imagem1->save();

        $imagem2 = $imagens[1];
        $imagem2->ordem = 2;
        $imagem2->save();

        $imagem3 = $imagens[2];
        $imagem3->ordem = 3;
        $imagem3->save();

        $response = $this->actingAs($this->getAdmin())->get(
            "/admin/marketing/pagina/inicial/$versao->id/layout/grid/$grid->id/imagem/$imagem2->id/ordem/abaixo"
        );

        $response->assertStatus(403);
    }
}
