<?php

namespace Tests\Feature\Admin\Marketing\PaginaInicial;

use App\Enums\Marketing\PaginaInicial\StatusVersao;
use App\Jobs\Imagens\ConverterImagemBannerJob;
use App\Models\Marketing\PaginaInicial\Banners\Banner;
use App\Models\Marketing\PaginaInicial\Componente;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia;
use Illuminate\Support\Str;

class BannerTest extends PaginaInicialTestBase
{
    use RefreshDatabase;

    public function testPodeAcessarAdicionar(): void
    {
        $versao = $this->getVersaoBase();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.banners.banner:criar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/banner/adicionar");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/Banner/Adicionar')
        );
    }

    public function testPodeAdicionar(): void
    {
        Storage::fake();
        Queue::fake();
        $versao = $this->getVersaoBase();
        $link = Str::random(10);
        $descricao = Str::random(10);
        $telaCheia = true;
        $titulo = Str::random(10);
        $subtitulo = Str::random(10);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1920, 400);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.banners.banner:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/banner/salvar", [
                'link' => $link,
                'descricao' => $descricao,
                'titulo' => $titulo,
                'subtitulo' => $subtitulo,
                'tela_cheia' => $telaCheia,
                'imagem_desktop' => $imagemDesktop,
            ]);

        $response->assertValid();
        Storage::assertExists(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout', $versao->id);
        $this->assertDatabaseHas(app(Banner::class)->getTable(), [
            'link' => $link,
            'descricao' => $descricao,
            'nome_desktop' => $imagemDesktop->hashName(),
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'titulo' => $titulo,
            'subtitulo' => $subtitulo,
            'tela_cheia' => $telaCheia,
        ]);
        Queue::assertPushed(ConverterImagemBannerJob::class);
    }

    public function testPodeAdicionarComMobile(): void
    {
        Storage::fake();
        Queue::fake();
        $versao = $this->getVersaoBase();
        $link = Str::random(10);
        $descricao = Str::random(10);
        $telaCheia = true;
        $titulo = Str::random(10);
        $subtitulo = Str::random(10);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1920, 400);
        $imagemMobile = UploadedFile::fake()->image('imagem.png', 800, 400);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.banners.banner:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/banner/salvar", [
                'link' => $link,
                'descricao' => $descricao,
                'titulo' => $titulo,
                'subtitulo' => $subtitulo,
                'tela_cheia' => $telaCheia,
                'imagem_desktop' => $imagemDesktop,
                'imagem_mobile' => $imagemMobile,
            ]);

        $response->assertValid();
        Storage::assertExists(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        Storage::assertExists(config('equipamentos.imagens.pagina_inicial') . $imagemMobile->hashName());
        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout', $versao->id);
        $this->assertDatabaseHas(app(Banner::class)->getTable(), [
            'link' => $link,
            'descricao' => $descricao,
            'nome_desktop' => $imagemDesktop->hashName(),
            'nome_mobile' => $imagemMobile->hashName(),
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'titulo' => $titulo,
            'subtitulo' => $subtitulo,
            'tela_cheia' => $telaCheia,
        ]);
        Queue::assertPushed(ConverterImagemBannerJob::class);
    }

    public function testNaoPodeAdicionarSemCampos(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.banners.banner:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/banner/salvar", []);

        $response->assertInvalid(['tela_cheia', 'link', 'descricao', 'imagem_desktop']);
    }

    public function testNaoPodeAdicionarDadosInvalidos(): void
    {
        Storage::fake();
        Queue::fake();
        $versao = $this->getVersaoBase();
        $link = Str::random(10);
        $descricao = Str::random(1);
        $telaCheia = true;
        $titulo = Str::random(1);
        $subtitulo = Str::random(1);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 300, 640);
        $imagemMobile = UploadedFile::fake()->image('imagem.png', 300, 640);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.banners.banner:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/banner/salvar", [
                'link' => $link,
                'descricao' => $descricao,
                'titulo' => $titulo,
                'subtitulo' => $subtitulo,
                'tela_cheia' => $telaCheia,
                'imagem_desktop' => $imagemDesktop,
                'imagem_mobile' => $imagemMobile,
            ]);

        $response->assertInvalid(['descricao', 'titulo', 'subtitulo', 'imagem_desktop', 'imagem_mobile']);
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemMobile->hashName());
        $this->assertDatabaseMissing(app(Banner::class)->getTable(), [
            'link' => $link,
            'descricao' => $descricao,
            'nome_desktop' => $imagemDesktop->hashName(),
            'nome_mobile' => $imagemMobile->hashName(),
        ]);
        $this->assertDatabaseMissing(app(Componente::class)->getTable(), [
            'titulo' => $titulo,
            'subtitulo' => $subtitulo,
            'tela_cheia' => $telaCheia,
        ]);
        Queue::assertNotPushed(ConverterImagemBannerJob::class);
    }

    public function testPodeVisualizar(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $banner = $this->criarBanner($versao);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.banners.banner:ver'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/banner/$banner->id/visualizar");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/Banner/Visualizar')
                ->has('banner')
                ->where('banner.id', $banner->id)
        );
    }

    public function testNaoPodeAdicionarVersaoAprovada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.banners.banner:criar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/banner/adicionar", []);

        $response->assertStatus(403);
    }

    public function testNaoPodeAdicionarVersaoReprovada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.banners.banner:criar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/banner/adicionar", []);

        $response->assertStatus(403);
    }

    public function testNaoPodeAdicionarVersaoPublicada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.banners.banner:criar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/banner/adicionar", []);

        $response->assertStatus(403);
    }

    public function testNaoPodeSalvarVersaoAprovada(): void
    {
        Storage::fake();
        Queue::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $banner = $this->criarBanner($versao);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1500, 500);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.banners.banner:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/banner/salvar", [
                'link' => $banner->link,
                'descricao' => $banner->descricao,
                'tela_cheia' => $banner->componente->tela_cheia,
                'imagem_desktop' => $imagemDesktop,
            ]);

        $response->assertStatus(403);
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        Queue::assertNotPushed(ConverterImagemBannerJob::class);
    }

    public function testNaoPodeSalvarVersaoReprovada(): void
    {
        Storage::fake();
        Queue::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $banner = $this->criarBanner($versao);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1500, 500);

        $response = $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.banners.banner:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/banner/salvar", [
                'link' => $banner->link,
                'descricao' => $banner->descricao,
                'tela_cheia' => $banner->componente->tela_cheia,
                'imagem_desktop' => $imagemDesktop,
            ]);

        $response->assertStatus(403);
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        Queue::assertNotPushed(ConverterImagemBannerJob::class);
    }

    public function testNaoPodeSalvarVersaoPublicada(): void
    {
        Storage::fake();
        Queue::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $banner = $this->criarBanner($versao);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1500, 500);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/banner/salvar", [
                'link' => $banner->link,
                'descricao' => $banner->descricao,
                'tela_cheia' => $banner->componente->tela_cheia,
                'imagem_desktop' => $imagemDesktop,
            ]);

        $response->assertStatus(403);
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        Queue::assertNotPushed(ConverterImagemBannerJob::class);
    }

    public function testNaoPodeAcessarAdicionarSemPermissao(): void
    {
        $versao = $this->getVersaoBase();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/banner/adicionar");

        $response->assertStatus(403);
    }

    public function testNaoPodeAdicionarSemPermissao(): void
    {
        Storage::fake();
        Queue::fake();
        $versao = $this->getVersaoBase();
        $link = Str::random(10);
        $descricao = Str::random(10);
        $telaCheia = true;
        $titulo = Str::random(10);
        $subtitulo = Str::random(10);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1920, 400);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/banner/salvar", [
                'link' => $link,
                'descricao' => $descricao,
                'titulo' => $titulo,
                'subtitulo' => $subtitulo,
                'tela_cheia' => $telaCheia,
                'imagem_desktop' => $imagemDesktop,
            ]);

        $response->assertStatus(403);
        $this->assertDatabaseMissing(app(Banner::class)->getTable(), [
            'link' => $link,
            'descricao' => $descricao,
            'nome_desktop' => $imagemDesktop->hashName(),
        ]);
        $this->assertDatabaseMissing(app(Componente::class)->getTable(), [
            'titulo' => $titulo,
            'subtitulo' => $subtitulo,
            'tela_cheia' => $telaCheia,
        ]);
        Queue::assertNotPushed(ConverterImagemBannerJob::class);
    }

    public function testNaoPodeVisualizarSemPermissao(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $banner = $this->criarBanner($versao);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/banner/$banner->id/visualizar");

        $response->assertStatus(403);
    }
}
