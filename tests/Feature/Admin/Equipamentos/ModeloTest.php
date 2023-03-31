<?php

namespace Tests\Feature\Admin\Equipamentos;

use App\Enums\Equipamentos\Cadastro\StatusCadastro;
use App\Models\Equipamentos\Cadastro\Marca;
use App\Models\Equipamentos\Cadastro\Modelo;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;
use Illuminate\Testing\Fluent\AssertableJson;

class ModeloTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/modelos');


        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Modelo/Inicio'));
    }

    public function testPodeAcessarComDados(): void
    {
        Modelo::factory()->count(4)->create();
        Modelo::factory()->statusAprovado()->count(3)->create();

        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/modelos');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Modelo/Inicio')
            ->has('modelos')
            ->has('modelos.data', 7));
    }

    public function testPodeAcessarCriar(): void
    {
        Marca::factory()->count(5)->create();
        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/modelos/criar');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Modelo/Criar')
            ->has('marcas', 5));
    }

    public function testPodeCriarAprovado(): void
    {
        $nome = Str::random(25);
        $marca = Marca::factory()->statusAprovado()->create();
        $status = StatusCadastro::Aprovado->value;

        $response = $this->actingAs($this->getAdmin())
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

    public function testPodeCriarSemStatus(): void
    {
        $nome = Str::random(25);
        $marca = Marca::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/modelos/salvar', [
                'nome' => $nome,
                'marca_id' => $marca->id,
            ]);

        $response->assertValid();
        $this->assertDatabaseHas(app(Modelo::class)->getTable(), [
            'nome' => $nome,
            'marca_id' => $marca->id,
        ]);
    }

    public function testNaoPodeCriarComMarcaNaoAprovada(): void
    {
        $nome = Str::random(25);
        $marca = Marca::factory()->create();
        $status = StatusCadastro::Aprovado->value;

        $response = $this->actingAs($this->getAdmin())
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

    public function testNaoPodeCriarMinimoCaracteres(): void
    {
        $nome = 'aa';
        $marca = Marca::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/modelos/salvar', [
                'nome' => $nome,
                'marca_id' => $marca->id,
            ]);

        $response->assertInvalid('nome');
    }

    public function testNaoPodeCriarMaximoCaracteres(): void
    {
        $nome = Str::random(150);
        $marca = Marca::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/modelos/salvar', [
                'nome' => $nome,
                'marca_id' => $marca->id,
            ]);

        $response->assertInvalid('nome');
    }

    public function testNaoPodeCriarStatusInexistente(): void
    {
        $nome = Str::random(25);
        $marca = Marca::factory()->create();
        $statusInexistente = 99;

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/modelos/salvar', [
                'nome' => $nome,
                'marca_id' => $marca->id,
                'status' => $statusInexistente
            ]);

        $response->assertInvalid('status');
        $this->assertDatabaseMissing(app(Modelo::class)->getTable(), [
            'nome' => $nome,
            'marca_id' => $marca->id,
            'status' => $statusInexistente
        ]);
    }

    public function testPodeAcessarEditar(): void
    {
        $marcas = Marca::factory()->count(3)->create();
        $modelo = Modelo::factory()->create([
            'marca_id' => $marcas->first()->id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/modelos/$modelo->id/editar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Modelo/Editar')
            ->has('modelo')
            ->where('modelo.id', $modelo->id)
            ->has('marcas', 3));
    }

    public function testPodeEditar(): void
    {
        $modelo = Modelo::factory()->create();
        $novoNome = Str::random(25);
        $novaMarca = Marca::factory()->statusAprovado()->create();
        $novoStatus = StatusCadastro::Aprovado->value;

        $response = $this->actingAs($this->getAdmin())
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

    public function testPodeEditarSemStatus(): void
    {
        $modelo = Modelo::factory()->create();
        $novoNome = Str::random(25);
        $novaMarca = Marca::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/modelos/$modelo->id/atualizar", [
                'nome' => $novoNome,
                'marca_id' => $novaMarca->id,
            ]);

        $response->assertValid();
        $this->assertDatabaseHas(app(Modelo::class)->getTable(), [
            'id' => $modelo->id,
            'nome' => $novoNome,
            'marca_id' => $novaMarca->id,
        ]);
    }

    public function testNaoPodeEditarMinimoCaracteres(): void
    {
        $modelo = Modelo::factory()->create();
        $novoNome = 'aa';

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/modelos/$modelo->id/atualizar", ['nome' => $novoNome]);

        $response->assertInvalid('nome');
        $this->assertDatabaseMissing(app(Modelo::class)->getTable(), [
            'id' => $modelo->id,
            'nome' => $novoNome,
        ]);
    }

    public function testNaoPodeEditarMaximoCaracteres(): void
    {
        $modelo = Modelo::factory()->create();
        $novoNome = Str::random(150);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/modelos/$modelo->id/atualizar", ['nome' => $novoNome]);

        $response->assertInvalid('nome');
        $this->assertDatabaseMissing(app(Modelo::class)->getTable(), [
            'id' => $modelo->id,
            'nome' => $novoNome,
        ]);
    }

    public function testNaoPodeEditarStatusInexistente(): void
    {
        $modelo = Modelo::factory()->create();
        $novoNome = Str::random(25);
        $novaMarca = Marca::factory()->create();
        $novoStatusInexistente = 99;

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/modelos/$modelo->id/atualizar", [
                'nome' => $novoNome,
                'marca_id' => $novaMarca->id,
                'status' => $novoStatusInexistente
            ]);

        $response->assertInvalid('status');
        $this->assertDatabaseMissing(app(Modelo::class)->getTable(), [
            'id' => $modelo->id,
            'nome' => $novoNome,
            'marca_id' => $novaMarca->id,
            'status' => $novoStatusInexistente
        ]);
    }

    public function testPodeExcluir(): void
    {
        $modelo = Modelo::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/modelos/$modelo->id/excluir");

        $response->assertRedirectToRoute('admin.modelos');
        $this->assertDatabaseMissing(app(Modelo::class)->getTable(), [
            'id' => $modelo->id,
        ]);
    }

    public function testPodePesquisar(): void
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

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/modelos/pesquisar/$marca->id/?termo=Modelo");

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(3));
    }

    public function testPodePesquisarSemMarcarId(): void
    {
        Modelo::factory()->count(5)->create();
        Modelo::factory()->createMany([
            ['nome' => 'Modelo 1'],
            ['nome' => 'Modelo 2'],
            ['nome' => 'Modelo 3'],
            ['nome' => 'Modelo 4'],
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/modelos/pesquisar/?termo=Modelo');

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(4));
    }

    public function testNaoPodePesquisarTermoInvalido(): void
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

        $termo = Str::Random(250);
        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/modelos/pesquisar/$marca->id?termo=$termo");

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(0));
    }
}
