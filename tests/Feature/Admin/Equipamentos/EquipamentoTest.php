<?php

namespace Tests\Feature\Admin\Equipamentos;

use App\Enums\Caracteristicas\TipoCaracteristica;
use App\Models\Caracteristicas\Caracteristica;
use App\Models\Caracteristicas\CaracteristicaEquipamento;
use App\Models\Caracteristicas\Valor\CaracteristicaInteiro;
use App\Models\Equipamentos\Categoria;
use App\Models\Equipamentos\Equipamento;
use App\Models\Equipamentos\Modelo;
use App\Models\Usuario;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;

class EquipamentoTest extends TestCase
{
    use RefreshDatabase;

    private $usuario;

    public function setUp(): void
    {
        parent::setUp();
        $this->usuario = Usuario::factory()->admin()->create();
    }

    public function testPodeAcessar(): void
    {
        $response = $this->actingAs($this->usuario)
            ->get('/admin/equipamentos');


        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamento/Inicio')
            ->has('equipamentos')
            ->has('equipamentos.data', 0));
    }

    public function testPodeAcessarComDados(): void
    {
        $equipamentos = Equipamento::factory()->count(3)->create();
        $response = $this->actingAs($this->usuario)
            ->get('/admin/equipamentos');


        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamento/Inicio')
            ->has('equipamentos')
            ->has('equipamentos.data', count($equipamentos)));
    }

    public function testPodeAcessarCriar()
    {
        $categorias = Categoria::factory()->count(4)->create();

        $response = $this->actingAs($this->usuario)
            ->get('/admin/equipamentos/criar');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamento/Criar')
            ->has('categorias', count($categorias)));
    }

    public function testPodeCriarNovo()
    {
        $equipamento = Equipamento::factory()->make();

        $response = $this->actingAs($this->usuario)
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

    public function testNaoPodeCriarMinimo()
    {
        $equipamento = Equipamento::factory()->make();
        $equipamento->titulo = Str::random(9);
        $equipamento->ano = 1899;

        $response = $this->actingAs($this->usuario)
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

    public function testNaoPodeCriarMaximo()
    {
        $equipamento = Equipamento::factory()->make();
        $equipamento->titulo = Str::random(150);
        $equipamento->ano = Carbon::now()->year + 2;

        $response = $this->actingAs($this->usuario)
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

    public function testPodeAcessarEditar()
    {
        $equipamento = Equipamento::factory()->create();
        $caracteristicas = Caracteristica::factory()->count(6)->create([
            'categoria_id' => $equipamento->categoria_id,
            'tipo' => TipoCaracteristica::Inteiro->value,
        ]);

        $response = $this->actingAs($this->usuario)
            ->get("/admin/equipamentos/$equipamento->id/editar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamento/Editar')
            ->has('equipamento')
            ->where('equipamento.id', $equipamento->id)
            ->has('equipamento.categoria')
            ->has('equipamento.modelo')
            ->has('caracteristicas', count($caracteristicas)));
    }

    public function testPodeAcessarEditarCaracteristicaValor()
    {
        $equipamento = Equipamento::factory()->create();
        $caracteristica = Caracteristica::factory()->create([
            'categoria_id' => $equipamento->categoria_id,
            'tipo' => TipoCaracteristica::Inteiro->value,
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

        $response = $this->actingAs($this->usuario)
            ->get("/admin/equipamentos/$equipamento->id/editar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamento/Editar')
            ->has('equipamento')
            ->where('equipamento.id', $equipamento->id)
            ->has('equipamento.categoria')
            ->has('equipamento.modelo')
            ->has('caracteristicas', 1)
            ->where('caracteristicas.0.id', $caracteristica->id)
            ->where('caracteristicas.0.valor', $caracInt->valor));
    }

    public function testPodeEditar()
    {
        $equipamento = Equipamento::factory()->create();
        $novoTitulo = Str::random(50);
        $novoAno = 2005;

        $response = $this->actingAs($this->usuario)
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

    public function testAtualizarDescricao()
    {
        $equipamento = Equipamento::factory()->create();
        $novaDescricao = fake()->paragraph(3);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/atualizardescricao", [
                'descricao' => $novaDescricao,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editar', $equipamento->id);
        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'descricao' => $novaDescricao,
        ]);
    }

    public function testNaoPodeEditarMinimo()
    {
        $equipamento = Equipamento::factory()->create();
        $novoTitulo = Str::random(5);
        $novoAno = 1899;

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/atualizar", [
                'titulo' => $novoTitulo,
                'ano' => $novoAno,
                'id' => $equipamento->id,
                'valor' => $equipamento->valor,
                'descricao' => $equipamento->descricao,
            ]);

        $response->assertInvalid(['titulo', 'ano']);
    }

    public function testNaoPodeEditarMaximo()
    {
        $equipamento = Equipamento::factory()->create();
        $novoTitulo = Str::random(150);
        $novoAno = Carbon::now()->year + 2;

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/atualizar", [
                'titulo' => $novoTitulo,
                'ano' => $novoAno,
                'id' => $equipamento->id,
                'valor' => $equipamento->valor,
                'descricao' => $equipamento->descricao,
            ]);

        $response->assertInvalid(['titulo', 'ano']);
    }

    public function testPodeExcluir()
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->get("/admin/equipamentos/$equipamento->id/excluir");

        $response->assertRedirectToRoute('admin.equipamentos');
        $this->assertDatabaseMissing(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id
        ]);
    }
}
