<?php

namespace Tests\Feature\Admin\Equipamentos;

use App\Enums\Cadastro\StatusCadastro;
use App\Models\Equipamentos\Marca;
use App\Models\Equipamentos\Modelo;
use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;
use Illuminate\Testing\Fluent\AssertableJson;

class ModeloTest extends TestCase
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
            ->get('/admin/modelos');


        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Modelo/Inicio'));
    }

    public function testPodeAcessarComDados(): void
    {
        Modelo::factory()->count(4)->create();
        Modelo::factory()->statusAprovado()->count(3)->create();

        $response = $this->actingAs($this->usuario)
            ->get('/admin/modelos');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Modelo/Inicio')
            ->has('modelos')
            ->has('modelos.data', 7));
    }

    public function testPodeAcessarCriar()
    {
        $marcas = Marca::factory()->count(5)->create();
        $response = $this->actingAs($this->usuario)
            ->get('/admin/modelos/criar');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Modelo/Criar')
            ->has('marcas', 5));
    }

    public function testPodeCriarAprovado()
    {
        $nome = Str::random(25);
        $marca = Marca::factory()->statusAprovado()->create();
        $status = StatusCadastro::Aprovado->value;

        $response = $this->actingAs($this->usuario)
            ->post('/admin/modelos/salvar', [
                'nome' => $nome,
                'marca_id' => $marca->id,
                'status' => $status
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.modelos');
        $this->assertDatabaseHas(app(Modelo::class)->getTable(), [
            'nome' => $nome,
            'marca_id' => $marca->id,
            'status' => $status
        ]);
    }

    public function testPodeCriarSemStatus()
    {
        $nome = Str::random(25);
        $marca = Marca::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->post('/admin/modelos/salvar', [
                'nome' => $nome,
                'marca_id' => $marca->id
            ]);

        $response->assertValid();
        $this->assertDatabaseHas(app(Modelo::class)->getTable(), [
            'nome' => $nome,
            'marca_id' => $marca->id
        ]);
    }

    public function testNaoPodeCriarComMarcaNaoAprovada()
    {
        $nome = Str::random(25);
        $marca = Marca::factory()->create();
        $status = StatusCadastro::Aprovado->value;

        $response = $this->actingAs($this->usuario)
            ->post('/admin/modelos/salvar', [
                'nome' => $nome,
                'marca_id' => $marca->id,
                'status' => $status
            ]);

        $response->assertInvalid('status');
        $this->assertDatabaseMissing(app(Modelo::class)->getTable(), [
            'nome' => $nome,
            'marca_id' => $marca->id,
            'status' => $status
        ]);
    }

    public function testNaoPodeCriarMinimoCaracteres()
    {
        $nome = 'aa';
        $marca = Marca::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->post('/admin/modelos/salvar', [
                'nome' => $nome,
                'marca_id' => $marca->id
            ]);

        $response->assertInvalid('nome');
    }

    public function testNaoPodeCriarMaximoCaracteres()
    {
        $nome = Str::random(150);
        $marca = Marca::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->post('/admin/modelos/salvar', [
                'nome' => $nome,
                'marca_id' => $marca->id
            ]);

        $response->assertInvalid('nome');
    }

    public function testNaoPodeCriarStatusInexistente()
    {
        $nome = Str::random(25);
        $marca = Marca::factory()->create();
        $status = 99; // Status inexistente

        $response = $this->actingAs($this->usuario)
            ->post('/admin/modelos/salvar', [
                'nome' => $nome,
                'marca_id' => $marca->id,
                'status' => $status
            ]);

        $response->assertInvalid('status');
        $this->assertDatabaseMissing(app(Modelo::class)->getTable(), [
            'nome' => $nome,
            'marca_id' => $marca->id,
            'status' => $status
        ]);
    }

    public function testPodeAcessarEditar()
    {
        $marcas = Marca::factory()->count(3)->create();
        $modelo = Modelo::factory()->create([
            'marca_id' => $marcas->first()->id
        ]);

        $response = $this->actingAs($this->usuario)
            ->get("/admin/modelos/$modelo->id/editar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Modelo/Editar')
            ->has('modelo')
            ->where('modelo.id', $modelo->id)
            ->has('marcas', 3));
    }

    public function testPodeEditar()
    {
        $modelo = Modelo::factory()->create();
        $novoNome = Str::random(25);
        $novaMarca = Marca::factory()->statusAprovado()->create();
        $novoStatus = StatusCadastro::Aprovado->value;

        $response = $this->actingAs($this->usuario)
            ->post("/admin/modelos/$modelo->id/atualizar", [
                'nome' => $novoNome,
                'marca_id' => $novaMarca->id,
                'status' => $novoStatus
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.modelos');
        $this->assertDatabaseHas(app(Modelo::class)->getTable(), [
            'id' => $modelo->id,
            'nome' => $novoNome,
            'marca_id' => $novaMarca->id,
            'status' => $novoStatus
        ]);
    }

    public function testPodeEditarSemStatus()
    {
        $modelo = Modelo::factory()->create();
        $novoNome = Str::random(25);
        $novaMarca = Marca::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->post("/admin/modelos/$modelo->id/atualizar", [
                'nome' => $novoNome,
                'marca_id' => $novaMarca->id
            ]);

        $response->assertValid();
        $this->assertDatabaseHas(app(Modelo::class)->getTable(), [
            'id' => $modelo->id,
            'nome' => $novoNome,
            'marca_id' => $novaMarca->id
        ]);
    }

    public function testNaoPodeEditarMinimoCaracteres()
    {
        $modelo = Modelo::factory()->create();
        $novoNome = 'aa';

        $response = $this->actingAs($this->usuario)
            ->post("/admin/modelos/$modelo->id/atualizar", [
                'nome' => $novoNome
            ]);

        $response->assertInvalid('nome');
        $this->assertDatabaseMissing(app(Modelo::class)->getTable(), [
            'id' => $modelo->id,
            'nome' => $novoNome
        ]);
    }

    public function testNaoPodeEditarMaximoCaracteres()
    {
        $modelo = Modelo::factory()->create();
        $novoNome = Str::random(150);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/modelos/$modelo->id/atualizar", [
                'nome' => $novoNome
            ]);

        $response->assertInvalid('nome');
        $this->assertDatabaseMissing(app(Modelo::class)->getTable(), [
            'id' => $modelo->id,
            'nome' => $novoNome
        ]);
    }

    public function testNaoPodeEditarStatusInexistente()
    {
        $modelo = Modelo::factory()->create();
        $novoNome = Str::random(25);
        $novaMarca = Marca::factory()->create();
        $novoStatus = 99; // Status inexistente

        $response = $this->actingAs($this->usuario)
            ->post("/admin/modelos/$modelo->id/atualizar", [
                'nome' => $novoNome,
                'marca_id' => $novaMarca->id,
                'status' => $novoStatus
            ]);

        $response->assertInvalid('status');
        $this->assertDatabaseMissing(app(Modelo::class)->getTable(), [
            'id' => $modelo->id,
            'nome' => $novoNome,
            'marca_id' => $novaMarca->id,
            'status' => $novoStatus
        ]);
    }

    public function testPodeExcluir()
    {
        $modelo = Modelo::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->get("/admin/modelos/$modelo->id/excluir");

        $response->assertRedirectToRoute('admin.modelos');
        $this->assertDatabaseMissing(app(Modelo::class)->getTable(), [
            'id' => $modelo->id
        ]);
    }


    public function testPodePesquisar()
    {
        $marca = Marca::factory()->create();

        Modelo::factory()->count(5)->create();
        Modelo::factory()->createMany([
            ['nome' => 'Modelo 1', 'marca_id' => $marca->id],
            ['nome' => 'Modelo 2', 'marca_id' => $marca->id],
            ['nome' => 'Modelo 3', 'marca_id' => $marca->id],
            ['nome' => 'Modelo 4'],
        ]);

        $response = $this->actingAs($this->usuario)
            ->get("/admin/modelos/pesquisar/$marca->id/?termo=Modelo");

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(3));
    }

    public function testPodePesquisarSemMarcarId()
    {
        Modelo::factory()->count(5)->create();
        Modelo::factory()->createMany([
            ['nome' => 'Modelo 1'],
            ['nome' => 'Modelo 2'],
            ['nome' => 'Modelo 3'],
            ['nome' => 'Modelo 4'],
        ]);

        $response = $this->actingAs($this->usuario)
            ->get("/admin/modelos/pesquisar/?termo=Modelo");

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(4));
    }

    public function testNaoPodePesquisarTermoInvalido()
    {
        $marca = Marca::factory()->create();

        Modelo::factory()->count(5)->create();
        Modelo::factory()->createMany([
            ['nome' => 'Modelo 1', 'marca_id' => $marca->id],
            ['nome' => 'Modelo 2', 'marca_id' => $marca->id],
            ['nome' => 'Modelo 3', 'marca_id' => $marca->id],
            ['nome' => 'Modelo 4'],
        ]);

        $termo = Str::Random(250);
        $response = $this->actingAs($this->usuario)
            ->get("/admin/modelos/pesquisar/$marca->id?termo=$termo");

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(0));
    }
}
