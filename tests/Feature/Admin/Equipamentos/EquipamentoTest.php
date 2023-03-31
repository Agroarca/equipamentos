<?php

namespace Tests\Feature\Admin\Equipamentos;

use App\Enums\Equipamentos\Cadastro\StatusEquipamento;
use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use App\Models\Equipamentos\Caracteristicas\CaracteristicaEquipamento;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaInteiro;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;

class EquipamentoTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/equipamentos');


        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Inicio')
            ->has('equipamentos')
            ->has('equipamentos.data', 0));
    }

    public function testPodeAcessarComDados(): void
    {
        $equipamentos = Equipamento::factory()->count(3)->create();
        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/equipamentos');


        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Inicio')
            ->has('equipamentos')
            ->has('equipamentos.data', count($equipamentos)));
    }

    public function testPodeAcessarCriar(): void
    {
        $categorias = Categoria::factory()->count(4)->create();

        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/equipamentos/criar');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Criar')
            ->has('categorias', count($categorias)));
    }

    public function testPodeCriarComMarcaModeloDinamico(): void
    {
        $equipamento = Equipamento::factory()->make();

        $marcaResponse = $this->actingAs($this->getAdmin())
            ->post('/admin/marcas/salvar/ajax', [
                'nome' => Str::random(25),
            ]);

        $marcaResponse->assertValid();
        $marcaResponse->assertJsonStructure(['id', 'nome']);

        $this->assertDatabaseHas(app(Marca::class)->getTable(), [
            'nome' => $marcaResponse->json('nome'),
        ]);

        $modeloResponse = $this->actingAs($this->getAdmin())
            ->post('/admin/modelos/salvar/ajax', [
                'nome' => Str::random(25),
                'marca_id' => $marcaResponse->json('id'),
            ]);

        $this->assertDatabaseHas(app(Modelo::class)->getTable(), [
            'nome' => $modeloResponse->json('nome'),
            'marca_id' => $marcaResponse->json('id'),
        ]);

        $modeloResponse->assertValid();
        $modeloResponse->assertJsonStructure(['id', 'nome', 'marca_id']);

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/equipamentos/salvar', [
                'titulo' => $equipamento->titulo,
                'valor' => $equipamento->valor,
                'ano' => $equipamento->ano,
                'descricao' => $equipamento->descricao,
                'modelo_id' => $modeloResponse->json('id'),
                'categoria_id' => $equipamento->categoria_id,
                'marca_id' => $marcaResponse->json('id'),
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos');
        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'titulo' => $equipamento->titulo,
            'valor' => $equipamento->valor,
            'ano' => $equipamento->ano,
            'descricao' => $equipamento->descricao,
            'modelo_id' => $modeloResponse->json('id'),
            'categoria_id' => $equipamento->categoria_id,
        ]);
    }

    public function testPodeCriarNovo(): void
    {
        $equipamento = Equipamento::factory()->make();

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/equipamentos/salvar', [
                'titulo' => $equipamento->titulo,
                'valor' => $equipamento->valor,
                'ano' => $equipamento->ano,
                'descricao' => $equipamento->descricao,
                'modelo_id' => $equipamento->modelo_id,
                'categoria_id' => $equipamento->categoria_id,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos');
        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'titulo' => $equipamento->titulo,
            'valor' => $equipamento->valor,
            'ano' => $equipamento->ano,
            'descricao' => $equipamento->descricao,
            'modelo_id' => $equipamento->modelo_id,
            'categoria_id' => $equipamento->categoria_id,
        ]);
    }

    public function testNaoPodeCriarMinimo(): void
    {
        $equipamento = Equipamento::factory()->make();
        $equipamento->titulo = Str::random(9);
        $equipamento->ano = 1899;

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/equipamentos/salvar', [
                'titulo' => $equipamento->titulo,
                'valor' => $equipamento->valor,
                'ano' => $equipamento->ano,
                'descricao' => $equipamento->descricao,
                'modelo_id' => $equipamento->modelo_id,
                'categoria_id' => $equipamento->categoria_id,
            ]);

        $response->assertInvalid(['titulo', 'ano']);
    }

    public function testNaoPodeCriarMaximo(): void
    {
        $equipamento = Equipamento::factory()->make();
        $equipamento->titulo = Str::random(150);
        $equipamento->ano = Carbon::now()->year + 2;

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/equipamentos/salvar', [
                'titulo' => $equipamento->titulo,
                'valor' => $equipamento->valor,
                'ano' => $equipamento->ano,
                'descricao' => $equipamento->descricao,
                'modelo_id' => $equipamento->modelo_id,
                'categoria_id' => $equipamento->categoria_id,
            ]);

        $response->assertInvalid(['titulo', 'ano']);
    }

    public function testPodeAcessarEditarCadastro(): void
    {
        $equipamento = Equipamento::factory()->create();
        Caracteristica::factory()->count(6)->create([
            'categoria_id' => $equipamento->categoria_id,
            'tipo' => TipoCaracteristica::Inteiro,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/equipamentos/$equipamento->id/editar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/Cadastro')
            ->has('equipamento')
            ->where('equipamento.id', $equipamento->id)
            ->has('equipamento.categoria')
            ->has('equipamento.modelo')
            ->has('equipamento.modelo.marca'));
    }

    public function testPodeAcessarEditarDescricao(): void
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/equipamentos/$equipamento->id/editar/descricao");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/Descricao')
            ->has('equipamento')
            ->where('equipamento.id', $equipamento->id));
    }

    public function testPodeAcessarEditarCaracteristicas(): void
    {
        $equipamento = Equipamento::factory()->create();
        $caracteristicas = Caracteristica::factory()->count(6)->create([
            'categoria_id' => $equipamento->categoria_id,
            'tipo' => TipoCaracteristica::Inteiro,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/equipamentos/$equipamento->id/editar/caracteristicas");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/Caracteristicas')
            ->has('equipamento')
            ->where('equipamento.id', $equipamento->id)
            ->has('caracteristicas', count($caracteristicas)));
    }

    public function testPodeAcessarEditarImagens(): void
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/equipamentos/$equipamento->id/editar/imagens");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/Imagens')
            ->has('equipamento')
            ->where('equipamento.id', $equipamento->id));
    }

    public function testPodeAcessarEditarAprovacao(): void
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/equipamentos/$equipamento->id/editar/aprovacao");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/Aprovacao')
            ->has('equipamento')
            ->where('equipamento.id', $equipamento->id));
    }

    public function testPodeAcessarEditarCaracteristicaValor(): void
    {
        $equipamento = Equipamento::factory()->create();
        $caracteristica = Caracteristica::factory()->create([
            'categoria_id' => $equipamento->categoria_id,
            'tipo' => TipoCaracteristica::Inteiro,
        ]);

        $caracEquip = CaracteristicaEquipamento::create([
            'equipamento_id' => $equipamento->id,
            'caracteristica_id' => $caracteristica->id,
        ]);

        $caracInt = CaracteristicaInteiro::create([
            'valor' => 10,
            'caracteristica_equipamento_id' => $caracEquip->id,
        ]);

        $caracEquip->valor()->associate($caracInt);
        $caracEquip->save();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/equipamentos/$equipamento->id/editar/caracteristicas");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/Caracteristicas')
            ->has('equipamento')
            ->where('equipamento.id', $equipamento->id)
            ->has('caracteristicas', 1)
            ->where('caracteristicas.0.id', $caracteristica->id)
            ->where('caracteristicas.0.valor', $caracInt->valor));
    }

    public function testPodeEditar(): void
    {
        $equipamento = Equipamento::factory()->create();
        $novoTitulo = Str::random(50);
        $novoAno = 2005;

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/equipamentos/$equipamento->id/atualizar", [
                'titulo' => $novoTitulo,
                'ano' => $novoAno,
                'id' => $equipamento->id,
                'valor' => $equipamento->valor,
                'descricao' => $equipamento->descricao,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editar', $equipamento->id);
        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'titulo' => $novoTitulo,
            'valor' => $equipamento->valor,
            'ano' => $novoAno,
            'descricao' => $equipamento->descricao,
        ]);
    }

    public function testAtualizarDescricao(): void
    {
        $equipamento = Equipamento::factory()->create();
        $novaDescricao = fake()->paragraph(3);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/equipamentos/$equipamento->id/atualizardescricao", ['descricao' => $novaDescricao]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editarDescricao', $equipamento->id);
        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'descricao' => $novaDescricao,
        ]);
    }

    public function testNaoPodeEditarMinimo(): void
    {
        $equipamento = Equipamento::factory()->create();
        $novoTitulo = Str::random(5);
        $novoAno = 1899;

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/equipamentos/$equipamento->id/atualizar", [
                'titulo' => $novoTitulo,
                'ano' => $novoAno,
                'id' => $equipamento->id,
                'valor' => $equipamento->valor,
                'descricao' => $equipamento->descricao,
            ]);

        $response->assertInvalid(['titulo', 'ano']);
    }

    public function testNaoPodeEditarMaximo(): void
    {
        $equipamento = Equipamento::factory()->create();
        $novoTitulo = Str::random(150);
        $novoAno = Carbon::now()->year + 2;

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/equipamentos/$equipamento->id/atualizar", [
                'titulo' => $novoTitulo,
                'ano' => $novoAno,
                'id' => $equipamento->id,
                'valor' => $equipamento->valor,
                'descricao' => $equipamento->descricao,
            ]);

        $response->assertInvalid(['titulo', 'ano']);
    }

    public function testPodeExcluir(): void
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/equipamentos/$equipamento->id/excluir");

        $response->assertRedirectToRoute('admin.equipamentos');
        $this->assertDatabaseMissing(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
        ]);
    }

    public function testPodeAprovarEquipamento(): void
    {
        $equipamento = Equipamento::factory()->create([
            'status' => StatusEquipamento::Criado,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/equipamentos/$equipamento->id/status/atualizar", [
                'status' => StatusEquipamento::Aprovado->value,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editar', $equipamento->id);
        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'status' => StatusEquipamento::Aprovado->value,
        ]);
    }

    public function testNaoPodeAprovarEquipamentoComMotivo(): void
    {
        $equipamento = Equipamento::factory()->create([
            'status' => StatusEquipamento::Criado,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/equipamentos/$equipamento->id/status/atualizar", [
                'status' => StatusEquipamento::Aprovado->value,
                'motivo_reprovado' => 'Motivo de teste',
            ]);

        $response->assertInvalid('motivo_reprovado');
        $this->assertDatabaseMissing(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'status' => StatusEquipamento::Aprovado->value,
        ]);
    }

    public function testPodeReprovarEquipamento(): void
    {
        $equipamento = Equipamento::factory()->create([
            'status' => StatusEquipamento::Criado,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/equipamentos/$equipamento->id/status/atualizar", [
                'status' => StatusEquipamento::Reprovado->value,
                'motivo_reprovado' => 'Motivo de teste',
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editar', $equipamento->id);
        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'status' => StatusEquipamento::Reprovado->value,
        ]);
    }

    public function testNaoPodeReprovarEquipamentoSemMotivo(): void
    {
        $equipamento = Equipamento::factory()->create([
            'status' => StatusEquipamento::Criado,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/equipamentos/$equipamento->id/status/atualizar", [
                'status' => StatusEquipamento::Reprovado->value,
            ]);

        $response->assertInvalid('motivo_reprovado');
        $this->assertDatabaseMissing(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'status' => StatusEquipamento::Reprovado->value,
        ]);
    }
}
