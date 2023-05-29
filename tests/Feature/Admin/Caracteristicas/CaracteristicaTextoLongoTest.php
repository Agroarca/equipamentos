<?php

namespace Tests\Feature\Admin\Caracteristicas;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;
use Tests\TestCase;

class CaracteristicaTextoLongoTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeCriarTextoLongo(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:criar');
        $categoria = Categoria::factory()->create();
        $nome = Str::random(10);

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/caracteristicas/salvar", [
                'nome' => $nome,
                'tipo' => TipoCaracteristica::TextoLongo->value,
                'obrigatorio' => false,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.categorias.caracteristicas', $categoria->id);
        $this->assertDatabaseHas(app(Caracteristica::class)->getTable(), [
            'nome' => $nome,
            'tipo' => TipoCaracteristica::TextoLongo->value,
            'obrigatorio' => false,
        ]);
    }

    public function testPodeCriarTextoLongoTamanhos(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:criar');
        $categoria = Categoria::factory()->create();
        $nome = Str::random(10);

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/caracteristicas/salvar", [
                'nome' => $nome,
                'tipo' => TipoCaracteristica::TextoLongo->value,
                'obrigatorio' => false,
                'minimo' => 100,
                'maximo' => 200,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.categorias.caracteristicas', $categoria->id);
        $this->assertDatabaseHas(app(Caracteristica::class)->getTable(), [
            'nome' => $nome,
            'tipo' => TipoCaracteristica::TextoLongo->value,
            'obrigatorio' => false,
            'minimo' => 100,
            'maximo' => 200,
        ]);
    }

    public function testNaoPodeCriarTextoLongoQuantidade(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:criar');
        $categoria = Categoria::factory()->create();
        $nome = Str::random(10);

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/caracteristicas/salvar", [
                'nome' => $nome,
                'tipo' => TipoCaracteristica::TextoLongo->value,
                'obrigatorio' => false,
                'quantidade' => 2,
            ]);

        $response->assertInvalid(['quantidade']);
        $this->assertDatabaseMissing(app(Caracteristica::class)->getTable(), [
            'nome' => $nome,
            'tipo' => TipoCaracteristica::TextoLongo->value,
            'obrigatorio' => false,
            'quantidade' => 2,
        ]);
    }
}
