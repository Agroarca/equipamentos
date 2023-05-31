<?php

namespace Tests\Feature\Admin\Caracteristicas;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaOpcao;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;

class CaracteristicaSelecaoOpcaoTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeVisualizarOpcoes(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:ver');
        $caracteristicaOpcao = CaracteristicaOpcao::factory()->create();
        $caracteristica = $caracteristicaOpcao->caracteristica;

        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/$caracteristica->categoria_id/caracteristicas/$caracteristica->id/visualizar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Caracteristicas/Visualizar')
            ->has('caracteristica')
            ->where('caracteristica.id', $caracteristica->id)
            ->has('caracteristica.opcoes', 1));
    }

    public function testPodeAcessarCriar(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:criar');
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Selecao,
        ]);

        $response = $this->actingAs($usuario)
            ->get("/admin/categorias/$caracteristica->categoria_id/caracteristicas/$caracteristica->id/opcoes/criar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Caracteristicas/Opcoes/Criar')
            ->has('caracteristica')
            ->where('caracteristica.id', $caracteristica->id));
    }

    public function testPodeCriarOpcao(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:criar');
        $nome = Str::random(10);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Selecao,
        ]);

        $response = $this->actingAs($usuario)
            ->post(
                "/admin/categorias/$caracteristica->categoria_id/caracteristicas/$caracteristica->id/opcoes/salvar",
                ['nome' => $nome]
            );

        $response->assertValid();
        $response->assertRedirectToRoute(
            'admin.categorias.caracteristicas.visualizar',
            [
                $caracteristica->categoria_id,
                $caracteristica->id,
            ]
        );
        $this->assertDatabaseHas(app(CaracteristicaOpcao::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'nome' => $nome,
        ]);
    }

    public function testNaoPodeCriarOpcaoTamanhoMaximo(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:criar');
        $nome = Str::random(256);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Selecao,
        ]);

        $response = $this->actingAs($usuario)
            ->post(
                "/admin/categorias/$caracteristica->categoria_id/caracteristicas/$caracteristica->id/opcoes/salvar",
                ['nome' => $nome]
            );

        $response->assertInvalid(['nome']);
        $this->assertDatabaseMissing(app(CaracteristicaOpcao::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'nome' => $nome,
        ]);
    }

    public function testNaoPodeCriarOpcaoTamanhoMinimo(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:criar');
        $nome = Str::random(2);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Selecao,
        ]);

        $response = $this->actingAs($usuario)
            ->post(
                "/admin/categorias/$caracteristica->categoria_id/caracteristicas/$caracteristica->id/opcoes/salvar",
                ['nome' => $nome]
            );

        $response->assertInvalid(['nome']);
        $this->assertDatabaseMissing(app(CaracteristicaOpcao::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'nome' => $nome,
        ]);
    }

    public function testPodeExcluirOpcao(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:excluir');
        $caracteristicaOpcao = CaracteristicaOpcao::factory()->create();
        $caracteristica = $caracteristicaOpcao->caracteristica;

        $response = $this->actingAs($usuario)
            // phpcs:ignore Generic.Files.LineLength.MaxExceeded
            ->get("/admin/categorias/$caracteristica->categoria_id/caracteristicas/$caracteristica->id/opcoes/$caracteristicaOpcao->id/excluir");

        $response->assertValid();
        $response->assertRedirectToRoute(
            'admin.categorias.caracteristicas.visualizar',
            [
                $caracteristica->categoria_id,
                $caracteristica->id,
            ]
        );
        $this->assertDatabaseMissing(app(CaracteristicaOpcao::class)->getTable(), [
            'id' => $caracteristicaOpcao->id,
        ]);
    }
}
