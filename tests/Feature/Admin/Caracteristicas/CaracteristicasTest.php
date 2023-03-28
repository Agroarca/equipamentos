<?php

namespace Tests\Feature\Admin\Caracteristicas;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class CaracteristicasTest extends TestCase
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
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->get("/admin/categorias/$categoria->id/caracteristicas");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Caracteristicas/Inicio')
            ->has('categoria')
            ->where('categoria.id', $categoria->id)
            ->has('tipos', count(TipoCaracteristica::toArray())));
    }

    public function testPodeAcessarCriar(): void
    {
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->get("/admin/categorias/$categoria->id/caracteristicas/criar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Caracteristicas/Criar')
            ->has('categoria')
            ->where('categoria.id', $categoria->id)
            ->has('tipos', count(TipoCaracteristica::toArray())));
    }

    public function testNaoPodeCriarNomeMinimo()
    {
        $categoria = Categoria::factory()->create();
        $nome = Str::random(2);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/categorias/$categoria->id/caracteristicas/salvar", [
                'nome' => $nome,
                'tipo' => TipoCaracteristica::Booleano->value,
                'obrigatorio' => false
            ]);

        $response->assertInvalid(['nome']);
        $this->assertDatabaseMissing(app(Caracteristica::class)->getTable(), [
            'categoria_id' => $categoria->id,
            'nome' => $nome,
            'tipo' => TipoCaracteristica::Booleano->value,
            'obrigatorio' => false
        ]);
    }

    public function testNaoPodeCriarNomeMaximo()
    {
        $categoria = Categoria::factory()->create();
        $nome = Str::random(100);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/categorias/$categoria->id/caracteristicas/salvar", [
                'nome' => $nome,
                'tipo' => TipoCaracteristica::Booleano->value,
                'obrigatorio' => false
            ]);

        $response->assertInvalid(['nome']);
        $this->assertDatabaseMissing(app(Caracteristica::class)->getTable(), [
            'categoria_id' => $categoria->id,
            'nome' => $nome,
            'tipo' => TipoCaracteristica::Booleano->value,
            'obrigatorio' => false
        ]);
    }

    public function testNaoPodeCriarTipoInvalido()
    {
        $categoria = Categoria::factory()->create();
        $nome = Str::random(10);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/categorias/$categoria->id/caracteristicas/salvar", [
                'nome' => $nome,
                'tipo' => 150,
                'obrigatorio' => false
            ]);

        $response->assertInvalid(['tipo']);
        $this->assertDatabaseMissing(app(Caracteristica::class)->getTable(), [
            'categoria_id' => $categoria->id,
            'nome' => $nome,
            'tipo' => 150,
            'obrigatorio' => false
        ]);
    }

    public function testNaoPodeCriarSemObrigatorio()
    {
        $categoria = Categoria::factory()->create();
        $nome = Str::random(10);

        $response = $this->actingAs($this->usuario)
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

    public function testNaoPodeCriarMaximoMenorMinimo()
    {
        $categoria = Categoria::factory()->create();
        $nome = Str::random(10);

        $response = $this->actingAs($this->usuario)
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

    public function testPodeVisualizar()
    {
        $caracteristica = Caracteristica::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->get("/admin/categorias/$caracteristica->categoria_id/caracteristicas/$caracteristica->id/visualizar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Caracteristicas/Visualizar')
            ->has('caracteristica')
            ->where('caracteristica.id', $caracteristica->id)
            ->has('tipos', count(TipoCaracteristica::toArray())));
    }

    public function testPodeExcluir()
    {
        $caracteristica = Caracteristica::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->get("/admin/categorias/$caracteristica->categoria_id/caracteristicas/$caracteristica->id/excluir");

        $response->assertRedirectToRoute('admin.categorias.caracteristicas', $caracteristica->categoria_id);
        $this->assertDatabaseMissing(app(Caracteristica::class)->getTable(), [
            'id' => $caracteristica->id
        ]);
    }
}
