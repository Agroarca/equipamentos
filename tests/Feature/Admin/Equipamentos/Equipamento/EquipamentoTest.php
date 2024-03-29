<?php

namespace Tests\Feature\Admin\Equipamentos\Equipamento;

use App\Enums\Equipamentos\Cadastro\StatusEquipamento;
use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Enums\Usuario\TipoPessoa;
use App\Models\Cadastro\Cidade;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Cadastro\Marca;
use App\Models\Equipamentos\Cadastro\Modelo;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use App\Models\Usuario;
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
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:ver');
        $response = $this->actingAs($usuario)
            ->get('/admin/equipamentos');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Inicio')
            ->has('equipamentos')
            ->has('equipamentos.data', 0));
    }

    public function testNaoPodeAcessarSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $response = $this->actingAs($usuario)
            ->get('/admin/equipamentos');

        $response->assertStatus(403);
    }

    public function testPodeAcessarComDados(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:ver');
        $equipamentos = Equipamento::factory()->count(3)->create();
        $response = $this->actingAs($usuario)
            ->get('/admin/equipamentos');


        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Inicio')
            ->has('equipamentos')
            ->has('equipamentos.data', count($equipamentos)));
    }

    public function testNaoPodeAcessarComDadosSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        Equipamento::factory()->count(3)->create();
        $response = $this->actingAs($usuario)
            ->get('/admin/equipamentos');
        $response->assertStatus(403);
    }

    public function testPodeAcessarCriar(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:criar');
        $categorias = Categoria::factory()->count(4)->create();

        $response = $this->actingAs($usuario)
            ->get('/admin/equipamentos/criar');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Criar')
            ->has('categorias', count($categorias)));
    }

    public function testNaoPodeAcessarCriarSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $response = $this->actingAs($usuario)
            ->get('/admin/equipamentos/criar');

        $response->assertStatus(403);
    }

    public function testPodeCriarComMarcaModeloDinamico(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:criar');
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
                'cidade_id' => $equipamento->cidade_id,
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
            'cidade_id' => $equipamento->cidade_id,
        ]);
    }

    public function testPodeCriarNovo(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:criar');
        $equipamento = Equipamento::factory()->make();

        $response = $this->actingAs($usuario)
            ->post('/admin/equipamentos/salvar', [
                'titulo' => $equipamento->titulo,
                'valor' => $equipamento->valor,
                'ano' => $equipamento->ano,
                'descricao' => $equipamento->descricao,
                'modelo_id' => $equipamento->modelo_id,
                'categoria_id' => $equipamento->categoria_id,
                'cidade_id' => $equipamento->cidade_id,
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
            'cidade_id' => $equipamento->cidade_id,
        ]);
    }

    public function testNaoPodeCriarNovoSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $equipamento = Equipamento::factory()->make();

        $response = $this->actingAs($usuario)
            ->post('/admin/equipamentos/salvar', [
                'titulo' => $equipamento->titulo,
                'valor' => $equipamento->valor,
                'ano' => $equipamento->ano,
                'descricao' => $equipamento->descricao,
                'modelo_id' => $equipamento->modelo_id,
                'categoria_id' => $equipamento->categoria_id,
                'cidade_id' => $equipamento->cidade_id,
            ]);

        $response->assertStatus(403);
    }

    public function testNaoPodeCriarMinimo(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:criar');
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
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:criar');
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
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editar');
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

    public function testNaoPodeAcessarEditarCadastroSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/equipamentos/$equipamento->id/editar");

        $response->assertStatus(403);
    }

    public function testPodeAcessarEditarImagens(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento-imagem:ver');
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/equipamentos/$equipamento->id/editar/imagens");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/Imagens')
            ->has('equipamento')
            ->where('equipamento.id', $equipamento->id));
    }

    public function testNaoPodeAcessarEditarImagensSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/equipamentos/$equipamento->id/editar/imagens");

        $response->assertStatus(403);
    }

    public function testPodeEditar(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editar');
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

    public function testNaoPodeEditarSemPermissao(): void
    {
        $usuario = $this->getAdmin();
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

        $response->assertStatus(403);
    }

    public function testNaoPodeEditarMinimo(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editar');
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
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editar');
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
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:excluir');
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/equipamentos/$equipamento->id/excluir");

        $response->assertRedirectToRoute('admin.equipamentos');
        $this->assertDatabaseMissing(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
        ]);
    }

    public function testNaoPodeExcluirSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/equipamentos/$equipamento->id/excluir");

        $response->assertStatus(403);
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
            ->get("/admin/equipamentos/usuarios/pesquisar?termo=$termo");

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(0));
    }

    public function testPodePesquisarUsuarioPorEmail(): void
    {
        $usuario = Usuario::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/equipamentos/usuarios/pesquisar?termo=$usuario->email");

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(1)
            ->where('0.id', $usuario->id));
    }

    public function testPodePesquisarUsuarioPodePorCpf(): void
    {
        $usuario = Usuario::factory()->create([
            'tipo_pessoa' => TipoPessoa::Fisica,
            'cpf' => '31871717027',
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/equipamentos/usuarios/pesquisar?termo=$usuario->cpf");

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(1)
            ->where('0.id', $usuario->id));
    }

    public function testPodePesquisarUsuarioPorCnpj(): void
    {
        $usuario = Usuario::factory()->pessoaJuridica()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/equipamentos/usuarios/pesquisar?termo=$usuario->cnpj");

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(1)
            ->where('0.id', $usuario->id));
    }

    public function testPodeAcessarTransferirEquipamento(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:transferir');
        $equipamento = Equipamento::factory()->create([
            'status' => StatusEquipamento::Aprovado,
        ]);

        $response = $this->actingAs($usuario)
            ->get("/admin/equipamentos/$equipamento->id/transferir");

        $response->assertStatus(200);

        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/Transferir')
            ->has('equipamento')
            ->where('equipamento.id', $equipamento->id));
    }

    public function testNaoPodeAcessarTransferirEquipamentoSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $equipamento = Equipamento::factory()->create([
            'status' => StatusEquipamento::Aprovado,
        ]);

        $response = $this->actingAs($usuario)
            ->get("/admin/equipamentos/$equipamento->id/transferir");

        $response->assertStatus(403);
    }

    public function testPodeTransferirEquipamento(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:transferir');
        $equipamento = Equipamento::factory()->create([
            'status' => StatusEquipamento::Aprovado,
        ]);
        $novoUsuario = Usuario::factory()->create();

        $response = $this->actingAs($usuario)
            ->post("/admin/equipamentos/$equipamento->id/transferir/salvar", [
                'usuario_id' => $novoUsuario->id,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editar', $equipamento->id);
        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'usuario_id' => $novoUsuario->id,
        ]);
    }

    public function testNaoPodeTransferirEquipamentoSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $equipamento = Equipamento::factory()->create([
            'status' => StatusEquipamento::Aprovado,
        ]);
        $novoUsuario = Usuario::factory()->create();

        $response = $this->actingAs($usuario)
            ->post("/admin/equipamentos/$equipamento->id/transferir/salvar", [
                'usuario_id' => $novoUsuario->id,
            ]);

        $response->assertStatus(403);
    }

    public function testPodePesquisarCidade(): void
    {
        Cidade::factory()->count(5)->create();
        $cidade = Cidade::factory()->create();

        $responsePesquisa = $this->actingAs($this->getAdmin())
            ->get('/admin/pesquisar/cidade?termo=' . $cidade->nome);

        $responsePesquisa->assertStatus(200);
        $responsePesquisa->assertJson([
            [
                'id' => $cidade->id,
                'texto' => $cidade->display_name,
            ],
        ]);
    }
}
