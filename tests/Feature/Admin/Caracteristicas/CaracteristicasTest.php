<?php

namespace Tests\Feature\Admin\Caracteristicas;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class CaracteristicasTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:ver');
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/$categoria->id/caracteristicas");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Caracteristicas/Inicio')
            ->has('categoria')
            ->where('categoria.id', $categoria->id)
            ->has('tipos', count(TipoCaracteristica::toArray())));
    }

    public function testNaoPodeAcessarSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/$categoria->id/caracteristicas");

        $response->assertStatus(403);
    }

    public function testPodeAcessarCriar(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:criar');
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/$categoria->id/caracteristicas/criar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Caracteristicas/Criar')
            ->has('categoria')
            ->where('categoria.id', $categoria->id)
            ->has('tipos', count(TipoCaracteristica::toArray())));
    }

    public function testNaoPodeAcessarCriarSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/$categoria->id/caracteristicas/criar");

        $response->assertStatus(403);
    }

    public function testNaoPodeCriarNomeMinimo(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:criar');
        $categoria = Categoria::factory()->create();
        $nome = Str::random(2);

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/caracteristicas/salvar", [
                'nome' => $nome,
                'tipo' => TipoCaracteristica::Booleano->value,
                'obrigatorio' => false,
            ]);

        $response->assertInvalid(['nome']);
        $this->assertDatabaseMissing(app(Caracteristica::class)->getTable(), [
            'categoria_id' => $categoria->id,
            'nome' => $nome,
            'tipo' => TipoCaracteristica::Booleano->value,
            'obrigatorio' => false
        ]);
    }

    public function testNaoPodeCriarNomeMaximo(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:criar');
        $categoria = Categoria::factory()->create();
        $nome = Str::random(100);

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/caracteristicas/salvar", [
                'nome' => $nome,
                'tipo' => TipoCaracteristica::Booleano->value,
                'obrigatorio' => false,
            ]);

        $response->assertInvalid(['nome']);
        $this->assertDatabaseMissing(app(Caracteristica::class)->getTable(), [
            'categoria_id' => $categoria->id,
            'nome' => $nome,
            'tipo' => TipoCaracteristica::Booleano->value,
            'obrigatorio' => false
        ]);
    }

    public function testNaoPodeCriarTipoInvalido(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:criar');
        $categoria = Categoria::factory()->create();
        $nome = Str::random(10);

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/caracteristicas/salvar", [
                'nome' => $nome,
                'tipo' => 150,
                'obrigatorio' => false,
            ]);

        $response->assertInvalid(['tipo']);
        $this->assertDatabaseMissing(app(Caracteristica::class)->getTable(), [
            'categoria_id' => $categoria->id,
            'nome' => $nome,
            'tipo' => 150,
            'obrigatorio' => false
        ]);
    }

    public function testNaoPodeCriarSemObrigatorio(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:criar');
        $categoria = Categoria::factory()->create();
        $nome = Str::random(10);

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/caracteristicas/salvar", [
                'nome' => $nome,
                'tipo' => TipoCaracteristica::Booleano->value,
            ]);

        $response->assertInvalid(['obrigatorio']);
        $this->assertDatabaseMissing(app(Caracteristica::class)->getTable(), [
            'categoria_id' => $categoria->id,
            'nome' => $nome,
            'tipo' => TipoCaracteristica::Booleano->value,
        ]);
    }

    public function testNaoPodeCriarMaximoMenorMinimo(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:criar');
        $categoria = Categoria::factory()->create();
        $nome = Str::random(10);

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/caracteristicas/salvar", [
                'nome' => $nome,
                'tipo' => TipoCaracteristica::Inteiro->value,
                'obrigatorio' => false,
                'minimo' => 300,
                'maximo' => 200
            ]);

        $response->assertInvalid(['maximo']);
        $this->assertDatabaseMissing(app(Caracteristica::class)->getTable(), [
            'nome' => $nome,
            'tipo' => TipoCaracteristica::Inteiro->value,
            'obrigatorio' => false,
            'minimo' => 300,
            'maximo' => 200
        ]);
    }

    public function testPodeVisualizar(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:ver');
        $caracteristica = Caracteristica::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/$caracteristica->categoria_id/caracteristicas/$caracteristica->id/visualizar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Caracteristicas/Visualizar')
            ->has('caracteristica')
            ->where('caracteristica.id', $caracteristica->id)
            ->has('tipos', count(TipoCaracteristica::toArray())));
    }

    public function testNaoPodeVisualizarSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $caracteristica = Caracteristica::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/$caracteristica->categoria_id/caracteristicas/$caracteristica->id/visualizar");

        $response->assertStatus(403);
    }

    public function testPodeExcluir(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:excluir');
        $caracteristica = Caracteristica::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/$caracteristica->categoria_id/caracteristicas/$caracteristica->id/excluir");

        $response->assertRedirectToRoute('admin.categorias.caracteristicas', $caracteristica->categoria_id);
        $this->assertDatabaseMissing(app(Caracteristica::class)->getTable(), [
            'id' => $caracteristica->id,
        ]);
    }

    public function testNaoPodeExcluirSemPermissao(): void
    {
        $usuario = $this->getAdmin();
        $caracteristica = Caracteristica::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/$caracteristica->categoria_id/caracteristicas/$caracteristica->id/excluir");

        $response->assertStatus(403);
    }
}
