<?php

namespace Tests\Feature\Admin\Marketing\PaginaInicial;

use App\Enums\Marketing\PaginaInicial\StatusVersao;
use App\Models\Marketing\PaginaInicial\Carrossel\CarrosselItem;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia;
use Illuminate\Support\Str;

class CarrosselTest extends PaginaInicialTestBase
{
    use RefreshDatabase;

    public function testPodeAcessarVisualizar(): void
    {
        $versao = $this->getVersaoBase();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/visualizar");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/CarrosselPrincipal/Visualizar')
                ->has('versao')
                ->where('versao.id', $versao->id)
                ->has('versao.carrossel_itens', 0)
        );
    }

    public function testPodeAcessarVisualizarComDados(): void
    {
        $versao = $this->getVersaoBase();
        $this->criarCarrosselItem($versao, 2);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/visualizar");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/CarrosselPrincipal/Visualizar')
                ->has('versao')
                ->where('versao.id', $versao->id)
                ->has('versao.carrossel_itens', 2)
        );
    }

    public function testPodeAcessarAdicionar(): void
    {
        $versao = $this->getVersaoBase();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/adicionar");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/CarrosselPrincipal/AdicionarImagem')
        );
    }

    public function testPodeAdicionar(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $link = Str::random(10);
        $descricao = Str::random(10);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1920, 640);
        $imagemMobile = UploadedFile::fake()->image('imagem.png', 800, 640);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/salvar", [
                'link' => $link,
                'descricao' => $descricao,
                'imagem_desktop' => $imagemDesktop,
                'imagem_mobile' => $imagemMobile,
            ]);

            $response->assertValid();
            Storage::assertExists(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
            Storage::assertExists(config('equipamentos.imagens.pagina_inicial') . $imagemMobile->hashName());
            $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout.carrossel.visualizar', $versao->id);
            $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
                'link' => $link,
                'descricao' => $descricao,
                'nome_arquivo_desktop' => $imagemDesktop->hashName(),
                'nome_arquivo_mobile' => $imagemMobile->hashName(),
            ]);
    }

    public function testNaoPodeAdicionarSemCampos(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/salvar", []);

        $response->assertInvalid(['link', 'descricao', 'imagem_desktop', 'imagem_mobile']);
    }

    public function testPodeAdicionarDadosInvalidos(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $link = Str::random(10);
        $descricao = Str::random(1);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 300, 640);
        $imagemMobile = UploadedFile::fake()->image('imagem.png', 300, 640);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/salvar", [
                'link' => $link,
                'descricao' => $descricao,
                'imagem_desktop' => $imagemDesktop,
                'imagem_mobile' => $imagemMobile,
            ]);

        $response->assertInvalid(['descricao', 'imagem_desktop', 'imagem_mobile']);
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemMobile->hashName());
        $this->assertDatabaseMissing(app(CarrosselItem::class)->getTable(), [
            'link' => $link,
            'descricao' => $descricao,
            'nome_arquivo_desktop' => $imagemDesktop->hashName(),
            'nome_arquivo_mobile' => $imagemMobile->hashName(),
        ]);
    }

    public function testPodeVisualizarItem(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $item = $this->criarCarrosselItem($versao)[0];

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item->id/visualizar");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/CarrosselPrincipal/VisualizarItem')
                ->has('item')
                ->where('item.id', $item->id)
        );
    }

    public function testPodeExcluir(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1920, 640);
        $imagemMobile = UploadedFile::fake()->image('imagem.png', 800, 640);
        $imagemDesktop->store(config('equipamentos.imagens.pagina_inicial'));
        $imagemMobile->store(config('equipamentos.imagens.pagina_inicial'));
        $item = CarrosselItem::create([
            'ordem' => 1,
            'link' => Str::random(10),
            'descricao' => Str::random(10),
            'versao_id' => $versao->id,
            'nome_arquivo_desktop' => $imagemDesktop->hashName(),
            'nome_arquivo_mobile' => $imagemMobile->hashName(),
        ]);

        $response = $this->actingAs($this->getAdmin())
        ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item->id/excluir");

        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemMobile->hashName());
        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout.carrossel.visualizar', $versao->id);
        $this->assertDatabaseMissing(app(CarrosselItem::class)->getTable(), [
            'id' => $item->id,
        ]);
    }

    public function testNaoPodeAdicionarVersaoAprovada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/adicionar", []);

        $response->assertStatus(403);
    }

    public function testNaoPodeAdicionarVersaoReprovada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/adicionar", []);

        $response->assertStatus(403);
    }

    public function testNaoPodeAdicionarVersaoPublicada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/adicionar", []);

        $response->assertStatus(403);
    }

    public function testNaoPodeSalvarVersaoAprovada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $carrossel = $this->criarCarrosselItem($versao)[0];
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1920, 640);
        $imagemMobile = UploadedFile::fake()->image('imagem.png', 800, 640);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/salvar", [
                'link' => $carrossel->link,
                'descricao' => $carrossel->descricao,
                'imagem_desktop' => $imagemDesktop,
                'imagem_mobile' => $imagemMobile,
            ]);

        $response->assertStatus(403);
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemMobile->hashName());
    }

    public function testNaoPodeSalvarVersaoReprovada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $carrossel = $this->criarCarrosselItem($versao)[0];
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1920, 640);
        $imagemMobile = UploadedFile::fake()->image('imagem.png', 800, 640);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/salvar", [
                'link' => $carrossel->link,
                'descricao' => $carrossel->descricao,
                'imagem_desktop' => $imagemDesktop,
                'imagem_mobile' => $imagemMobile,
            ]);

        $response->assertStatus(403);
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemMobile->hashName());
    }

    public function testNaoPodeSalvarVersaoPublicada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $carrossel = $this->criarCarrosselItem($versao)[0];
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1920, 640);
        $imagemMobile = UploadedFile::fake()->image('imagem.png', 800, 640);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/salvar", [
                'link' => $carrossel->link,
                'descricao' => $carrossel->descricao,
                'imagem_desktop' => $imagemDesktop,
                'imagem_mobile' => $imagemMobile,
            ]);

        $response->assertStatus(403);
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemMobile->hashName());
    }

    public function testNaoPodeExcluirVersaoAprovada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1920, 640);
        $imagemMobile = UploadedFile::fake()->image('imagem.png', 800, 640);
        $imagemDesktop->store(config('equipamentos.imagens.pagina_inicial'));
        $imagemMobile->store(config('equipamentos.imagens.pagina_inicial'));
        $item = CarrosselItem::create([
            'ordem' => 1,
            'link' => Str::random(10),
            'descricao' => Str::random(10),
            'versao_id' => $versao->id,
            'nome_arquivo_desktop' => $imagemDesktop->hashName(),
            'nome_arquivo_mobile' => $imagemMobile->hashName(),
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item->id/excluir");


        $response->assertStatus(403);
    }

    public function testNaoPodeExcluirVersaoReprovada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1920, 640);
        $imagemMobile = UploadedFile::fake()->image('imagem.png', 800, 640);
        $imagemDesktop->store(config('equipamentos.imagens.pagina_inicial'));
        $imagemMobile->store(config('equipamentos.imagens.pagina_inicial'));
        $item = CarrosselItem::create([
            'ordem' => 1,
            'link' => Str::random(10),
            'descricao' => Str::random(10),
            'versao_id' => $versao->id,
            'nome_arquivo_desktop' => $imagemDesktop->hashName(),
            'nome_arquivo_mobile' => $imagemMobile->hashName(),
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item->id/excluir");


        $response->assertStatus(403);
    }

    public function testNaoPodeExcluirVersaoPublicada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1920, 640);
        $imagemMobile = UploadedFile::fake()->image('imagem.png', 800, 640);
        $imagemDesktop->store(config('equipamentos.imagens.pagina_inicial'));
        $imagemMobile->store(config('equipamentos.imagens.pagina_inicial'));
        $item = CarrosselItem::create([
            'ordem' => 1,
            'link' => Str::random(10),
            'descricao' => Str::random(10),
            'versao_id' => $versao->id,
            'nome_arquivo_desktop' => $imagemDesktop->hashName(),
            'nome_arquivo_mobile' => $imagemMobile->hashName(),
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item->id/excluir");


        $response->assertStatus(403);
    }
}
