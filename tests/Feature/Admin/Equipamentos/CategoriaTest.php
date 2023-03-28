<?php

namespace Tests\Feature\Admin\Equipamentos;

use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Illuminate\Support\Str;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class CategoriaTest extends TestCase
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
            ->get('/admin/categorias');


        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Categoria/Inicio'));
    }

    public function testPodeAcessarFilha(): void
    {
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->get("/admin/categorias/$categoria->id");


        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Categoria/Inicio')
            ->has('categoria')
            ->where('categoria.id', $categoria->id));
    }

    public function testPodeAcessarComFilhas(): void
    {
        $categoria = Categoria::factory()->create();
        $categorias = Categoria::factory()->count(3)->create([
            'categoria_mae_id' => $categoria->id
        ]);

        $response = $this->actingAs($this->usuario)
            ->get("/admin/categorias/$categoria->id");


        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Categoria/Inicio')
            ->has('categoria')
            ->where('categoria.id', $categoria->id)
            ->has('categorias.data', count($categorias)));
    }

    public function testPodeAcessarCriar()
    {
        $response = $this->actingAs($this->usuario)
            ->get('/admin/categorias/criar');
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Categoria/Criar'));
    }

    public function testPodeAcessarCriarFilha()
    {
        $categoriaMae = Categoria::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->get("/admin/categorias/criar/$categoriaMae->id");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Categoria/Criar')
            ->has('categoriaMae')
            ->where('categoriaMae.id', $categoriaMae->id));
    }

    public function testPodeCriarNova()
    {
        $nome = Str::random(25);

        $response = $this->actingAs($this->usuario)
            ->post('/admin/categorias/salvar', [
                'nome' => $nome
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.categorias');
        $this->assertDatabaseHas(app(Categoria::class)->getTable(), [
            'nome' => $nome
        ]);
    }

    public function testPodeCriarNovaFilha()
    {
        $nome = Str::random(25);
        $categoriaMae = Categoria::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->post('/admin/categorias/salvar', [
                'nome' => $nome,
                'categoria_mae_id' => $categoriaMae->id
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.categorias', [$categoriaMae->id]);
        $this->assertDatabaseHas(app(Categoria::class)->getTable(), [
            'nome' => $nome,
            'categoria_mae_id' => $categoriaMae->id
        ]);
    }

    public function testNaoPodeCriarMinimoCaracteres()
    {
        $nome = 'aa';

        $response = $this->actingAs($this->usuario)
            ->post('/admin/categorias/salvar', [
                'nome' => $nome
            ]);

        $response->assertInvalid('nome');
    }

    public function testNaoPodeCriarMaximoCaracteres()
    {
        $nome = Str::random(150);

        $response = $this->actingAs($this->usuario)
            ->post('/admin/categorias/salvar', [
                'nome' => $nome
            ]);

        $response->assertInvalid('nome');
    }

    public function testPodeAcessarEditar()
    {
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->get("/admin/categorias/$categoria->id/editar");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Categoria/Editar')
            ->has('categoria')
            ->where('categoria.id', $categoria->id));
    }

    public function testPodeEditar()
    {
        $categoria = Categoria::factory()->create();
        $categoriaMae = Categoria::factory()->create();
        $novoNome = Str::random(25);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/categorias/$categoria->id/atualizar", [
                'nome' => $novoNome,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.categorias');
        $this->assertDatabaseHas(app(Categoria::class)->getTable(), [
            'id' => $categoria->id,
            'nome' => $novoNome,
        ]);
    }

    public function testPodeEditarCategoriaMae()
    {
        $categoria = Categoria::factory()->create();
        $categoriaMae = Categoria::factory()->create();
        $novoNome = Str::random(25);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/categorias/$categoria->id/atualizar", [
                'nome' => $novoNome,
                'categoria_mae_id' => $categoriaMae->id
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.categorias', $categoriaMae->id);
        $this->assertDatabaseHas(app(Categoria::class)->getTable(), [
            'id' => $categoria->id,
            'nome' => $novoNome,
            'categoria_mae_id' => $categoriaMae->id
        ]);
    }

    public function testNaoPodeEditarMinimoCaracteres()
    {
        $categoria = Categoria::factory()->create();
        $novoNome = 'aa';

        $response = $this->actingAs($this->usuario)
            ->post("/admin/categorias/$categoria->id/atualizar", [
                'nome' => $novoNome
            ]);

        $response->assertInvalid('nome');
    }

    public function testNaoPodeEditarMaximoCaracteres()
    {
        $categoria = Categoria::factory()->create();
        $novoNome = Str::random(150);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/categorias/$categoria->id/atualizar", [
                'nome' => $novoNome
            ]);

        $response->assertInvalid('nome');
    }

    public function testPodeExcluir()
    {
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->get("/admin/categorias/$categoria->id/excluir");

        $response->assertRedirectToRoute('admin.categorias');
        $this->assertDatabaseMissing(app(Categoria::class)->getTable(), [
            'id' => $categoria->id
        ]);
    }

    public function testPodePesquisar()
    {
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->get("/admin/categorias/pesquisar/");

        $response->assertJson(fn (AssertableJson $json) => $json
            ->has('categorias', 1)
            ->where('categorias.0.id', $categoria->id)
            ->etc());
    }

    public function testPodePesquisarCategoria()
    {
        $categoria = Categoria::factory()->create();
        $categoria2 = Categoria::factory()->create([
            'categoria_mae_id' => $categoria->id
        ]);
        $categoria3 = Categoria::factory()->create([
            'categoria_mae_id' => $categoria2->id
        ]);

        $response = $this->actingAs($this->usuario)
            ->get("/admin/categorias/pesquisar/$categoria2->id");

        $response->assertJson(fn (AssertableJson $json) => $json
            ->where('categoria.id', $categoria2->id)
            ->where('categoria.categoria_mae.id', $categoria->id)
            ->has('categorias', 1)
            ->where('categorias.0.id', $categoria3->id)
            ->etc());
    }

    public function testValidacaoCategoriaMaeSelf()
    {
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->post("/admin/categorias/$categoria->id/atualizar", [
                'nome' => $categoria->nome,
                'categoria_mae_id' => $categoria->id
            ]);

        $response->assertInvalid('categoria_mae_id');
        $this->assertDatabaseMissing(app(Categoria::class)->getTable(), [
            'id' => $categoria->id,
            'categoria_mae_id' => $categoria->id
        ]);
    }

    public function testValidacaoCategoriaMaeCircular()
    {
        $categoriaMae = Categoria::factory()->create();
        $categoria = Categoria::factory()->create([
            'categoria_mae_id' => $categoriaMae->id
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/categorias/$categoriaMae->id/atualizar", [
                'nome' => $categoriaMae->nome,
                'categoria_mae_id' => $categoria->id
            ]);

        $response->assertInvalid('categoria_mae_id');
        $this->assertDatabaseMissing(app(Categoria::class)->getTable(), [
            'id' => $categoriaMae->id,
            'categoria_mae_id' => $categoria->id
        ]);
    }

    public function testValidacaoCategoriaMaeCircularNull()
    {
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->post("/admin/categorias/$categoria->id/atualizar", [
                'nome' => $categoria->nome,
                'categoria_mae_id' => null
            ]);

        $response->assertValid();
        $this->assertDatabaseHas(app(Categoria::class)->getTable(), [
            'id' => $categoria->id,
            'categoria_mae_id' => null
        ]);
    }

    public function testValidacaoCategoriaMaeCircularInvalida()
    {
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->post("/admin/categorias/$categoria->id/atualizar", [
                'nome' => $categoria->nome,
                'categoria_mae_id' => 0
            ]);

        $response->assertInvalid('categoria_mae_id');
        $this->assertDatabaseMissing(app(Categoria::class)->getTable(), [
            'id' => $categoria->id,
            'categoria_mae_id' => 0
        ]);
    }
}
