<?php

namespace Tests\Feature\Admin\Cadastro;

use App\Models\Cadastro\Cidade;
use App\Models\Cadastro\Estado;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;

class CidadeTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $response = $this->actingAs($this->getAdminComPermissao('cadastro.cidade:ver'))
            ->get('/admin/cidades');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Cadastro/Cidade/Inicio'));
    }

    public function testPodeAcessarComDados(): void
    {
        Cidade::factory()->count(7)->create();

        $response = $this->actingAs($this->getAdminComPermissao('cadastro.cidade:ver'))
            ->get('/admin/cidades');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Cadastro/Cidade/Inicio')
            ->has('cidades')
            ->has('cidades.data', 7));
    }

    public function testPodeAcessarCriar(): void
    {
        $response = $this->actingAs($this->getAdminComPermissao('cadastro.cidade:criar'))
            ->get('/admin/cidades/criar');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Cadastro/Cidade/Criar'));
    }

    public function testPodeCriar(): void
    {
        $cidade = Cidade::factory()->make();

        $response = $this->actingAs($this->getAdminComPermissao('cadastro.cidade:criar'))
            ->post('/admin/cidades/salvar', [
                'nome' => $cidade->nome,
                'estado_id' => $cidade->estado_id,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.cidades');
        $this->assertDatabaseHas(app(Cidade::class)->getTable(), [
            'nome' => $cidade->nome,
            'estado_id' => $cidade->estado_id,
        ]);
    }

    public function testPodeAcessarEditar(): void
    {
        $cidade = Cidade::factory()->create();

        $response = $this->actingAs($this->getAdminComPermissao('cadastro.cidade:editar'))
            ->get("/admin/cidades/$cidade->id/editar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Cadastro/Cidade/Editar')
            ->has('cidade')
            ->where('cidade.id', $cidade->id));
    }

    public function testPodeEditar(): void
    {
        $cidade = Cidade::factory()->create();
        $novoNome = Str::random(25);
        $novoEstado = Estado::factory()->create();

        $response = $this->actingAs($this->getAdminComPermissao('cadastro.cidade:editar'))
            ->post("/admin/cidades/$cidade->id/atualizar", [
                'nome' => $novoNome,
                'estado_id' => $novoEstado->id,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.cidades');
        $this->assertDatabaseHas(app(Cidade::class)->getTable(), [
            'id' => $cidade->id,
            'nome' => $novoNome,
            'estado_id' => $novoEstado->id,
        ]);
    }

    public function testPodeExcluir(): void
    {
        $cidade = Cidade::factory()->create();

        $response = $this->actingAs($this->getAdminComPermissao('cadastro.cidade:excluir'))
            ->get("/admin/cidades/$cidade->id/excluir");

        $response->assertRedirectToRoute('admin.cidades');
        $this->assertDatabaseMissing(app(Cidade::class)->getTable(), [
            'id' => $cidade->id,
        ]);
    }

    public function testNaoPodeAcessarSemPermissao(): void
    {
        $cidade = Cidade::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/cidades/$cidade->id/editar");

        $response->assertStatus(403);
    }

    public function testNaoPodeCriarSemPermissao(): void
    {
        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/cidades/criar');

        $response->assertStatus(403);
    }

    public function testNaoPodeEditarSemPermissao(): void
    {
        $cidade = Cidade::factory()->create();
        $novoNome = Str::random(25);
        $novoEstado = Estado::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/cidades/$cidade->id/atualizar", [
                'nome' => $novoNome,
                'estado_id' => $novoEstado->id,
            ]);

        $response->assertStatus(403);
    }

    public function testNaoPodeExcluirSemPermissao(): void
    {
        $cidade = Cidade::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/cidades/$cidade->id/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Cidade::class)->getTable(), [
            'id' => $cidade->id,
        ]);
    }
}
