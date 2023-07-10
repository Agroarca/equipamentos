<?php

namespace Tests\Feature\Admin\Cadastro;

use App\Models\Cadastro\Estado;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;

class EstadoTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $response = $this->actingAs($this->getAdminComPermissao('cadastro.estado:ver'))
            ->get('/admin/estados');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Cadastro/Estado/Inicio'));
    }

    public function testPodeAcessarComDados(): void
    {
        Estado::factory()->count(7)->create();

        $response = $this->actingAs($this->getAdminComPermissao('cadastro.estado:ver'))
            ->get('/admin/estados');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Cadastro/Estado/Inicio')
            ->has('estados')
            ->has('estados.data', 7));
    }

    public function testPodeAcessarCriar(): void
    {
        $response = $this->actingAs($this->getAdminComPermissao('cadastro.estado:criar'))
            ->get('/admin/estados/criar');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Cadastro/Estado/Criar'));
    }

    public function testPodeCriar(): void
    {
        $estado = Estado::factory()->make();

        $response = $this->actingAs($this->getAdminComPermissao('cadastro.estado:criar'))
            ->post('/admin/estados/salvar', [
                'nome' => $estado->nome,
                'uf' => $estado->uf,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.estados');
        $this->assertDatabaseHas(app(Estado::class)->getTable(), [
            'nome' => $estado->nome,
            'uf' => $estado->uf,
        ]);
    }

    public function testPodeAcessarEditar(): void
    {
        $estado = Estado::factory()->create();

        $response = $this->actingAs($this->getAdminComPermissao('cadastro.estado:editar'))
            ->get("/admin/estados/$estado->id/editar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Cadastro/Estado/Editar')
            ->has('estado')
            ->where('estado.id', $estado->id));
    }

    public function testPodeEditar(): void
    {
        $estado = Estado::factory()->create();
        $novoNome = Str::random(25);
        $novaUF = Str::random(2);

        $response = $this->actingAs($this->getAdminComPermissao('cadastro.estado:editar'))
            ->post("/admin/estados/$estado->id/atualizar", [
                'nome' => $novoNome,
                'uf' => $novaUF,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.estados');
        $this->assertDatabaseHas(app(Estado::class)->getTable(), [
            'id' => $estado->id,
            'nome' => $novoNome,
            'uf' => $novaUF,
        ]);
    }

    public function testPodeExcluir(): void
    {
        $estado = Estado::factory()->create();

        $response = $this->actingAs($this->getAdminComPermissao('cadastro.estado:excluir'))
            ->get("/admin/estados/$estado->id/excluir");

        $response->assertRedirectToRoute('admin.estados');
        $this->assertDatabaseMissing(app(Estado::class)->getTable(), [
            'id' => $estado->id,
        ]);
    }

    public function testNaoPodeAcessarSemPermissao(): void
    {
        $estado = Estado::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/estados/$estado->id/editar");

        $response->assertStatus(403);
    }

    public function testNaoPodeCriarSemPermissao(): void
    {
        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/estados/criar');

        $response->assertStatus(403);
    }

    public function testNaoPodeEditarSemPermissao(): void
    {
        $estado = Estado::factory()->create();
        $novoNome = Str::random(25);
        $novaUF = Str::random(2);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/estados/$estado->id/atualizar", [
                'nome' => $novoNome,
                'uf' => $novaUF,
            ]);

        $response->assertStatus(403);
    }

    public function testNaoPodeExcluirSemPermissao(): void
    {
        $estado = Estado::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/estados/$estado->id/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(Estado::class)->getTable(), [
            'id' => $estado->id,
        ]);
    }
}
