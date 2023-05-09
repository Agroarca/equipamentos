<?php

namespace Tests\Feature\Admin\Marketing\PaginaInicial;

use App\Enums\Marketing\PaginaInicial\Grid\Formato;
use App\Enums\Marketing\PaginaInicial\StatusVersao;
use App\Models\Marketing\PaginaInicial\Banners\Banner;
use App\Models\Marketing\PaginaInicial\Carrossel\CarrosselItem;
use App\Models\Marketing\PaginaInicial\Componente;
use App\Models\Marketing\PaginaInicial\Grid\Grid;
use App\Models\Marketing\PaginaInicial\Grid\GridImagem;
use App\Models\Marketing\PaginaInicial\ListaProdutos\Lista;
use App\Models\Marketing\PaginaInicial\Versao;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia;
use Illuminate\Support\Str;

class VersaoTest extends PaginaInicialTestBase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/marketing/pagina/inicial');

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/Versao/Inicio')
                ->has('versoes.data', 0)
                ->has('statusVersao', 4)
        );
    }

    public function testPodeAcessarComDados(): void
    {
        $versoes = Versao::factory()->count(4)->create();

        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/marketing/pagina/inicial');

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/Versao/Inicio')
                ->has('versoes.data', count($versoes))
                ->has('statusVersao', 4)
        );
    }

    public function testPodeAcessarCriar(): void
    {
        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/marketing/pagina/inicial/criar');

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/Versao/Criar')
        );
    }

    public function testPodeCriarNovo(): void
    {
        $versao = Versao::factory()->make();

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/marketing/pagina/inicial/salvar', [
                'nome' => $versao->nome,
                'prioridade' => $versao->prioridade,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.marketing.paginaInicial');
        $this->assertDatabaseHas(app(Versao::class)->getTable(), [
            'status' => StatusVersao::Criado,
            'nome' => $versao->nome,
            'prioridade' => $versao->prioridade,
        ]);
    }

    public function testPodeCriarNovoDataFutura(): void
    {
        $versao = Versao::factory()->make(
            [
                'data_inicio' => Carbon::now()->addDays(1),
                'data_fim' => Carbon::now()->addDays(2),
            ]
        );

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/marketing/pagina/inicial/salvar', [
                'nome' => $versao->nome,
                'prioridade' => $versao->prioridade,
                'data_inicio' => $versao->data_inicio,
                'data_fim' => $versao->data_fim,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.marketing.paginaInicial');
        $this->assertDatabaseHas(app(Versao::class)->getTable(), [
            'status' => StatusVersao::Criado,
            'nome' => $versao->nome,
            'prioridade' => $versao->prioridade,
            'data_inicio' => $versao->data_inicio,
            'data_fim' => $versao->data_fim,
        ]);
    }

    public function testPodeCriarNovoApenasDataInicio(): void
    {
        $versao = Versao::factory()->make(
            [
                'data_inicio' => Carbon::now()->addDays(1),
            ]
        );

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/marketing/pagina/inicial/salvar', [
                'nome' => $versao->nome,
                'prioridade' => $versao->prioridade,
                'data_inicio' => $versao->data_inicio,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.marketing.paginaInicial');
        $this->assertDatabaseHas(app(Versao::class)->getTable(), [
            'status' => StatusVersao::Criado,
            'nome' => $versao->nome,
            'prioridade' => $versao->prioridade,
            'data_inicio' => $versao->data_inicio,
        ]);
    }

    public function testPodeCriarNovoApenasDataFim(): void
    {
        $versao = Versao::factory()->make(
            [
                'data_fim' => Carbon::now()->addDays(1),
            ]
        );

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/marketing/pagina/inicial/salvar', [
                'nome' => $versao->nome,
                'prioridade' => $versao->prioridade,
                'data_fim' => $versao->data_fim,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.marketing.paginaInicial');
        $this->assertDatabaseHas(app(Versao::class)->getTable(), [
            'status' => StatusVersao::Criado,
            'nome' => $versao->nome,
            'prioridade' => $versao->prioridade,
            'data_fim' => $versao->data_fim,
        ]);
    }

    public function testNaoPodeCriarNovoDataPassada(): void
    {
        $versao = Versao::factory()->make(
            [
                'data_inicio' => Carbon::now()->subDays(2),
                'data_fim' => Carbon::now()->subDays(1),
            ]
        );

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/marketing/pagina/inicial/salvar', [
                'nome' => $versao->nome,
                'prioridade' => $versao->prioridade,
                'data_inicio' => $versao->data_inicio,
                'data_fim' => $versao->data_fim,
            ]);

        $response->assertInvalid(['data_inicio', 'data_fim']);
        $this->assertDatabaseMissing(app(Versao::class)->getTable(), [
            'status' => StatusVersao::Criado,
            'nome' => $versao->nome,
            'prioridade' => $versao->prioridade,
            'data_inicio' => $versao->data_inicio,
            'data_fim' => $versao->data_fim,
        ]);
    }

    public function testNaoPodeCriarNovoDataInicioMenorDataFim(): void
    {
        $versao = Versao::factory()->make(
            [
                'data_inicio' => Carbon::now()->addDays(2),
                'data_fim' => Carbon::now()->addDays(1),
            ]
        );

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/marketing/pagina/inicial/salvar', [
                'nome' => $versao->nome,
                'prioridade' => $versao->prioridade,
                'data_inicio' => $versao->data_inicio,
                'data_fim' => $versao->data_fim,
            ]);

        $response->assertInvalid(['data_fim']);
        $this->assertDatabaseMissing(app(Versao::class)->getTable(), [
            'status' => StatusVersao::Criado,
            'nome' => $versao->nome,
            'prioridade' => $versao->prioridade,
            'data_inicio' => $versao->data_inicio,
            'data_fim' => $versao->data_fim,
        ]);
    }

    public function testNaoPodeCriarNovoNomePequeno(): void
    {
        $versao = Versao::factory()->make(
            [
                'nome' => Str::random(4),
            ]
        );

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/marketing/pagina/inicial/salvar', [
                'nome' => $versao->nome,
                'prioridade' => $versao->prioridade,
            ]);

        $response->assertInvalid(['nome']);
        $this->assertDatabaseMissing(app(Versao::class)->getTable(), [
            'status' => StatusVersao::Criado,
            'nome' => $versao->nome,
            'prioridade' => $versao->prioridade,
        ]);
    }

    public function testNaoPodeCriarNovoNomeGrande(): void
    {
        $versao = Versao::factory()->make(
            [
                'nome' => Str::random(260),
            ]
        );

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/marketing/pagina/inicial/salvar', [
                'nome' => $versao->nome,
                'prioridade' => $versao->prioridade,
            ]);

        $response->assertInvalid(['nome']);
        $this->assertDatabaseMissing(app(Versao::class)->getTable(), [
            'status' => StatusVersao::Criado,
            'nome' => $versao->nome,
            'prioridade' => $versao->prioridade,
        ]);
    }

    public function testPodeAcessarEditar(): void
    {
        $versao = Versao::factory()->create();
        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/editar");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/Versao/Editar')
                ->has('versao')
                ->where('versao.id', $versao->id)
        );
    }

    public function testNaoPodeEditarAprovado(): void
    {
        $versao = Versao::factory()->create([
            'status' => StatusVersao::Aprovado,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/editar");

        $response->assertStatus(403);
    }

    public function testNaoPodeEditarReprovado(): void
    {
        $versao = Versao::factory()->create([
            'status' => StatusVersao::Reprovado,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/editar");

        $response->assertStatus(403);
    }

    public function testNaoPodeEditarPublicado(): void
    {
        $versao = Versao::factory()->create([
            'status' => StatusVersao::Publicado,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/editar");

        $response->assertStatus(403);
    }

    public function testPodeEditar(): void
    {
        $versao = Versao::factory()->create();
        $nome = Str::random(10);
        $prioridade = 10;

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/atualizar", [
                'nome' => $nome,
                'prioridade' => $prioridade,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.marketing.paginaInicial');
        $this->assertDatabaseHas(app(Versao::class)->getTable(), [
            'id' => $versao->id,
            'status' => StatusVersao::Criado,
            'nome' => $nome,
            'prioridade' => $prioridade,
        ]);
    }

    public function testNaoPodeEditarVersaoAprovada(): void
    {
        $versao = Versao::factory()->create();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $nome = Str::random(10);
        $prioridade = 10;

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/atualizar", [
                'nome' => $nome,
                'prioridade' => $prioridade,
            ]);

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Versao::class)->getTable(), [
            'id' => $versao->id,
            'status' => StatusVersao::Aprovado,
            'nome' => $versao->nome,
        ]);
    }

    public function testNaoPodeEditarVersaoReprovada(): void
    {
        $versao = Versao::factory()->create();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $nome = Str::random(10);
        $prioridade = 10;

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/atualizar", [
                'nome' => $nome,
                'prioridade' => $prioridade,
            ]);

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Versao::class)->getTable(), [
            'id' => $versao->id,
            'status' => StatusVersao::Reprovado,
            'nome' => $versao->nome,
        ]);
    }

    public function testNaoPodeEditarVersaoPublicada(): void
    {
        $versao = Versao::factory()->create();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $nome = Str::random(10);
        $prioridade = 10;

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/atualizar", [
                'nome' => $nome,
                'prioridade' => $prioridade,
            ]);

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Versao::class)->getTable(), [
            'id' => $versao->id,
            'status' => StatusVersao::Publicado,
            'nome' => $versao->nome,
        ]);
    }

    public function testPodeAcessarVisualizar(): void
    {
        $versao = Versao::factory()->create();
        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/visualizar");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/Versao/Visualizar')
                ->has('versao')
                ->where('versao.id', $versao->id)
        );
    }

    public function testPodeAcessarVisualizarCompleto(): void
    {
        $versao = $this->getVersaoCompleto();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/visualizar");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/Versao/Visualizar')
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

    public function testPodeExcluir(): void
    {
        $versao = Versao::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/excluir");

        $response->assertValid();
        $response->assertRedirectToRoute('admin.marketing.paginaInicial');
        $this->assertDatabaseMissing(app(Versao::class)->getTable(), [
            'id' => $versao->id,
        ]);
    }

    public function testNaoPodeExcluirVersaoAprovada(): void
    {
        $versao = Versao::factory()->create();
        $versao->status = StatusVersao::Aprovado;
        $versao->save();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Versao::class)->getTable(), [
            'id' => $versao->id,
        ]);
    }

    public function testNaoPodeExcluirVersaoReprovada(): void
    {
        $versao = Versao::factory()->create();
        $versao->status = StatusVersao::Reprovado;
        $versao->save();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Versao::class)->getTable(), [
            'id' => $versao->id,
        ]);
    }

    public function testNaoPodeExcluirVersaoPublicada(): void
    {
        $versao = Versao::factory()->create();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Versao::class)->getTable(), [
            'id' => $versao->id,
        ]);
    }

    public function testPodeAprovarCriado(): void
    {
        $versao = Versao::factory()->create();
        $this->criarCarrosselItem($versao);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/aprovar");

        $response->assertStatus(200);
        $this->assertDatabaseHas(app(Versao::class)->getTable(), [
            'id' => $versao->id,
            'status' => StatusVersao::Aprovado,
        ]);
    }

    public function testNaoPodeAprovarSemCarrosell(): void
    {
        $versao = Versao::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/aprovar");

        $response->assertInvalid();
        $this->assertDatabaseMissing(app(Versao::class)->getTable(), [
            'id' => $versao->id,
            'status' => StatusVersao::Aprovado,
        ]);
    }

    public function testNaoPodeAprovarGridSemImagensSuficientes(): void
    {
        $versao = Versao::factory()->create();
        $this->criarCarrosselItem($versao);
        $grid = $this->criarGrid($versao);
        $this->criarGridImagem($grid, 1);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/aprovar");

        $response->assertInvalid(['grid']);
        $this->assertDatabaseMissing(app(Versao::class)->getTable(), [
            'id' => $versao->id,
            'status' => StatusVersao::Aprovado,
        ]);
    }

    public function testNaoPodeAprovarGridImagensDemais(): void
    {
        $versao = Versao::factory()->create();
        $this->criarCarrosselItem($versao);
        $grid = $this->criarGrid($versao);
        $this->criarGridImagem($grid, 5);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/aprovar");

        $response->assertInvalid(['grid']);
        $this->assertDatabaseMissing(app(Versao::class)->getTable(), [
            'id' => $versao->id,
            'status' => StatusVersao::Aprovado,
        ]);
    }

    public function testPodeReprovarCriado(): void
    {
        $versao = Versao::factory()->create();
        $this->criarCarrosselItem($versao);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/reprovar");

        $response->assertStatus(200);
        $this->assertDatabaseHas(app(Versao::class)->getTable(), [
            'id' => $versao->id,
            'status' => StatusVersao::Reprovado,
        ]);
    }

    public function testPodePublicarAprovado(): void
    {
        $versao = Versao::factory([
            'status' => StatusVersao::Aprovado,
        ])->create();
        $this->criarCarrosselItem($versao);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/publicar");

        $response->assertStatus(200);
        $this->assertDatabaseHas(app(Versao::class)->getTable(), [
            'id' => $versao->id,
            'status' => StatusVersao::Publicado,
        ]);
    }

    public function testPodeVoltarPublicado(): void
    {
        $versao = Versao::factory([
            'status' => StatusVersao::Publicado,
        ])->create();
        $this->criarCarrosselItem($versao);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/voltar");

        $response->assertStatus(200);
        $this->assertDatabaseHas(app(Versao::class)->getTable(), [
            'id' => $versao->id,
            'status' => StatusVersao::Criado,
        ]);
    }

    public function testPodeVoltarReprovado(): void
    {
        $versao = Versao::factory([
            'status' => StatusVersao::Reprovado,
        ])->create();
        $this->criarCarrosselItem($versao);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/voltar");

        $response->assertStatus(200);
        $this->assertDatabaseHas(app(Versao::class)->getTable(), [
            'id' => $versao->id,
            'status' => StatusVersao::Criado,
        ]);
    }

    public function testNaoPodeAprovarReprovado(): void
    {
        $versao = Versao::factory([
            'status' => StatusVersao::Reprovado,
        ])->create();
        $this->criarCarrosselItem($versao);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/aprovar");

        $response->assertInvalid('status');
    }

    public function testNaoPodeAprovarPublicado(): void
    {
        $versao = Versao::factory([
            'status' => StatusVersao::Publicado,
        ])->create();
        $this->criarCarrosselItem($versao);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/aprovar");

        $response->assertInvalid('status');
    }

    public function testNaoPodePublicarReprovado(): void
    {
        $versao = Versao::factory([
            'status' => StatusVersao::Reprovado,
        ])->create();
        $this->criarCarrosselItem($versao);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/publicar");

        $response->assertInvalid('status');
    }

    public function testNaoPodePublicarCriado(): void
    {
        $versao = Versao::factory([
            'status' => StatusVersao::Criado,
        ])->create();
        $this->criarCarrosselItem($versao);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/publicar");

        $response->assertInvalid('status');
    }

    public function testNaoPodeReprovarPublicado(): void
    {
        $versao = Versao::factory([
            'status' => StatusVersao::Publicado,
        ])->create();
        $this->criarCarrosselItem($versao);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/reprovar");

        $response->assertInvalid('status');
    }

    public function testNaoPodeReprovarAprovado(): void
    {
        $versao = Versao::factory([
            'status' => StatusVersao::Aprovado,
        ])->create();
        $this->criarCarrosselItem($versao);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/reprovar");

        $response->assertInvalid('status');
    }

    public function testPodeCriarVersaoCompleta(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();

        // Criar Carrossel
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1920, 640);
        $imagemMobile = UploadedFile::fake()->image('imagem.png', 800, 640);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/carrossel/salvar", [
                'link' => '/link',
                'descricao' => 'descrição da imagem',
                'imagem_desktop' => $imagemDesktop,
                'imagem_mobile' => $imagemMobile,
            ]);

        $response->assertValid();
        Storage::assertExists(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        Storage::assertExists(config('equipamentos.imagens.pagina_inicial') . $imagemMobile->hashName());
        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout.carrossel.visualizar', $versao->id);
        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'link' => '/link',
            'descricao' => 'descrição da imagem',
            'nome_arquivo_desktop' => $imagemDesktop->hashName(),
            'nome_arquivo_mobile' => $imagemMobile->hashName(),
        ]);

        // Criar Banner
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 1920, 400);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/banner/salvar", [
                'link' => '/link',
                'descricao' => 'descricao da imagem',
                'titulo' => 'titulo',
                'subtitulo' => 'subtitulo',
                'tela_cheia' => true,
                'imagem_desktop' => $imagemDesktop,
            ]);

        $response->assertValid();
        Storage::assertExists(config('equipamentos.imagens.pagina_inicial') . $imagemDesktop->hashName());
        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout', $versao->id);
        $this->assertDatabaseHas(app(Banner::class)->getTable(), [
            'link' => '/link',
            'descricao' => 'descricao da imagem',
            'nome_desktop' => $imagemDesktop->hashName(),
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'titulo' => 'titulo',
            'subtitulo' => 'subtitulo',
            'tela_cheia' => true,
        ]);

        // Criar Lista de Produtos
        $lista = Lista::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/lista/produtos/salvar", [
                'lista_produtos_id' => $lista->lista_produtos_id,
                'titulo' => $lista->titulo,
                'subtitulo' => $lista->subtitulo,
                'tela_cheia' => false,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout', $versao->id);
        $this->assertDatabaseHas(app(Lista::class)->getTable(), [
            'lista_produtos_id' => $lista->lista_produtos_id,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'titulo' => $lista->titulo,
            'subtitulo' => $lista->subtitulo,
            'tela_cheia' => false,
        ]);

        // Criar Grid
        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/grid/salvar", [
                'tela_cheia' => true,
                'formato' => Formato::Banner_3x1_1x3->value,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout', $versao->id);
        $this->assertDatabaseHas(app(Grid::class)->getTable(), [
            'formato' => Formato::Banner_3x1_1x3->value,
        ]);

        // Criar Imagem do grid
        $componente = Componente::where('versao_id', $versao->id)->where('tipo_type', Grid::class)->first();
        $grid = $componente->tipo;

        $link = Str::random(10);
        $descricao = Str::random(10);
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 500, 500);

        $response = $this->actingAs($this->getAdmin())
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
}
