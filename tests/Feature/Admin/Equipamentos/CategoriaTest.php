<?php

namespace Tests\Feature\Admin\Equipamentos;

use App\Models\Equipamentos\Cadastro\Categoria;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Illuminate\Support\Str;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class CategoriaTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:ver');
        $response = $this->actingAs($usuario)
            ->get('/admin/categorias');


        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Categoria/Inicio'));
    }

    public function testNaoPodeAcessarSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $response = $this->actingAs($usuario)
            ->get('/admin/categorias');

        $response->assertStatus(403);
    }

    public function testNaoPodeAcessarSemPermissaoComItens(): void
    {
        Categoria::factory()->count(3)->create();

        $usuario = $this->getAdmin();
        $response = $this->actingAs($usuario)
            ->get('/admin/categorias');
        $response->assertStatus(403);
    }

    public function testPodeAcessarFilha(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:ver');
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/$categoria->id");


        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Categoria/Inicio')
            ->has('categoria')
            ->where('categoria.id', $categoria->id));
    }

    public function testNaoPodeAcessarFilhaSemPermissao(): void
    {
        $categoria = Categoria::factory()->create();

        $usuario = $this->getAdmin();
        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/$categoria->id");

        $response->assertStatus(403);
    }

    public function testPodeAcessarComFilhas(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:ver');
        $categoria = Categoria::factory()->create();
        $categorias = Categoria::factory()->count(3)->create([
            'categoria_mae_id' => $categoria->id,
        ]);

        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/$categoria->id");


        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Categoria/Inicio')
            ->has('categoria')
            ->where('categoria.id', $categoria->id)
            ->has('categorias.data', count($categorias)));
    }

    public function testNaoPodeAcessarComFilhasSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $categoria = Categoria::factory()->create();
        Categoria::factory()->count(3)->create([
            'categoria_mae_id' => $categoria->id,
        ]);

        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/$categoria->id");

        $response->assertStatus(403);
    }

    public function testPodeAcessarCriar(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:criar');
        $response = $this->actingAs($usuario)
            ->get('/admin/categorias/criar');
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Categoria/Criar'));
    }

    public function testNaoPodeAcessarCriarSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $response = $this->actingAs($usuario)
            ->get('/admin/categorias/criar');
        $response->assertStatus(403);
    }

    public function testPodeAcessarCriarFilha(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:criar');
        $categoriaMae = Categoria::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/criar/$categoriaMae->id");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Categoria/Criar')
            ->has('categoriaMae')
            ->where('categoriaMae.id', $categoriaMae->id));
    }

    public function testNaoPodeAcessarCriarFilhaSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $categoriaMae = Categoria::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/criar/$categoriaMae->id");
        $response->assertStatus(403);
    }

    public function testPodeCriarNova(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:criar');
        $categoria = Categoria::factory()->make();

        $response = $this->actingAs($usuario)
            ->post('/admin/categorias/salvar', [
                'nome' => $categoria->nome,
                'meta_description' => $categoria->meta_description,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.categorias');
        $this->assertDatabaseHas(app(Categoria::class)->getTable(), [
            'nome' => $categoria->nome,
            'meta_description' => $categoria->meta_description,
        ]);
    }

    public function testNaoPodeCriarNovaSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $categoria = Categoria::factory()->make();

        $response = $this->actingAs($usuario)
            ->post('/admin/categorias/salvar', [
                'nome' => $categoria->nome,
                'meta_description' => $categoria->meta_description,
            ]);

        $response->assertStatus(403);
        $this->assertDatabaseMissing(app(Categoria::class)->getTable(), [
            'nome' => $categoria->nome,
            'meta_description' => $categoria->meta_description,
        ]);
    }

    public function testPodeCriarNovaFilha(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:criar');
        $categoria = Categoria::factory()->make();
        $categoriaMae = Categoria::factory()->create();

        $response = $this->actingAs($usuario)
            ->post('/admin/categorias/salvar', [
                'nome' => $categoria->nome,
                'meta_description' => $categoria->meta_description,
                'categoria_mae_id' => $categoriaMae->id,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.categorias', [$categoriaMae->id]);
        $this->assertDatabaseHas(app(Categoria::class)->getTable(), [
            'nome' => $categoria->nome,
            'meta_description' => $categoria->meta_description,
            'categoria_mae_id' => $categoriaMae->id,
        ]);
    }

    public function testNaoPodeCriarNovaFilhaSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $categoria = Categoria::factory()->make();
        $categoriaMae = Categoria::factory()->create();

        $response = $this->actingAs($usuario)
            ->post('/admin/categorias/salvar', [
                'nome' => $categoria->nome,
                'meta_description' => $categoria->meta_description,
                'categoria_mae_id' => $categoriaMae->id,
            ]);

        $response->assertStatus(403);
        $this->assertDatabaseMissing(app(Categoria::class)->getTable(), [
            'nome' => $categoria->nome,
            'meta_description' => $categoria->meta_description,
            'categoria_mae_id' => $categoriaMae->id,
        ]);
    }

    public function testNaoPodeCriarNomeMinimoCaracteres(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:criar');
        $categoria = Categoria::factory()->make();
        $nome = 'aa';

        $response = $this->actingAs($usuario)
            ->post('/admin/categorias/salvar', [
                'nome' => $nome,
                'meta_description' => $categoria->meta_description,
            ]);

        $response->assertInvalid('nome');
    }

    public function testNaoPodeCriarNomeMaximoCaracteres(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:criar');
        $categoria = Categoria::factory()->make();
        $nome = Str::random(150);

        $response = $this->actingAs($usuario)
            ->post('/admin/categorias/salvar', [
                'nome' => $nome,
                'meta_description' => $categoria->meta_description,
            ]);

        $response->assertInvalid('nome');
    }

    public function testNaoPodeCriarMetaDescriptionMaximoCaracteres(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:criar');
        $categoria = Categoria::factory()->make();
        $metaDescription = Str::random(1000);

        $response = $this->actingAs($usuario)
            ->post('/admin/categorias/salvar', [
                'nome' => $categoria->nome,
                'meta_description' => $metaDescription,
            ]);

        $response->assertInvalid('meta_description');
    }

    public function testNaoPodeCriarSemMetaDescription(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:criar');
        $categoria = Categoria::factory()->make();

        $response = $this->actingAs($usuario)
            ->post('/admin/categorias/salvar', [
                'nome' => $categoria->nome,
            ]);

        $response->assertInvalid('meta_description');
    }

    public function testPodeAcessarEditar(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:editar');
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/$categoria->id/editar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Categoria/Editar')
            ->has('categoria')
            ->where('categoria.id', $categoria->id));
    }

    public function testNaoPodeAcessarEditarSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/$categoria->id/editar");
        $response->assertStatus(403);
    }

    public function testPodeEditar(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:editar');
        $categoria = Categoria::factory()->create();
        Categoria::factory()->create();
        $novoNome = Str::random(25);
        $novaMetaDescription = Str::random(250);

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/atualizar", [
                'nome' => $novoNome,
                'meta_description' => $novaMetaDescription,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.categorias');
        $this->assertDatabaseHas(app(Categoria::class)->getTable(), [
            'id' => $categoria->id,
            'nome' => $novoNome,
            'meta_description' => $novaMetaDescription,
        ]);
    }

    public function testNaoPodeEditarSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $categoria = Categoria::factory()->create();
        $novoNome = Str::random(25);

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/atualizar", [
                'nome' => $novoNome,
                'meta_description' => $categoria->meta_description,
            ]);

        $response->assertStatus(403);
        $this->assertDatabaseMissing(app(Categoria::class)->getTable(), [
            'id' => $categoria->id,
            'nome' => $novoNome,
            'meta_description' => $categoria->meta_description,
        ]);
    }

    public function testPodeEditarCategoriaMae(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:mover');
        $this->adicionarPermissoes($usuario, ['equipamentos.cadastro.categoria:editar']);
        $categoria = Categoria::factory()->create();
        $categoriaMae = Categoria::factory()->create();
        $novoNome = Str::random(25);

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/atualizar", [
                'nome' => $novoNome,
                'categoria_mae_id' => $categoriaMae->id,
                'meta_description' => $categoria->meta_description,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.categorias', $categoriaMae->id);
        $this->assertDatabaseHas(app(Categoria::class)->getTable(), [
            'id' => $categoria->id,
            'nome' => $novoNome,
            'categoria_mae_id' => $categoriaMae->id,
            'meta_description' => $categoria->meta_description,
        ]);
    }

    public function testNaoPodeEditarCategoriaMaeSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $categoria = Categoria::factory()->create();
        $categoriaMae = Categoria::factory()->create();
        $novoNome = Str::random(25);

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/atualizar", [
                'nome' => $novoNome,
                'categoria_mae_id' => $categoriaMae->id,
                'meta_description' => $categoria->meta_description,
            ]);

        $response->assertStatus(403);
        $this->assertDatabaseMissing(app(Categoria::class)->getTable(), [
            'id' => $categoria->id,
            'nome' => $novoNome,
            'categoria_mae_id' => $categoriaMae->id,
            'meta_description' => $categoria->meta_description,
        ]);
    }

    public function testNaoPodeEditarNomeMinimoCaracteres(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:editar');
        $categoria = Categoria::factory()->create();
        $novoNome = 'aa';

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/atualizar", [
                'nome' => $novoNome,
                'meta_description' => $categoria->meta_description,
            ]);

        $response->assertInvalid('nome');
    }

    public function testNaoPodeEditarNomeMaximoCaracteres(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:editar');
        $categoria = Categoria::factory()->create();
        $novoNome = Str::random(150);

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/atualizar", [
                'nome' => $novoNome,
                'meta_description' => $categoria->meta_description,
            ]);

        $response->assertInvalid('nome');
    }

    public function testNaoPodeEditarMetaDescriptionMaximoCaracteres(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:editar');
        $categoria = Categoria::factory()->create();
        $novaMetaDescription = Str::random(1000);

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/atualizar", [
                'nome' => $categoria->nome,
                'meta_description' => $novaMetaDescription,
            ]);

        $response->assertInvalid('meta_description');
    }

    public function testNaoPodeEditarSemMetaDescription(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:editar');
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/atualizar", [
                'nome' => $categoria->nome,
            ]);

        $response->assertInvalid('meta_description');
    }

    public function testPodeExcluir(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:excluir');
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/$categoria->id/excluir");

        $response->assertRedirectToRoute('admin.categorias');
        $this->assertDatabaseMissing(app(Categoria::class)->getTable(), [
            'id' => $categoria->id,
        ]);
    }

    public function testNaoPodeExcluirSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/$categoria->id/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Categoria::class)->getTable(), [
            'id' => $categoria->id,
        ]);
    }

    public function testPodePesquisar(): void
    {
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/categorias/pesquisar/');

        $response->assertJson(fn (AssertableJson $json) => $json
            ->has('categorias', 1)
            ->where('categorias.0.id', $categoria->id)
            ->etc());
    }

    public function testPodePesquisarCategoria(): void
    {
        $categoria = Categoria::factory()->create();
        $categoria2 = Categoria::factory()->create([
            'categoria_mae_id' => $categoria->id,
        ]);
        $categoria3 = Categoria::factory()->create([
            'categoria_mae_id' => $categoria2->id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/categorias/pesquisar/$categoria2->id");

        $response->assertJson(fn (AssertableJson $json) => $json
            ->where('categoria.id', $categoria2->id)
            ->where('categoria.categoria_mae.id', $categoria->id)
            ->has('categorias', 1)
            ->where('categorias.0.id', $categoria3->id)
            ->etc());
    }

    public function testValidacaoCategoriaMaeSelf(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:editar');
        $this->adicionarPermissoes($usuario, ['equipamentos.cadastro.categoria:mover']);

        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/atualizar", [
                'nome' => $categoria->nome,
                'categoria_mae_id' => $categoria->id,
            ]);

        $response->assertInvalid('categoria_mae_id');
        $this->assertDatabaseMissing(app(Categoria::class)->getTable(), [
            'id' => $categoria->id,
            'categoria_mae_id' => $categoria->id,
        ]);
    }

    public function testValidacaoCategoriaMaeCircular(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:editar');
        $this->adicionarPermissoes($usuario, ['equipamentos.cadastro.categoria:mover']);
        $categoriaMae = Categoria::factory()->create();
        $categoria = Categoria::factory()->create([
            'categoria_mae_id' => $categoriaMae->id,
        ]);

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoriaMae->id/atualizar", [
                'nome' => $categoriaMae->nome,
                'categoria_mae_id' => $categoria->id,
            ]);

        $response->assertInvalid('categoria_mae_id');
        $this->assertDatabaseMissing(app(Categoria::class)->getTable(), [
            'id' => $categoriaMae->id,
            'categoria_mae_id' => $categoria->id,
        ]);
    }

    public function testValidacaoCategoriaMaeCircularNull(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:editar');
        $this->adicionarPermissoes($usuario, ['equipamentos.cadastro.categoria:mover']);

        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/atualizar", [
                'nome' => $categoria->nome,
                'categoria_mae_id' => null,
                'meta_description' => $categoria->meta_description,
            ]);

        $response->assertValid();
        $this->assertDatabaseHas(app(Categoria::class)->getTable(), [
            'id' => $categoria->id,
            'categoria_mae_id' => null,
        ]);
    }

    public function testValidacaoCategoriaMaeCircularInvalida(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.categoria:editar');
        $this->adicionarPermissoes($usuario, ['equipamentos.cadastro.categoria:mover']);

        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/atualizar", [
                'nome' => $categoria->nome,
                'categoria_mae_id' => 0,
            ]);

        $response->assertInvalid('categoria_mae_id');
        $this->assertDatabaseMissing(app(Categoria::class)->getTable(), [
            'id' => $categoria->id,
            'categoria_mae_id' => 0,
        ]);
    }
}
