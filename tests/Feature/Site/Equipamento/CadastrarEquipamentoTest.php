<?php

namespace Tests\Feature\Site\Equipamento;

use App\Enums\Equipamentos\Cadastro\StatusEquipamento;
use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use Illuminate\Support\Str;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Cadastro\EquipamentoImagem;
use App\Models\Equipamentos\Cadastro\Marca;
use App\Models\Equipamentos\Cadastro\Modelo;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use App\Models\Equipamentos\Caracteristicas\CaracteristicaEquipamento;
use App\Services\Equipamentos\Cadastro\EquipamentoService;
use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Testing\Fluent\AssertableJson;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class CadastrarEquipamentoTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessarCadastroCategoria(): void
    {
        $response = $this->actingAs($this->getUsuario())
            ->get('equipamento/cadastrar');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Cadastrar/Categoria'));
    }

    public function testPodeAcessar(): void
    {
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($this->getUsuario())
            ->get("/equipamento/cadastro/$categoria->id");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Cadastrar/Novo'));
    }

    public function testPodeAcessarEditarEquipamento(): void
    {
        $usuario = $this->getUsuario();

        $equipamento = Equipamento::factory()->create([
            'usuario_id' => $usuario->id,
        ]);

        $response = $this->actingAs($usuario)
            ->get("/equipamento/cadastro/editar/$equipamento->id");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Editar/Editar'));
    }

    public function testNaoPodeAcessarEditarEquipamentoAprovado(): void
    {
        $usuario = $this->getUsuario();
        $equipamento = Equipamento::factory()->statusAprovado()->create([
            'usuario_id' => $usuario->id,
        ]);

        $response = $this->actingAs($usuario)
            ->get("/equipamento/cadastro/editar/$equipamento->id");

        $response->assertStatus(403);
    }

    public function testNaoPodeAcessarEditarEquipamentoDeOutroUsuario(): void
    {
        $usuario = Usuario::factory()->create();
        $equipamento = Equipamento::factory()->create([
            'usuario_id' => $usuario->id,
        ]);

        $response = $this->actingAs($this->getUsuario())
            ->get("/equipamento/cadastro/editar/$equipamento->id");

        $response->assertStatus(403);
    }

    public function testNaoPodeAcessarSemCategoria(): void
    {
        $response = $this->actingAs($this->getUsuario())
            ->get('/equipamento/cadastro/');

        $response->assertStatus(404);
    }

    public function testNaoPodeAcessarComCategoriaInvalida(): void
    {
        $response = $this->actingAs($this->getUsuario())
            ->get('/equipamento/cadastrar/1');

        $response->assertStatus(404);
    }

    public function testPodeSalvarCadastro(): void
    {
        $equipamento = Equipamento::factory()->make();

        $response = $this->actingAs($this->getUsuario())
            ->post('/equipamento/salvar', [
                'titulo' => $equipamento->titulo,
                'valor' => $equipamento->valor,
                'ano' => $equipamento->ano,
                'modelo_id' => $equipamento->modelo_id,
                'marca_id' => $equipamento->modelo->marca_id,
                'categoria_id' => $equipamento->categoria_id,
            ]);
        $response->assertValid();

        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'titulo' => $equipamento->titulo,
            'valor' => $equipamento->valor,
            'ano' => $equipamento->ano,
            'modelo_id' => $equipamento->modelo_id,
            'categoria_id' => $equipamento->categoria_id,
        ]);
    }

    public function testNaoPodeSalvarCadastroComCampoInvalido(): void
    {
        $equipamento = Equipamento::factory()->make();

        $response = $this->actingAs($this->getUsuario())
            ->post('/equipamento/salvar', [
                'titulo' => '',
                'valor' => $equipamento->valor,
                'ano' => $equipamento->ano,
                'modelo_id' => $equipamento->modelo_id,
                'categoria_id' => $equipamento->categoria_id,
            ]);
        $response->assertInvalid(['titulo']);
        $this->assertDatabaseMissing(app(Equipamento::class)->getTable(), [
            'titulo' => $equipamento->titulo,
            'valor' => $equipamento->valor,
            'ano' => $equipamento->ano,
            'modelo_id' => $equipamento->modelo_id,
            'categoria_id' => $equipamento->categoria_id,
        ]);
    }

    public function testPodeAcessarImagens(): void
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->getUsuario())
            ->get("/equipamento/{$equipamento->id}/imagens");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Cadastrar/Imagens'));
    }

    public function testNaoPodeAcessarImagensSemCadastrar(): void
    {
        $response = $this->actingAs($this->getUsuario())
            ->get('/equipamento/1/imagens');

        $response->assertStatus(404);
    }

    public function testPodeAdicionarImagem(): void
    {
        $equipService = app(EquipamentoService::class);
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->getUsuario())
            ->post("/equipamento/$equipamento->id/imagens/salvar", [
                'imagem' => $imagem,
            ]);

        Storage::assertExists($equipService->getStoragePathImagem($equipamento->id) . $imagem->hashName());
        $response->assertValid();
        $response->assertRedirectToRoute('site.equipamento.imagens', $equipamento->id);
        $this->assertDatabaseHas(app(EquipamentoImagem::class)->getTable(), [
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testPodeExcluirImagem(): void
    {
        $equipService = app(EquipamentoService::class);
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $equipamentoImagem = EquipamentoImagem::factory()->make();
        $equipamentoImagem->nome_arquivo = $imagem->hashName();
        $equipamentoImagem->save();

        $imagem->storeAs($equipService->getStoragePathImagem($equipamentoImagem->equipamento_id) . $imagem->hashName());

        $response = $this->actingAs($this->getUsuario())
            ->get("/equipamento/$equipamentoImagem->equipamento_id/imagens/$equipamentoImagem->id/excluir");

        Storage::assertMissing(
            $equipService->getStoragePathImagem($equipamentoImagem->equipamento_id) . $imagem->hashName()
        );
        $response->assertRedirectToRoute('site.equipamento.imagens', $equipamentoImagem->equipamento_id);
        $this->assertDatabaseMissing(app(EquipamentoImagem::class)->getTable(), [
            'id' => $equipamentoImagem->id,
        ]);
    }

    public function testPodeContinuarComImagemCadastrada(): void
    {
        $equipService = app(EquipamentoService::class);
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $equipamentoImagem = EquipamentoImagem::factory()->make();
        $equipamentoImagem->nome_arquivo = $imagem->hashName();
        $equipamentoImagem->save();

        $imagem->storeAs($equipService->getStoragePathImagem($equipamentoImagem->equipamento_id) . $imagem->hashName());
        $response = $this->actingAs($this->getUsuario())
            ->get("/equipamento/$equipamentoImagem->equipamento_id/imagens/continuar");

        $response->assertRedirectToRoute('site.equipamento.descricao', $equipamentoImagem->equipamento_id);
    }

    public function testNaoPodeContinuarSemImagemCadastrada(): void
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->getUsuario())
            ->get("/equipamento/{$equipamento->id}/imagens/continuar");

        $response->assertInvalid(['imagem']);
    }

    public function testPodeAcessarDescricao(): void
    {
        $equipamento = Equipamento::factory()->create();
        EquipamentoImagem::factory()->create([
            'equipamento_id' => $equipamento->id,
        ]);

        $response = $this->actingAs($this->getUsuario())
            ->get("/equipamento/{$equipamento->id}/descricao");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Cadastrar/Descricao'));
    }

    public function testPodeSalvarDescricao(): void
    {
        $equipamento = Equipamento::factory()->create();
        $descricao = Str::random(25);

        $response = $this->actingAs($this->getUsuario())
            ->post("/equipamento/{$equipamento->id}/descricao/salvar", [
                'descricao' => $descricao,
            ]);

        $response->assertRedirectToRoute('site.equipamento.caracteristicas', $equipamento->id);
        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'descricao' => $descricao,
        ]);
    }

    public function testNaoPodeSalvarDescicaoInvalida(): void
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->getUsuario())
            ->post("/equipamento/{$equipamento->id}/descricao/salvar", [
                'descricao' => Str::random(5),
            ]);

        $response->assertInvalid(['descricao']);
        $this->assertDatabaseMissing(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'descricao' => '',
        ]);
    }

    public function testPodeAcessarCaracteristica(): void
    {
        $equipamento = Equipamento::factory()->create();
        EquipamentoImagem::factory()->create([
            'equipamento_id' => $equipamento->id,
        ]);

        $response = $this->actingAs($this->getUsuario())
            ->get("/equipamento/{$equipamento->id}/caracteristicas");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Cadastrar/Caracteristicas'));
    }

    public function testPodeSalvarCaracteristicaTipoInt(): void
    {
        $categoria = Categoria::factory()->create();
        $caracteristicaInteiro = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Inteiro->value,
            'categoria_id' => $categoria->id,
        ]);

        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $categoria->id,
        ]);

        $response = $this->actingAs($this->getUsuario())
            ->post("/equipamento/{$equipamento->id}/caracteristicas/salvar", [
                "carac-$caracteristicaInteiro->id" => 10,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('site.equipamento.finalizar', $equipamento->id);
        $this->assertDatabaseHas(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristicaInteiro->id,
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testPodeSalvarCaracteristicaTipoTextoLongo(): void
    {
        $categoria = Categoria::factory()->create();
        $caracteristicaInteiro = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo->value,
            'categoria_id' => $categoria->id,
        ]);

        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $categoria->id,
        ]);

        $response = $this->actingAs($this->getUsuario())
            ->post("/equipamento/{$equipamento->id}/caracteristicas/salvar", [
                "carac-$caracteristicaInteiro->id" => Str::random(200),
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('site.equipamento.finalizar', $equipamento->id);
        $this->assertDatabaseHas(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristicaInteiro->id,
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testPodeAcessarFinalizacao(): void
    {
        $equipamento = Equipamento::factory()->create();
        EquipamentoImagem::factory()->create(['equipamento_id' => $equipamento->id]);

        $response = $this->actingAs($this->getUsuario())
            ->get("/equipamento/{$equipamento->id}/finalizar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Cadastrar/Finalizar'));
    }

    public function testNaoPodeAcessarDescricaoSemImagem(): void
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->getUsuario())
            ->get("/equipamento/{$equipamento->id}/descricao");

        $response->assertStatus(403);
    }

    public function testNaoPodeAcessarCaracteristicaSemImagem(): void
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->getUsuario())
            ->get("/equipamento/{$equipamento->id}/caracteristicas");

        $response->assertStatus(403);
    }

    public function testNaoPodeAcessarFinalizacaoSemImagem(): void
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->getUsuario())
            ->get("/equipamento/{$equipamento->id}/finalizar");

        $response->assertStatus(403);
    }

    public function testNaoPodeAcessarCaracteristicaSemDescricao(): void
    {
        $equipamento = Equipamento::factory()->create(['descricao' => '']);
        EquipamentoImagem::factory()->create(['equipamento_id' => $equipamento->id]);

        $response = $this->actingAs($this->getUsuario())
            ->get("/equipamento/{$equipamento->id}/caracteristicas");

        $response->assertStatus(403);
    }

    public function testNaoPodeAcessarFinalizacaoSemDescricao(): void
    {
        $equipamento = Equipamento::factory()->create(['descricao' => '']);
        EquipamentoImagem::factory()->create(['equipamento_id' => $equipamento->id]);

        $response = $this->actingAs($this->getUsuario())
            ->get("/equipamento/{$equipamento->id}/finalizar");

        $response->assertStatus(403);
    }

    public function testNaoPodeAcessarFinalizacaoSemCaracteristica(): void
    {
        $categoria = Categoria::factory()->create();
        Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Inteiro->value,
            'obrigatorio' => true,
            'categoria_id' => $categoria->id,
        ]);

        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $categoria->id,
        ]);
        EquipamentoImagem::factory()->create(['equipamento_id' => $equipamento->id]);

        $response = $this->actingAs($this->getUsuario())
            ->get("/equipamento/{$equipamento->id}/finalizar");

        $response->assertStatus(403);
    }

    public function testPodeAcessarCaracteristicasComValor(): void
    {
        $categoria = Categoria::factory()->create();
        $caracteristicaObrigatoria = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo->value,
            'obrigatorio' => true,
            'categoria_id' => $categoria->id,
        ]);
        $caracteristicaOpcional = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo->value,
            'obrigatorio' => false,
            'categoria_id' => $categoria->id,
        ]);

        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $categoria->id,
        ]);
        EquipamentoImagem::factory()->create(['equipamento_id' => $equipamento->id]);

        $response = $this->actingAs($this->getUsuario())
            ->post("/equipamento/{$equipamento->id}/caracteristicas/salvar", [
                "carac-$caracteristicaObrigatoria->id" => Str::random(200),
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('site.equipamento.finalizar', $equipamento->id);
        $this->assertDatabaseHas(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristicaObrigatoria->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $this->assertDatabaseMissing(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristicaOpcional->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $response = $this->actingAs($this->getUsuario())
            ->get("/equipamento/{$equipamento->id}/caracteristicas");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Cadastrar/Caracteristicas'));
    }

    public function testMudarStatusParaCriadoAposSalvarCaracteristica(): void
    {
        $usuario = Usuario::factory()->create();
        $categoria = Categoria::factory()->create();
        $caracteristicaObrigatoria = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo->value,
            'obrigatorio' => true,
            'categoria_id' => $categoria->id,
        ]);

        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $categoria->id,
            'usuario_id' => $usuario->id,
            'status' => StatusEquipamento::Cadastrando->value,
        ]);

        EquipamentoImagem::factory()->create(['equipamento_id' => $equipamento->id]);

        $response = $this->actingAs($usuario)
            ->post("/equipamento/{$equipamento->id}/caracteristicas/salvar", [
                "carac-$caracteristicaObrigatoria->id" => Str::random(200),
            ]);

        $response->assertStatus(302);
        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'status' => StatusEquipamento::Criado->value,
        ]);
    }

    public function testPodeSalvarEquipametoEditado(): void
    {
        $usuario = Usuario::factory()->create();
        $equipamento = Equipamento::factory()->create([
            'usuario_id' => $usuario->id,
        ]);
        EquipamentoImagem::factory()->create(['equipamento_id' => $equipamento->id]);

        $response = $this->actingAs($usuario)
            ->post('/equipamento/salvar', [
                'id' => $equipamento->id,
                'titulo' => 'Nome editado',
                'valor' => 100,
                'ano' => 2000,
            ]);

        $response->assertValid();
        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'titulo' => 'Nome editado',
            'valor' => 100,
            'ano' => 2000,
        ]);
    }

    public function testNaoPodeEditarEquipamentoDeOutroUsuario(): void
    {
        $usuario = Usuario::factory()->create();
        $equipamento = Equipamento::factory()->create([
            'usuario_id' => $usuario->id,
        ]);
        EquipamentoImagem::factory()->create(['equipamento_id' => $equipamento->id]);

        $response = $this->actingAs($this->getUsuario())
            ->post('/equipamento/salvar', [
                'id' => $equipamento->id,
                'titulo' => 'Nome editado',
                'valor' => 100,
                'ano' => 2000,
            ]);

        $response->assertStatus(403);
    }

    public function testNaoPodeSalvarEquipamentoEditadoAprovado(): void
    {
        $usuario = Usuario::factory()->create();
        $equipamento = Equipamento::factory()->statusAprovado()->create([
            'usuario_id' => $usuario->id,
        ]);
        EquipamentoImagem::factory()->create(['equipamento_id' => $equipamento->id]);

        $response = $this->actingAs($usuario)
            ->post('/equipamento/salvar', [
                'id' => $equipamento->id,
                'titulo' => 'Nome editado',
                'valor' => 100,
                'ano' => 2000,
            ]);

        $response->assertStatus(403);
        $this->assertDatabaseMissing(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'titulo' => 'Nome editado',
            'valor' => 100,
            'ano' => 2000,
        ]);
    }

    public function testPodePesquisarMarca(): void
    {
        Marca::factory()->statusAprovado()->count(5)->create();
        Marca::factory()->statusAprovado()->createMany([
            ['nome' => 'Marca 1'],
            ['nome' => 'Marca 2'],
            ['nome' => 'Marca 3'],
            ['nome' => 'Marca 4'],
        ]);

        $response = $this->get('/pesquisar/marcas?termo=Marca');

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(4));
    }

    public function testPodePesquisarModelo(): void
    {
        $marca = Marca::factory()->create();

        Modelo::factory()->count(5)->create();
        Modelo::factory()->createMany([
            [
                'nome' => 'Modelo 1',
                'marca_id' => $marca->id,
            ],
            [
                'nome' => 'Modelo 2',
                'marca_id' => $marca->id,
            ],
            [
                'nome' => 'Modelo 3',
                'marca_id' => $marca->id,
            ],
            ['nome' => 'Modelo 4'],
        ]);

        $response = $this->get("/pesquisar/$marca->id/modelos/?termo=Modelo");

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(3));
    }

    public function testNaoPodePesquisarModeloSemMarcaId(): void
    {
        $response = $this->get('/pesquisar//modelos/?termo=Modelo');

        $response->assertStatus(404);
    }

    public function testNaoPodePesquisarMarcaSemTermo(): void
    {
        $response = $this->get('/pesquisar/marcas?termo=');

        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(0));
    }

    public function testNaoPodePesquisarModeloSemTermo(): void
    {
        $response = $this->get('/pesquisar/1/modelos/?termo=');

        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(0));
    }

    public function testPodeCriarComMarcaModeloDinamico(): void
    {
        $usuario = $this->getUsuario();

        $equipamento = Equipamento::factory()->make();

        $marcaResponse = $this->actingAs($usuario)
            ->post('/marca/salvar/ajax', [
                'nome' => Str::random(25),
            ]);

        $marcaResponse->assertValid();
        $marcaResponse->assertJsonStructure(['id', 'nome']);

        $this->assertDatabaseHas(app(Marca::class)->getTable(), [
            'nome' => $marcaResponse->json('nome'),
        ]);

        $modeloResponse = $this->actingAs($usuario)
            ->post('/modelo/salvar/ajax', [
                'nome' => Str::random(25),
                'marca_id' => $marcaResponse->json('id'),
            ]);

        $this->assertDatabaseHas(app(Modelo::class)->getTable(), [
            'nome' => $modeloResponse->json('nome'),
            'marca_id' => $marcaResponse->json('id'),
        ]);

        $modeloResponse->assertValid();
        $modeloResponse->assertJsonStructure(['id', 'nome', 'marca_id']);

        $response = $this->actingAs($usuario)
            ->post('/equipamento/salvar', [
                'titulo' => $equipamento->titulo,
                'valor' => $equipamento->valor,
                'ano' => $equipamento->ano,
                'descricao' => $equipamento->descricao,
                'modelo_id' => $modeloResponse->json('id'),
                'categoria_id' => $equipamento->categoria_id,
            ]);

        $response->assertValid();
        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'titulo' => $equipamento->titulo,
            'valor' => $equipamento->valor,
            'ano' => $equipamento->ano,
            'descricao' => $equipamento->descricao,
            'modelo_id' => $modeloResponse->json('id'),
            'categoria_id' => $equipamento->categoria_id,
        ]);
    }
}
