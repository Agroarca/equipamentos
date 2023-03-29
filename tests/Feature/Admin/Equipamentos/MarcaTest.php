<?php

namespace Tests\Feature\Admin\Equipamentos;

use App\Enums\Equipamentos\Cadastro\StatusCadastro;
use App\Models\Equipamentos\Cadastro\Marca;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;
use Illuminate\Testing\Fluent\AssertableJson;

class MarcaTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/marcas');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Marca/Inicio'));
    }

    public function testPodeAcessarComDados(): void
    {
        Marca::factory()->count(4)->create();
        Marca::factory()->statusAprovado()->count(4)->create();

        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/marcas');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Marca/Inicio')
            ->has('marcas')
            ->has('marcas.data', 8));
    }

    public function testPodeAcessarCriar(): void
    {
        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/marcas/criar');
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Marca/Criar'));
    }

    public function testPodeCriarAprovado(): void
    {
        $nome = Str::random(25);
        $status = StatusCadastro::Aprovado->value;

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/marcas/salvar', [
                'nome' => $nome,
                'status' => $status,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.marcas');
        $this->assertDatabaseHas(app(Marca::class)->getTable(), [
            'nome' => $nome,
            'status' => $status,
        ]);
    }

    public function testPodeCriarSemStatus(): void
    {
        $nome = Str::random(25);

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/marcas/salvar', ['nome' => $nome]);

        $response->assertValid();
        $this->assertDatabaseHas(app(Marca::class)->getTable(), ['nome' => $nome]);
    }

    public function testNaoPodeCriarMinimoCaracteres(): void
    {
        $nome = 'aa';

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/marcas/salvar', ['nome' => $nome]);

        $response->assertInvalid('nome');
        $this->assertDatabaseMissing(app(Marca::class)->getTable(), ['nome' => $nome]);
    }

    public function testNaoPodeCriarMaximoCaracteres(): void
    {
        $nome = Str::random(150);

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/marcas/salvar', ['nome' => $nome]);

        $response->assertInvalid('nome');
        $this->assertDatabaseMissing(app(Marca::class)->getTable(), ['nome' => $nome]);
    }

    public function testNaoPodeCriarStatusInexistente(): void
    {
        $nome = Str::random(25);
        $statusInexistente = 99;

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/marcas/salvar', [
                'nome' => $nome,
                'status' => $statusInexistente,
            ]);

        $response->assertInvalid('status');
        $this->assertDatabaseMissing(app(Marca::class)->getTable(), [
            'nome' => $nome,
            'status' => $statusInexistente,
        ]);
    }

    public function testPodeAcessarEditar(): void
    {
        $marca = Marca::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marcas/$marca->id/editar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Marca/Editar')
            ->has('marca')
            ->where('marca.id', $marca->id));
    }

    public function testPodeEditar(): void
    {
        $marca = Marca::factory()->create();
        $novoNome = Str::random(25);
        $novoStatus = StatusCadastro::Aprovado->value;

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marcas/$marca->id/atualizar", [
                'nome' => $novoNome,
                'status' => $novoStatus,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.marcas');
        $this->assertDatabaseHas(app(Marca::class)->getTable(), [
            'id' => $marca->id,
            'nome' => $novoNome,
            'status' => $novoStatus,
        ]);
    }

    public function testPodeEditarSemStatus(): void
    {
        $marca = Marca::factory()->create();
        $novoNome = Str::random(25);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marcas/$marca->id/atualizar", ['nome' => $novoNome]);

        $response->assertValid();
        $this->assertDatabaseHas(app(Marca::class)->getTable(), [
            'id' => $marca->id,
            'nome' => $novoNome,
        ]);
    }

    public function testNaoPodeEditarMinimoCaracteres(): void
    {
        $marca = Marca::factory()->create();
        $novoNome = 'aa';

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marcas/$marca->id/atualizar", ['nome' => $novoNome]);

        $response->assertInvalid('nome');
        $this->assertDatabaseMissing(app(Marca::class)->getTable(), [
            'id' => $marca->id,
            'nome' => $novoNome,
        ]);
    }

    public function testNaoPodeEditarMaximoCaracteres(): void
    {
        $marca = Marca::factory()->create();
        $novoNome = Str::random(150);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marcas/$marca->id/atualizar", ['nome' => $novoNome]);

        $response->assertInvalid('nome');
        $this->assertDatabaseMissing(app(Marca::class)->getTable(), [
            'id' => $marca->id,
            'nome' => $novoNome,
        ]);
    }

    public function testNaoPodeEditarStatusInexistente(): void
    {
        $marca = Marca::factory()->create();
        $novoNome = Str::random(25);
        $novoStatusInexistente = 99;

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marcas/$marca->id/atualizar", [
                'nome' => $novoNome,
                'status' => $novoStatusInexistente,
            ]);

        $response->assertInvalid('status');
        $this->assertDatabaseMissing(app(Marca::class)->getTable(), [
            'id' => $marca->id,
            'nome' => $novoNome,
            'status' => $novoStatusInexistente,
        ]);
    }

    public function testPodeExcluir(): void
    {
        $marca = Marca::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marcas/$marca->id/excluir");

        $response->assertRedirectToRoute('admin.marcas');
        $this->assertDatabaseMissing(app(Marca::class)->getTable(), [
            'id' => $marca->id,
        ]);
    }

    public function testPodePesquisar(): void
    {
        Marca::factory()->statusAprovado()->count(5)->create();
        Marca::factory()->statusAprovado()->createMany([
            ['nome' => 'Marca 1'],
            ['nome' => 'Marca 2'],
            ['nome' => 'Marca 3'],
            ['nome' => 'Marca 4'],
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/marcas/pesquisar?termo=Marca');

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(4));
    }

    public function testNaoPodePesquisar(): void
    {
        Marca::factory()->statusAprovado()->count(5)->create();
        Marca::factory()->statusAprovado()->createMany([
            ['nome' => 'Marca 1'],
            ['nome' => 'Marca 2'],
            ['nome' => 'Marca 3'],
            ['nome' => 'Marca 4'],
        ]);

        $termo = Str::Random(250);
        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marcas/pesquisar?termo=$termo");

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(0));
    }
}
