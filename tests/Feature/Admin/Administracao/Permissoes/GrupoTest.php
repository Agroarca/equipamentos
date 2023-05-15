<?php

namespace Tests\Feature\Admin\Administracao\Permissoes;

use App\Models\Administracao\Permissoes\Grupo;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;

class GrupoTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $this->ignorarTodasPermissoes();

        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/administracao/permissoes/grupo');

        $response->assertStatus(200);
    }

    public function testPodeAcessarComDados(): void
    {
        $this->ignorarTodasPermissoes();

        Grupo::factory()->count(4)->create();

        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/administracao/permissoes/grupo');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Administracao/Permissoes/Grupo/Inicio')
            ->has('grupos')
            ->has('grupos.data', 4));
    }

    public function testPodeAcessarCriar(): void
    {
        $this->ignorarTodasPermissoes();

        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/administracao/permissoes/grupo/criar');
        $response->assertStatus(200);
    }

    public function testPodeCriar(): void
    {
        $this->ignorarTodasPermissoes();

        $nome = Str::random(25);

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/administracao/permissoes/grupo/salvar', [
                'nome' => $nome,
            ]);

        $response->assertStatus(302);
        $response->assertRedirectToRoute('admin.administracao.permissoes.grupo');
        $response->assertValid();
        $this->assertDatabaseHas(app(Grupo::class)->getTable(), [
            'nome' => $nome,
        ]);
    }

    public function testNaoPodeCriarTamanhoPequeno(): void
    {
        $this->ignorarTodasPermissoes();

        $nome = Str::random(1);

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/administracao/permissoes/grupo/salvar', [
                'nome' => $nome,
            ]);

        $response->assertInvalid('nome');
        $this->assertDatabaseMissing(app(Grupo::class)->getTable(), [
            'nome' => $nome,
        ]);
    }

    public function testNaoPodeCriarTamanhoGrande(): void
    {
        $this->ignorarTodasPermissoes();

        $nome = Str::random(1000);

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/administracao/permissoes/grupo/salvar', [
                'nome' => $nome,
            ]);

        $response->assertInvalid('nome');
        $this->assertDatabaseMissing(app(Grupo::class)->getTable(), [
            'nome' => $nome,
        ]);
    }

    public function testNaoPodeCriarTamanhoRepetido(): void
    {
        $this->ignorarTodasPermissoes();

        $grupo = Grupo::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/administracao/permissoes/grupo/salvar', [
                'nome' => $grupo->nome,
            ]);

        $response->assertInvalid('nome');
    }

    public function testPodeAcessarEditar(): void
    {
        $this->ignorarTodasPermissoes();

        $grupo = Grupo::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/administracao/permissoes/grupo/$grupo->id/editar");
        $response->assertStatus(200);
    }

    public function testPodeEditar(): void
    {
        $this->ignorarTodasPermissoes();

        $grupo = Grupo::factory()->create();
        $nome = Str::random(25);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/administracao/permissoes/grupo/$grupo->id/atualizar", [
                'nome' => $nome,
            ]);

        $response->assertRedirectToRoute('admin.administracao.permissoes.grupo');
        $response->assertValid();
        $this->assertDatabaseHas(app(Grupo::class)->getTable(), [
            'id' => $grupo->id,
            'nome' => $nome,
        ]);
    }

    public function testPodeExcluir(): void
    {
        $this->ignorarTodasPermissoes();

        $grupo = Grupo::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/administracao/permissoes/grupo/$grupo->id/excluir");

        $response->assertRedirectToRoute('admin.administracao.permissoes.grupo');
        $this->assertDatabaseMissing(app(Grupo::class)->getTable(), [
            'id' => $grupo->id,
        ]);
    }

    public function testNaoPodeAcessarSemPermissao(): void
    {
        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/administracao/permissoes/grupo');

            $response->assertStatus(403);
    }

    public function testNaoPodeAcessarCriarSemPermissao(): void
    {
        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/administracao/permissoes/grupo/criar');
            $response->assertStatus(403);
    }

    public function testNaoPodeCriarSemPermissao(): void
    {
        $nome = Str::random(25);

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/administracao/permissoes/grupo/salvar', [
                'nome' => $nome,
            ]);

            $response->assertStatus(403);
        $this->assertDatabaseMissing(app(Grupo::class)->getTable(), [
            'nome' => $nome,
        ]);
    }

    public function testNaoPodeAcessarEditarSemPermissao(): void
    {
        $grupo = Grupo::factory()->create();
        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/administracao/permissoes/grupo/$grupo->id/editar");
            $response->assertStatus(403);
    }

    public function testNaoPodeEditarSemPermissao(): void
    {
        $grupo = Grupo::factory()->create();
        $nome = Str::random(25);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/administracao/permissoes/grupo/$grupo->id/atualizar", [
                'nome' => $nome,
            ]);

            $response->assertStatus(403);
        $this->assertDatabaseMissing(app(Grupo::class)->getTable(), [
            'id' => $grupo->id,
            'nome' => $nome,
        ]);
    }

    public function testNaoPodeExcluirSemPermissao(): void
    {
        $grupo = Grupo::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/administracao/permissoes/grupo/$grupo->id/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Grupo::class)->getTable(), [
            'id' => $grupo->id,
        ]);
    }

    public function testPodeAcessarComPermissao(): void
    {
        $usuario = $this->getAdmin();
        $this->adicionarPermissoes($usuario, ['administracao.permissoes.grupo:ver']);

        $response = $this->actingAs($usuario)
            ->get('/admin/administracao/permissoes/grupo');

            $response->assertStatus(200);
    }

    public function testPodeAcessarCriarComPermissao(): void
    {
        $usuario = $this->getAdmin();
        $this->adicionarPermissoes($usuario, ['administracao.permissoes.grupo:criar']);

        $response = $this->actingAs($usuario)
            ->get('/admin/administracao/permissoes/grupo/criar');
            $response->assertStatus(200);
    }

    public function testPodeCriarComPermissao(): void
    {
        $nome = Str::random(25);

        $usuario = $this->getAdmin();
        $this->adicionarPermissoes($usuario, ['administracao.permissoes.grupo:criar']);

        $response = $this->actingAs($usuario)
            ->post('/admin/administracao/permissoes/grupo/salvar', [
                'nome' => $nome,
            ]);

            $response->assertStatus(302);
        $this->assertDatabaseHas(app(Grupo::class)->getTable(), [
            'nome' => $nome,
        ]);
    }

    public function testPodeAcessarEditarComPermissao(): void
    {
        $grupo = Grupo::factory()->create();

        $usuario = $this->getAdmin();
        $this->adicionarPermissoes($usuario, ['administracao.permissoes.grupo:editar']);

        $response = $this->actingAs($usuario)
            ->get("/admin/administracao/permissoes/grupo/$grupo->id/editar");
            $response->assertStatus(200);
    }

    public function testPodeEditarComPermissao(): void
    {
        $grupo = Grupo::factory()->create();
        $nome = Str::random(25);

        $usuario = $this->getAdmin();
        $this->adicionarPermissoes($usuario, ['administracao.permissoes.grupo:editar']);

        $response = $this->actingAs($usuario)
            ->post("/admin/administracao/permissoes/grupo/$grupo->id/atualizar", [
                'nome' => $nome,
            ]);

            $response->assertStatus(302);
        $this->assertDatabaseHas(app(Grupo::class)->getTable(), [
            'id' => $grupo->id,
            'nome' => $nome,
        ]);
    }

    public function testPodeExcluirComPermissao(): void
    {
        $grupo = Grupo::factory()->create();

        $usuario = $this->getAdmin();
        $this->adicionarPermissoes($usuario, ['administracao.permissoes.grupo:excluir']);

        $response = $this->actingAs($usuario)
            ->get("/admin/administracao/permissoes/grupo/$grupo->id/excluir");

        $response->assertStatus(302);
        $this->assertDatabaseMissing(app(Grupo::class)->getTable(), [
            'id' => $grupo->id,
        ]);
    }
}
