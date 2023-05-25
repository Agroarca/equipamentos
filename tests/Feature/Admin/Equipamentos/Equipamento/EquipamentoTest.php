<?php

namespace Tests\Feature\Admin\Equipamentos\Equipamento;

use App\Enums\Equipamentos\Cadastro\StatusEquipamento;
use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Cadastro\Marca;
use App\Models\Equipamentos\Cadastro\Modelo;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;
use Illuminate\Testing\Fluent\AssertableJson;

class EquipamentoTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:ver');
        $response = $this->actingAs($usuario)
            ->get('/admin/equipamentos');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Inicio')
            ->has('equipamentos')
            ->has('equipamentos.data', 0));
    }

    public function testPodeAcessarComDados(): void
    {
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:ver');
        $equipamentos = Equipamento::factory()->count(3)->create();
        $response = $this->actingAs($usuario)
            ->get('/admin/equipamentos');


        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Inicio')
            ->has('equipamentos')
            ->has('equipamentos.data', count($equipamentos)));
    }

    public function testPodeAcessarCriar(): void
    {
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:criar');
        $categorias = Categoria::factory()->count(4)->create();

        $response = $this->actingAs($usuario)
            ->get('/admin/equipamentos/criar');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Criar')
            ->has('categorias', count($categorias)));
    }

    public function testPodeCriarComMarcaModeloDinamico(): void
    {
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:criar');
        $this->adicionarPermissoes($usuario, [
            'equipamentos.cadastro.marca:criar',
            'equipamentos.cadastro.modelo:criar',
        ]);

        $equipamento = Equipamento::factory()->make();

        $marcaResponse = $this->actingAs($usuario)
            ->post('/admin/marcas/salvar/ajax', [
                'nome' => Str::random(25),
            ]);

        $marcaResponse->assertValid();
        $marcaResponse->assertJsonStructure(['id', 'nome']);

        $this->assertDatabaseHas(app(Marca::class)->getTable(), [
            'nome' => $marcaResponse->json('nome'),
        ]);

        $modeloResponse = $this->actingAs($usuario)
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

        $response = $this->actingAs($usuario)
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
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:criar');
        $equipamento = Equipamento::factory()->make();

        $response = $this->actingAs($usuario)
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
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:criar');
        $equipamento = Equipamento::factory()->make();
        $equipamento->titulo = Str::random(9);
        $equipamento->ano = 1899;

        $response = $this->actingAs($usuario)
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
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:criar');
        $equipamento = Equipamento::factory()->make();
        $equipamento->titulo = Str::random(150);
        $equipamento->ano = Carbon::now()->year + 2;

        $response = $this->actingAs($usuario)
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
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:editar');
        $equipamento = Equipamento::factory()->create();
        Caracteristica::factory()->count(6)->create([
            'categoria_id' => $equipamento->categoria_id,
            'tipo' => TipoCaracteristica::Inteiro,
        ]);

        $response = $this->actingAs($usuario)
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

    public function testPodeAcessarEditarImagens(): void
    {
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:editarImagens');
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/equipamentos/$equipamento->id/editar/imagens");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/Imagens')
            ->has('equipamento')
            ->where('equipamento.id', $equipamento->id));
    }

    public function testPodeEditar(): void
    {
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:editar');
        $equipamento = Equipamento::factory()->create();
        $novoTitulo = Str::random(50);
        $novoAno = 2005;

        $response = $this->actingAs($usuario)
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

    public function testNaoPodeEditarMinimo(): void
    {
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:editar');
        $equipamento = Equipamento::factory()->create();
        $novoTitulo = Str::random(5);
        $novoAno = 1899;

        $response = $this->actingAs($usuario)
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
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:editar');
        $equipamento = Equipamento::factory()->create();
        $novoTitulo = Str::random(150);
        $novoAno = Carbon::now()->year + 2;

        $response = $this->actingAs($usuario)
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
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:excluir');
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/equipamentos/$equipamento->id/excluir");

        $response->assertRedirectToRoute('admin.equipamentos');
        $this->assertDatabaseMissing(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
        ]);
    }

    public function testPodePesquisar(): void
    {
        $this->ignorarTodasPermissoes();
        $equipamento = Equipamento::factory()->create([
            'status' => StatusEquipamento::Aprovado,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/equipamentos/pesquisar?termo=$equipamento->titulo");

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(1));
    }

    public function testNaoPodePesquisarEquipamentoNaoAprovado(): void
    {
        $this->ignorarTodasPermissoes();
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/equipamentos/pesquisar?termo=$equipamento->titulo");

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(0));
    }

    public function testNaoPodePesquisarInexistente(): void
    {
        $this->ignorarTodasPermissoes();
        Equipamento::factory()->create();
        $termo = Str::random(20);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/equipamentos/pesquisar?termo=$termo");

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(0));
    }
}
