<?php

namespace Tests\Feature\Admin\Marketing\PaginaInicial;

use App\Enums\Marketing\PaginaInicial\StatusVersao;
use App\Jobs\Imagens\ConverterImagemCarrosselJob;
use App\Models\Marketing\PaginaInicial\Carrossel\CarrosselItem;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia;
use Illuminate\Support\Str;

class CarrosselTest extends PaginaInicialTestBase
{
    use RefreshDatabase;

    public function testPodeAcessarVisualizar(): void
    {
        $versao = $this->getVersaoBase();

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:ver'))
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

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:ver'))
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

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:criar'))
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
        Queue::fake();
        $versao = $this->getVersaoBase();
        $link = Str::random(10);
        $descricao = Str::random(10);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1920, 640);
        $imagemMobile = UploadedFile::fake()->image('imagem.png', 800, 640);

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:criar'))
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
        Queue::assertPushed(ConverterImagemCarrosselJob::class);
    }

    public function testNaoPodeAdicionarSemCampos(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/salvar", []);

        $response->assertInvalid(['link', 'descricao', 'imagem_desktop', 'imagem_mobile']);
    }

    public function testNaoPodeAdicionarDadosInvalidos(): void
    {
        Storage::fake();
        Queue::fake();
        $versao = $this->getVersaoBase();
        $link = Str::random(10);
        $descricao = Str::random(1);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 300, 640);
        $imagemMobile = UploadedFile::fake()->image('imagem.png', 300, 640);

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:criar'))
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
        Queue::assertNotPushed(ConverterImagemCarrosselJob::class);
    }

    public function testPodeVisualizarItem(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $item = $this->criarCarrosselItem($versao)[0];

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:ver'))
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

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:excluir'))
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

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:criar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/adicionar", []);

        $response->assertStatus(403);
    }

    public function testNaoPodeAdicionarVersaoReprovada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:criar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/adicionar", []);

        $response->assertStatus(403);
    }

    public function testNaoPodeAdicionarVersaoPublicada(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:criar'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/adicionar", []);

        $response->assertStatus(403);
    }

    public function testNaoPodeSalvarVersaoAprovada(): void
    {
        Storage::fake();
        Queue::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $carrossel = $this->criarCarrosselItem($versao)[0];
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1920, 640);
        $imagemMobile = UploadedFile::fake()->image('imagem.png', 800, 640);

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/salvar", [
                'link' => $carrossel->link,
                'descricao' => $carrossel->descricao,
                'imagem_desktop' => $imagemDesktop,
                'imagem_mobile' => $imagemMobile,
            ]);

        $response->assertStatus(403);
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemMobile->hashName());
        Queue::assertNotPushed(ConverterImagemCarrosselJob::class);
    }

    public function testNaoPodeSalvarVersaoReprovada(): void
    {
        Storage::fake();
        Queue::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $carrossel = $this->criarCarrosselItem($versao)[0];
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1920, 640);
        $imagemMobile = UploadedFile::fake()->image('imagem.png', 800, 640);

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/salvar", [
                'link' => $carrossel->link,
                'descricao' => $carrossel->descricao,
                'imagem_desktop' => $imagemDesktop,
                'imagem_mobile' => $imagemMobile,
            ]);

        $response->assertStatus(403);
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemMobile->hashName());
        Queue::assertNotPushed(ConverterImagemCarrosselJob::class);
    }

    public function testNaoPodeSalvarVersaoPublicada(): void
    {
        Storage::fake();
        Queue::fake();
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $carrossel = $this->criarCarrosselItem($versao)[0];
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1920, 640);
        $imagemMobile = UploadedFile::fake()->image('imagem.png', 800, 640);

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:criar'))
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/salvar", [
                'link' => $carrossel->link,
                'descricao' => $carrossel->descricao,
                'imagem_desktop' => $imagemDesktop,
                'imagem_mobile' => $imagemMobile,
            ]);

        $response->assertStatus(403);
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        Storage::assertMissing(config('equipamentos.imagens.pagina_inicial') . $imagemMobile->hashName());
        Queue::assertNotPushed(ConverterImagemCarrosselJob::class);
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

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:excluir'))
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

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:excluir'))
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

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item->id/excluir");

        $response->assertStatus(403);
    }

    public function testNaoPodeAcessarVisualizarSemPermissao(): void
    {
        $versao = $this->getVersaoBase();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/visualizar");

        $response->assertStatus(403);
    }

    public function testNaoPodeAcessarAdicionarSemPermissao(): void
    {
        $versao = $this->getVersaoBase();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/adicionar");

        $response->assertStatus(403);
    }

    public function testNaoPodeAdicionarSemPermissao(): void
    {
        Storage::fake();
        Queue::fake();
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


        $response->assertStatus(403);
        $this->assertDatabaseMissing(app(CarrosselItem::class)->getTable(), [
            'link' => $link,
            'descricao' => $descricao,
            'nome_arquivo_desktop' => $imagemDesktop->hashName(),
            'nome_arquivo_mobile' => $imagemMobile->hashName(),
        ]);
        Queue::assertNotPushed(ConverterImagemCarrosselJob::class);
    }

    public function testNaoPodeVisualizarItemSemPermissao(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $item = $this->criarCarrosselItem($versao)[0];

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item->id/visualizar");

        $response->assertStatus(403);
    }

    public function testNaoPodeExcluirSemPermissao(): void
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

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item->id,
        ]);
    }

    public function testPodeAlterarOrdemAcima(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $carrossel = $this->criarCarrosselItem($versao, 3);

        $item1 = $carrossel[0];
        $item1->ordem = 1;
        $item1->save();

        $item2 = $carrossel[1];
        $item2->ordem = 2;
        $item2->save();

        $item3 = $carrossel[2];
        $item3->ordem = 3;
        $item3->save();

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item2->id/ordem/acima");

        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout.carrossel.visualizar', [
            $versao->id,
        ]);

        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 2,
        ]);

        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 1,
        ]);

        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item3->id,
            'ordem' => 3,
        ]);
    }

    public function testNaoPodeAlterarOrdemAcimaPrimeiraPosicao(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $carrossel = $this->criarCarrosselItem($versao, 3);

        $item1 = $carrossel[0];
        $item1->ordem = 1;
        $item1->save();

        $item2 = $carrossel[1];
        $item2->ordem = 2;
        $item2->save();

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item1->id/ordem/acima");

        $response->assertInvalid('ordem');
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 2,
        ]);
    }

    public function testPodeAlterarOrdemAbaixo(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $carrossel = $this->criarCarrosselItem($versao, 3);

        $item1 = $carrossel[0];
        $item1->ordem = 1;
        $item1->save();

        $item2 = $carrossel[1];
        $item2->ordem = 2;
        $item2->save();

        $item3 = $carrossel[2];
        $item3->ordem = 3;
        $item3->save();

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item2->id/ordem/abaixo");

        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout.carrossel.visualizar', [
            $versao->id,
        ]);

        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 1,
        ]);

        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 3,
        ]);

        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item3->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAlterarOrdemAbaixoUltimaPos(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $carrossel = $this->criarCarrosselItem($versao, 3);

        $item1 = $carrossel[0];
        $item1->ordem = 1;
        $item1->save();

        $item2 = $carrossel[1];
        $item2->ordem = 2;
        $item2->save();

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item2->id/ordem/abaixo");

        $response->assertInvalid('ordem');
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAlterarOrdemAcimaVersaoAprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $carrossel = $this->criarCarrosselItem($versao, 3);

        $item1 = $carrossel[0];
        $item1->ordem = 1;
        $item1->save();

        $item2 = $carrossel[1];
        $item2->ordem = 2;
        $item2->save();

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item2->id/ordem/acima");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAlterarOrdemAcimaVersaoReprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $carrossel = $this->criarCarrosselItem($versao, 3);

        $item1 = $carrossel[0];
        $item1->ordem = 1;
        $item1->save();

        $item2 = $carrossel[1];
        $item2->ordem = 2;
        $item2->save();

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item2->id/ordem/acima");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAlterarOrdemAcimaVersaoPublicada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $carrossel = $this->criarCarrosselItem($versao, 3);

        $item1 = $carrossel[0];
        $item1->ordem = 1;
        $item1->save();

        $item2 = $carrossel[1];
        $item2->ordem = 2;
        $item2->save();

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item2->id/ordem/acima");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAlterarOrdemAbaixoVersaoAprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $carrossel = $this->criarCarrosselItem($versao, 3);

        $item1 = $carrossel[0];
        $item1->ordem = 1;
        $item1->save();

        $item2 = $carrossel[1];
        $item2->ordem = 2;
        $item2->save();

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item2->id/ordem/abaixo");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAlterarOrdemAbaixoVersaoReprovada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $carrossel = $this->criarCarrosselItem($versao, 3);

        $item1 = $carrossel[0];
        $item1->ordem = 1;
        $item1->save();

        $item2 = $carrossel[1];
        $item2->ordem = 2;
        $item2->save();

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item2->id/ordem/abaixo");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAlterarOrdemAbaixoVersaoPublicada(): void
    {
        $versao = $this->getVersaoBase();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $carrossel = $this->criarCarrosselItem($versao, 3);

        $item1 = $carrossel[0];
        $item1->ordem = 1;
        $item1->save();

        $item2 = $carrossel[1];
        $item2->ordem = 2;
        $item2->save();

        $response = $this
            ->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:ordem'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item2->id/ordem/abaixo");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item2->id,
            'ordem' => 2,
        ]);
    }

    public function testNaoPodeAlterarOrdemAcimaSemPermissao(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();

        $carrossel = $this->criarCarrosselItem($versao, 3);

        $item1 = $carrossel[0];
        $item1->ordem = 1;
        $item1->save();

        $item2 = $carrossel[1];
        $item2->ordem = 2;
        $item2->save();

        $item3 = $carrossel[2];
        $item3->ordem = 3;
        $item3->save();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item2->id/ordem/acima");

        $response->assertStatus(403);
    }

    public function testNaoPodeAlterarOrdemAbaixoSemPermissao(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();

        $carrossel = $this->criarCarrosselItem($versao, 3);

        $item1 = $carrossel[0];
        $item1->ordem = 1;
        $item1->save();

        $item2 = $carrossel[1];
        $item2->ordem = 2;
        $item2->save();

        $item3 = $carrossel[2];
        $item3->ordem = 3;
        $item3->save();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item2->id/ordem/abaixo");

        $response->assertStatus(403);
    }

    public function testDeveTerOrdemSequencial(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $carrossel = $this->criarCarrosselItem($versao, 3);

        $item1 = $carrossel[0];
        $item1->ordem = 1;
        $item1->save();

        $item2 = $carrossel[1];
        $item2->ordem = 2;
        $item2->save();

        $item3 = $carrossel[2];
        $item3->ordem = 3;
        $item3->save();

        $this->actingAs($this->getAdminComPermissao('marketing.pagina-inicial.carrossel.carrossel-item:excluir'))
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/$item2->id/excluir");

        $this->assertDatabaseMissing(app(CarrosselItem::class)->getTable(), [
            'id' => $item2->id,
        ]);
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item1->id,
            'ordem' => 1,
        ]);
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $item3->id,
            'ordem' => 2,
        ]);
    }
}
