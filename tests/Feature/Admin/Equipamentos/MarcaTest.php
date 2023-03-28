<?php

namespace Tests\Feature\Admin\Equipamentos;

use App\Enums\Equipamentos\Cadastro\StatusCadastro;
use App\Models\Equipamentos\Cadastro\Marca;
use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;
use Illuminate\Testing\Fluent\AssertableJson;

class MarcaTest extends TestCase
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
            ->get('/admin/marcas');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Marca/Inicio'));
    }

    public function testPodeAcessarComDados(): void
    {
        Marca::factory()->count(4)->create();
        Marca::factory()->statusAprovado()->count(4)->create();

        $response = $this->actingAs($this->usuario)
            ->get('/admin/marcas');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Marca/Inicio')
            ->has('marcas')
            ->has('marcas.data', 8));
    }

    public function testPodeAcessarCriar()
    {
        $response = $this->actingAs($this->usuario)
            ->get('/admin/marcas/criar');
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Marca/Criar'));
    }

    public function testPodeCriarAprovado()
    {
        $nome = Str::random(25);
        $status = StatusCadastro::Aprovado->value;

        $response = $this->actingAs($this->usuario)
            ->post('/admin/marcas/salvar', [
                'nome' => $nome,
                'status' => $status
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.marcas');
        $this->assertDatabaseHas(app(Marca::class)->getTable(), [
            'nome' => $nome,
            'status' => $status
        ]);
    }

    public function testPodeCriarSemStatus()
    {
        $nome = Str::random(25);

        $response = $this->actingAs($this->usuario)
            ->post('/admin/marcas/salvar', [
                'nome' => $nome
            ]);

        $response->assertValid();
        $this->assertDatabaseHas(app(Marca::class)->getTable(), [
            'nome' => $nome
        ]);
    }

    public function testNaoPodeCriarMinimoCaracteres()
    {
        $nome = 'aa';

        $response = $this->actingAs($this->usuario)
            ->post('/admin/marcas/salvar', [
                'nome' => $nome
            ]);

        $response->assertInvalid('nome');
        $this->assertDatabaseMissing(app(Marca::class)->getTable(), [
            'nome' => $nome
        ]);
    }

    public function testNaoPodeCriarMaximoCaracteres()
    {
        $nome = Str::random(150);

        $response = $this->actingAs($this->usuario)
            ->post('/admin/marcas/salvar', [
                'nome' => $nome
            ]);

        $response->assertInvalid('nome');
        $this->assertDatabaseMissing(app(Marca::class)->getTable(), [
            'nome' => $nome
        ]);
    }

    public function testNaoPodeCriarStatusInexistente()
    {
        $nome = Str::random(25);
        $status = 99; // Status inexistente

        $response = $this->actingAs($this->usuario)
            ->post('/admin/marcas/salvar', [
                'nome' => $nome,
                'status' => $status
            ]);

        $response->assertInvalid('status');
        $this->assertDatabaseMissing(app(Marca::class)->getTable(), [
            'nome' => $nome,
            'status' => $status
        ]);
    }

    public function testPodeAcessarEditar()
    {
        $marca = Marca::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->get("/admin/marcas/$marca->id/editar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Marca/Editar')
            ->has('marca')
            ->where('marca.id', $marca->id));
    }

    public function testPodeEditar()
    {
        $marca = Marca::factory()->create();
        $novoNome = Str::random(25);
        $novoStatus = StatusCadastro::Aprovado->value;

        $response = $this->actingAs($this->usuario)
            ->post("/admin/marcas/$marca->id/atualizar", [
                'nome' => $novoNome,
                'status' => $novoStatus
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.marcas');
        $this->assertDatabaseHas(app(Marca::class)->getTable(), [
            'id' => $marca->id,
            'nome' => $novoNome,
            'status' => $novoStatus
        ]);
    }

    public function testPodeEditarSemStatus()
    {
        $marca = Marca::factory()->create();
        $novoNome = Str::random(25);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/marcas/$marca->id/atualizar", [
                'nome' => $novoNome
            ]);

        $response->assertValid();
        $this->assertDatabaseHas(app(Marca::class)->getTable(), [
            'id' => $marca->id,
            'nome' => $novoNome
        ]);
    }

    public function testNaoPodeEditarMinimoCaracteres()
    {
        $marca = Marca::factory()->create();
        $novoNome = 'aa';

        $response = $this->actingAs($this->usuario)
            ->post("/admin/marcas/$marca->id/atualizar", [
                'nome' => $novoNome
            ]);

        $response->assertInvalid('nome');
        $this->assertDatabaseMissing(app(Marca::class)->getTable(), [
            'id' => $marca->id,
            'nome' => $novoNome
        ]);
    }

    public function testNaoPodeEditarMaximoCaracteres()
    {
        $marca = Marca::factory()->create();
        $novoNome = Str::random(150);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/marcas/$marca->id/atualizar", [
                'nome' => $novoNome
            ]);

        $response->assertInvalid('nome');
        $this->assertDatabaseMissing(app(Marca::class)->getTable(), [
            'id' => $marca->id,
            'nome' => $novoNome
        ]);
    }

    public function testNaoPodeEditarStatusInexistente()
    {
        $marca = Marca::factory()->create();
        $novoNome = Str::random(25);
        $novoStatus = 99; // Status inexistente

        $response = $this->actingAs($this->usuario)
            ->post("/admin/marcas/$marca->id/atualizar", [
                'nome' => $novoNome,
                'status' => $novoStatus
            ]);

        $response->assertInvalid('status');
        $this->assertDatabaseMissing(app(Marca::class)->getTable(), [
            'id' => $marca->id,
            'nome' => $novoNome,
            'status' => $novoStatus
        ]);
    }

    public function testPodeExcluir()
    {
        $marca = Marca::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->get("/admin/marcas/$marca->id/excluir");

        $response->assertRedirectToRoute('admin.marcas');
        $this->assertDatabaseMissing(app(Marca::class)->getTable(), [
            'id' => $marca->id
        ]);
    }
    public function testPodePesquisar()
    {
        Marca::factory()->statusAprovado()->count(5)->create();
        Marca::factory()->statusAprovado()->createMany([
            ['nome' => 'Marca 1'],
            ['nome' => 'Marca 2'],
            ['nome' => 'Marca 3'],
            ['nome' => 'Marca 4'],
        ]);

        $response = $this->actingAs($this->usuario)
            ->get("/admin/marcas/pesquisar?termo=Marca");

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(4));
    }

    public function testNaoPodePesquisar()
    {
        Marca::factory()->statusAprovado()->count(5)->create();
        Marca::factory()->statusAprovado()->createMany([
            ['nome' => 'Marca 1'],
            ['nome' => 'Marca 2'],
            ['nome' => 'Marca 3'],
            ['nome' => 'Marca 4'],
        ]);

        $termo = Str::Random(250);
        $response = $this->actingAs($this->usuario)
            ->get("/admin/marcas/pesquisar?termo=$termo");

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(0));
    }
}
