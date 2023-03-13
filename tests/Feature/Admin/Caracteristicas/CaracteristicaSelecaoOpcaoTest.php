<?php

namespace Tests\Feature\Admin\Caracteristicas;

use App\Enums\Caracteristicas\TipoCaracteristica;
use App\Models\Caracteristicas\Caracteristica;
use App\Models\Caracteristicas\Valor\CaracteristicaOpcao;
use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;

class CaracteristicaSelecaoOpcaoTest extends TestCase
{
    use RefreshDatabase;

    private $usuario;

    public function setUp(): void
    {
        parent::setUp();
        $this->usuario = $this->usuario = Usuario::factory()->admin()->create();
    }

    public function testPodeVisualizarOpcoes()
    {
        $caracteristicaOpcao = CaracteristicaOpcao::factory()->create();
        $caracteristica = $caracteristicaOpcao->caracteristica;

        $response = $this->actingAs($this->usuario)
            ->get("/admin/categorias/$caracteristica->categoria_id/caracteristicas/$caracteristica->id/visualizar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Caracteristicas/Visualizar')
            ->has('caracteristica')
            ->where('caracteristica.id', $caracteristica->id)
            ->has('caracteristica.opcoes', 1));
    }

    public function testPodeCriarOpcao()
    {
        $nome = Str::random(10);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Selecao->value,
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/categorias/$caracteristica->categoria_id/caracteristicas/$caracteristica->id/opcoes/salvar", [
                'nome' => $nome,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.categorias.caracteristicas.visualizar', [$caracteristica->categoria_id, $caracteristica->id,]);
        $this->assertDatabaseHas(app(CaracteristicaOpcao::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'nome' => $nome,
        ]);
    }

    public function testNaoPodeCriarOpcaoTamanhoMaximo()
    {
        $nome = Str::random(256);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Selecao->value,
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/categorias/$caracteristica->categoria_id/caracteristicas/$caracteristica->id/opcoes/salvar", [
                'nome' => $nome,
            ]);

        $response->assertInvalid(['nome']);
        $this->assertDatabaseMissing(app(CaracteristicaOpcao::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'nome' => $nome,
        ]);
    }

    public function testNaoPodeCriarOpcaoTamanhoMinimo()
    {
        $nome = Str::random(2);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Selecao->value,
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/categorias/$caracteristica->categoria_id/caracteristicas/$caracteristica->id/opcoes/salvar", [
                'nome' => $nome,
            ]);

        $response->assertInvalid(['nome']);
        $this->assertDatabaseMissing(app(CaracteristicaOpcao::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'nome' => $nome,
        ]);
    }

    public function testPodeExcluirOpcao()
    {
        $caracteristicaOpcao = CaracteristicaOpcao::factory()->create();
        $caracteristica = $caracteristicaOpcao->caracteristica;

        $response = $this->actingAs($this->usuario)
            ->get("/admin/categorias/$caracteristica->categoria_id/caracteristicas/$caracteristica->id/opcoes/$caracteristicaOpcao->id/excluir");

        $response->assertValid();
        $response->assertRedirectToRoute('admin.categorias.caracteristicas.visualizar', [$caracteristica->categoria_id, $caracteristica->id,]);
        $this->assertDatabaseMissing(app(CaracteristicaOpcao::class)->getTable(), [
            'id' => $caracteristicaOpcao->id,
        ]);
    }
}
