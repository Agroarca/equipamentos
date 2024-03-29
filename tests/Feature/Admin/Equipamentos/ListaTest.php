<?php

namespace Tests\Feature\Admin\Equipamentos;

use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Lista\Lista;
use App\Models\Equipamentos\Lista\ProdutoLista;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;

class ListaTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.lista.lista:ver'))
            ->get('/admin/lista');

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Equipamentos/Lista/Inicio')
                ->has('listas.data', 0)
        );
    }

    public function testPodeAcessarComDados(): void
    {
        $listas = Lista::factory()->count(4)->create();

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.lista.lista:ver'))
            ->get('/admin/lista');

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Equipamentos/Lista/Inicio')
                ->has('listas.data', count($listas))
        );
    }

    public function testPodeAcessarCriar(): void
    {
        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.lista.lista:criar'))
            ->get('/admin/lista/criar');

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Equipamentos/Lista/Criar')
        );
    }

    public function testPodeCriarNovo(): void
    {
        $lista = Lista::factory()->make();

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.lista.lista:criar'))
            ->post('/admin/lista/salvar', [
                'nome' => $lista->nome,
                'slug' => $lista->slug,
                'meta_description' => $lista->meta_description,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.lista');
        $this->assertDatabaseHas(app(Lista::class)->getTable(), [
            'nome' => $lista->nome,
            'slug' => $lista->slug,
            'meta_description' => $lista->meta_description,
        ]);
    }

    public function testPodeAcessarEditar(): void
    {
        $lista = Lista::factory()->create();

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.lista.lista:editar'))
            ->get("/admin/lista/$lista->id/editar/");

        $response->assertValid();
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Equipamentos/Lista/Editar')
                ->has('lista')
                ->where('lista.id', $lista->id)
        );
    }

    public function testPodeEditar(): void
    {
        $lista = Lista::factory()->create();
        $novoNome = Str::random(25);
        $novoSlug = 's' . Str::slug(Str::random(25));
        $novaMetaDescription = Str::random(250);

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.lista.lista:editar'))
            ->post("/admin/lista/$lista->id/atualizar", [
                'nome' => $novoNome,
                'slug' => $novoSlug,
                'meta_description' => $novaMetaDescription,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.lista');
        $this->assertDatabaseHas(app(Lista::class)->getTable(), [
            'id' => $lista->id,
            'nome' => $novoNome,
            'slug' => $novoSlug,
            'meta_description' => $novaMetaDescription,
        ]);
    }

    public function testPodeAdicionarProduto(): void
    {
        $lista = Lista::factory()->create();

        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.lista.lista:adicionar'))
            ->post("/admin/lista/$lista->id/adicionar", [
                'equipamento_id' => $equipamento->id,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.lista.produtos', [$lista->id]);
        $this->assertDatabaseHas(app(ProdutoLista::class)->getTable(), [
            'lista_id' => $lista->id,
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testPodeRemoverProduto(): void
    {
        $lista = Lista::factory()->create();

        $equipamento = Equipamento::factory()->create();

        $produto = ProdutoLista::factory()->create([
            'lista_id' => $lista->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.lista.lista:remover'))
            ->get("/admin/lista/$lista->id/produtos/$produto->id/excluir");

        $response->assertValid();
        $response->assertRedirectToRoute('admin.lista.produtos', [$lista->id]);
        $this->assertDatabaseMissing(app(ProdutoLista::class)->getTable(), [
            'id' => $produto->id,
        ]);
    }

    public function testPodeExcluir(): void
    {
        $lista = Lista::factory()->create();

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.lista.lista:excluir'))
            ->get("/admin/lista/$lista->id/excluir");

        $response->assertValid();
        $response->assertRedirectToRoute('admin.lista');
        $this->assertDatabaseMissing(app(Lista::class)->getTable(), [
            'id' => $lista->id,
        ]);
    }

    public function testPodeAcessarProdutosSemProdutos(): void
    {
        $lista = Lista::factory()->create();

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.lista.lista:ver'))
            ->get("/admin/lista/$lista->id/produtos");

        $response->assertValid();
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Equipamentos/Lista/Produtos')
                ->has('lista')
                ->where('lista.id', $lista->id)
                ->has('produtos.data', 0)
        );
    }

    public function testPodeAcessarProdutos(): void
    {
        $lista = Lista::factory()->create();

        $equipamento = Equipamento::factory()->create();

        ProdutoLista::factory()->create([
            'lista_id' => $lista->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.lista.lista:ver'))
            ->get("/admin/lista/$lista->id/produtos");

        $response->assertValid();
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Equipamentos/Lista/Produtos')
                ->has('lista')
                ->where('lista.id', $lista->id)
                ->has('produtos.data', 1)
        );
    }

    public function testNaoPodeCriarListaComSlugInvalido(): void
    {
        $lista = Lista::factory()->make();
        $slugInvalido = '1' . Str::random(25);

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.lista.lista:criar'))
            ->post('/admin/lista/salvar', [
                'nome' => $lista->nome,
                'slug' => $slugInvalido,
                'meta_description' => $lista->meta_description,
            ]);

        $response->assertInvalid('slug');
        $this->assertDatabaseMissing(app(Lista::class)->getTable(), [
            'nome' => $lista->nome,
            'slug' => $slugInvalido,
            'meta_description' => $lista->meta_description,
        ]);
    }

    public function testNaoPodeEditarListaComSlugInvalido(): void
    {
        $lista = Lista::factory()->create();
        $novoNome = Str::random(25);
        $slugInvalido = '1' . Str::random(25);

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.lista.lista:editar'))
            ->post("/admin/lista/$lista->id/atualizar", [
                'nome' => $novoNome,
                'slug' => $slugInvalido,
                'meta_description' => $lista->meta_description,
            ]);

        $response->assertInvalid('slug');
        $this->assertDatabaseMissing(app(Lista::class)->getTable(), [
            'id' => $lista->id,
            'nome' => $novoNome,
            'slug' => $slugInvalido,
            'meta_description' => $lista->meta_description,
        ]);
    }

    public function testNaoPodeCriarListaSemMetaDescription(): void
    {
        $lista = Lista::factory()->make();

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.lista.lista:criar'))
            ->post('/admin/lista/salvar', [
                'nome' => $lista->nome,
                'slug' => $lista->slug,
            ]);

        $response->assertInvalid('meta_description');
        $this->assertDatabaseMissing(app(Lista::class)->getTable(), [
            'nome' => $lista->nome,
            'slug' => $lista->slug,
        ]);
    }

    public function testNaoPodeEditarListaSemMetaDescription(): void
    {
        $lista = Lista::factory()->create();
        $novoNome = Str::random(25);

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.lista.lista:editar'))
            ->post("/admin/lista/$lista->id/atualizar", [
                'nome' => $novoNome,
                'slug' => $lista->slug,
            ]);

        $response->assertInvalid('meta_description');
        $this->assertDatabaseMissing(app(Lista::class)->getTable(), [
            'id' => $lista->id,
            'nome' => $novoNome,
            'slug' => $lista->slug,
        ]);
    }

    public function testNaoPodeCriarListaMetaDescriptionTamanhoInvalido(): void
    {
        $lista = Lista::factory()->make();
        $metaDescriptionInvalido = Str::random(550);

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.lista.lista:criar'))
            ->post('/admin/lista/salvar', [
                'nome' => $lista->nome,
                'slug' => $lista->slug,
                'meta_description' => $metaDescriptionInvalido,
            ]);

        $response->assertInvalid('meta_description');
        $this->assertDatabaseMissing(app(Lista::class)->getTable(), [
            'nome' => $lista->nome,
            'slug' => $lista->slug,
            'meta_description' => $metaDescriptionInvalido,
        ]);
    }

    public function testNaoPodeEditarListaMetaDescriptionTamanhoInvalido(): void
    {
        $lista = Lista::factory()->create();
        $metaDescriptionInvalido = Str::random(550);

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.lista.lista:editar'))
            ->post("/admin/lista/$lista->id/atualizar", [
                'nome' => $lista->nome,
                'slug' => $lista->slug,
                'meta_description' => $metaDescriptionInvalido,
            ]);

        $response->assertInvalid('meta_description');
        $this->assertDatabaseMissing(app(Lista::class)->getTable(), [
            'nome' => $lista->nome,
            'slug' => $lista->slug,
            'meta_description' => $metaDescriptionInvalido,
        ]);
    }

    public function testNaoPodeAdicionarProdutoInvalido(): void
    {
        $lista = Lista::factory()->create();

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.lista.lista:adicionar'))
            ->post("/admin/lista/$lista->id/adicionar", [
                'equipamento_id' => 999,
            ]);

        $response->assertInvalid('equipamento_id');
        $this->assertDatabaseMissing(app(ProdutoLista::class)->getTable(), [
            'lista_id' => $lista->id,
            'equipamento_id' => 999,
        ]);
    }

    public function testNaoPodeAcessarListasSemPermissao(): void
    {
        Lista::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/lista');

        $response->assertStatus(403);
    }

    public function testNaoPodeAcessarProdutosSemPermissao(): void
    {
        $lista = Lista::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/lista/$lista->id/produtos");

        $response->assertStatus(403);
    }

    public function testNaoPodeCriarListaSemPermissao(): void
    {
        $lista = Lista::factory()->make();

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/lista/salvar', [
                'nome' => $lista->nome,
                'slug' => $lista->slug,
                'meta_description' => $lista->meta_description,
            ]);

        $response->assertStatus(403);
        $this->assertDatabaseMissing(app(Lista::class)->getTable(), [
            'nome' => $lista->nome,
            'slug' => $lista->slug,
            'meta_description' => $lista->meta_description,
        ]);
    }

    public function testNaoPodeEditarListaSemPermissao(): void
    {
        $lista = Lista::factory()->create();
        $novoNome = Str::random(25);
        $novoSlug = 's' . Str::slug(Str::random(25));
        $novaMetaDescription = Str::random(250);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/lista/$lista->id/atualizar", [
                'nome' => $novoNome,
                'slug' => $novoSlug,
                'meta_description' => $novaMetaDescription,
            ]);

        $response->assertStatus(403);
        $this->assertDatabaseMissing(app(Lista::class)->getTable(), [
            'id' => $lista->id,
            'nome' => $novoNome,
            'slug' => $lista->slug,
            'meta_description' => $novaMetaDescription,
        ]);
    }

    public function testNaoPodeAdicionarProdutoSemPermissao(): void
    {
        $lista = Lista::factory()->create();

        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/lista/$lista->id/adicionar", [
                'equipamento_id' => $equipamento->id,
            ]);

        $response->assertStatus(403);
        $this->assertDatabaseMissing(app(ProdutoLista::class)->getTable(), [
            'lista_id' => $lista->id,
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testNaoPodeRemoverProdutoSemPermissao(): void
    {
        $lista = Lista::factory()->create();

        $equipamento = Equipamento::factory()->create();

        $produto = ProdutoLista::factory()->create([
            'lista_id' => $lista->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/lista/$lista->id/produtos/$produto->id/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(ProdutoLista::class)->getTable(), [
            'id' => $produto->id,
        ]);
    }

    public function testNaoPodeExcluirSemPermissao(): void
    {
        $lista = Lista::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/lista/$lista->id/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Lista::class)->getTable(), [
            'id' => $lista->id,
        ]);
    }
}
