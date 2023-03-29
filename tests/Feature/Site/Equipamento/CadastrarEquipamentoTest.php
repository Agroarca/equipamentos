<?php

namespace Tests\Feature\Site\Equipamento;

use App\Enums\Caracteristicas\TipoCaracteristica;
use App\Models\Caracteristicas\Caracteristica;
use App\Models\Equipamentos\Categoria;
use App\Models\Equipamentos\Equipamento;
use App\Models\Equipamentos\EquipamentoImagem;
use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;
use App\Models\Caracteristicas\CaracteristicaEquipamento;

class CadastrarEquipamentoTest extends TestCase
{
    use RefreshDatabase;

    private $usuario;

    public function setUp(): void
    {
        parent::setUp();
        $this->usuario = Usuario::factory()->create();
    }

    public function testPodeAcessar(): void
    {
        $response = $this->actingAs($this->usuario)
            ->get('/equipamento/cadastrar');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Cadastrar/Novo'));
    }

    public function testPodeSalvarCadastro()
    {
        $equipamento = Equipamento::factory()->make();

        $response = $this->actingAs($this->usuario)
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

    public function testNaoPodeSalvarCadastroComCampoInvalido()
    {
        $equipamento = Equipamento::factory()->make();

        $response = $this->actingAs($this->usuario)
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

    public function testPodeAcessarImagens()
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->get("/equipamento/{$equipamento->id}/imagens");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Cadastrar/Imagens'));
    }

    public function testNaoPodeAcessarImagensSemCadastrar()
    {
        $response = $this->actingAs($this->usuario)
            ->get("/equipamento/1/imagens");

        $response->assertStatus(404);
    }

    public function testPodeAdicionarImagem()
    {
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $descricao = Str::random(25);
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->post("/equipamento/{$equipamento->id}/imagens/salvar", [
                'descricao' => $descricao,
                'imagem' => $imagem
            ]);

        Storage::assertExists(config('equipamentos.path_imagens') . '/' . $imagem->hashName());
        $response->assertValid();
        $response->assertRedirectToRoute('site.equipamento.imagens', $equipamento->id);
        $this->assertDatabaseHas(app(EquipamentoImagem::class)->getTable(), [
            'descricao' => $descricao,
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testPodeExcluirImagem()
    {
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $equipamentoImagem = EquipamentoImagem::factory()->make();
        $equipamentoImagem->nome_arquivo = $imagem->hashName();
        $equipamentoImagem->save();

        $imagem->storeAs(config('equipamentos.path_imagens') . '/' . $imagem->hashName());

        $response = $this->actingAs($this->usuario)
            ->get("/equipamento/$equipamentoImagem->equipamento_id/imagens/$equipamentoImagem->id/excluir");

        Storage::assertMissing(config('equipamentos.path_imagens') . '/' . $imagem->hashName());
        $response->assertRedirectToRoute('site.equipamento.imagens', $equipamentoImagem->equipamento_id);
        $this->assertDatabaseMissing(app(EquipamentoImagem::class)->getTable(), [
            'id' => $equipamentoImagem->id
        ]);
    }

    public function testPodeContinuarComImagemCadastrada()
    {
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $equipamentoImagem = EquipamentoImagem::factory()->make();
        $equipamentoImagem->nome_arquivo = $imagem->hashName();
        $equipamentoImagem->save();

        $imagem->storeAs(config('equipamentos.path_imagens') . '/' . $imagem->hashName());
        $response = $this->actingAs($this->usuario)
            ->get("/equipamento/$equipamentoImagem->equipamento_id/imagens/continuar");

        $response->assertRedirectToRoute('site.equipamento.descricao', $equipamentoImagem->equipamento_id);
    }

    public function testNaoPodeContinuarSemImagemCadastrada()
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->get("/equipamento/{$equipamento->id}/imagens/continuar");

        $response->assertInvalid(['imagem']);
    }

    public function testPodeAcessarDescricao()
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->get("/equipamento/{$equipamento->id}/descricao");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Cadastrar/Descricao'));
    }

    public function testPodeSalvarDescricao()
    {
        $equipamento = Equipamento::factory()->create();
        $descricao = Str::random(25);

        $response = $this->actingAs($this->usuario)
            ->post("/equipamento/{$equipamento->id}/descricao/salvar", [
                'descricao' => $descricao
            ]);

        $response->assertRedirectToRoute('site.equipamento.caracteristicas', $equipamento->id);
        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'descricao' => $descricao
        ]);
    }

    public function testNaoPodeSalvarDescicaoInvalida()
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->post("/equipamento/{$equipamento->id}/descricao/salvar", [
                'descricao' => ''
            ]);

        $response->assertInvalid(['descricao']);
        $this->assertDatabaseMissing(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'descricao' => ''
        ]);
    }

    public function testPodeAcessarCaracteristica()
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->get("/equipamento/{$equipamento->id}/caracteristicas");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Cadastrar/Caracteristicas'));
    }

    public function testPodeSalvarCaracteristicaTipoInt()
    {
        $categoria = Categoria::factory()->create();
        $caracteristicaInteiro = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Inteiro->value,
            'categoria_id' => $categoria->id,
        ]);

        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $categoria->id,
        ]);

        $response = $this->actingAs($this->usuario)
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

    public function testPodeSalvarCaracteristicaTipoTextoLongo()
    {
        $categoria = Categoria::factory()->create();
        $caracteristicaInteiro = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo->value,
            'categoria_id' => $categoria->id,
        ]);

        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $categoria->id,
        ]);

        $response = $this->actingAs($this->usuario)
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

    public function testPodeFinalizar()
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->get("/equipamento/{$equipamento->id}/finalizar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Cadastrar/Finalizar'));
    }

    public function testPodeAcessarFinalizacao()
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->get("/equipamento/{$equipamento->id}/finalizar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Cadastrar/Finalizar'));
    }
}
