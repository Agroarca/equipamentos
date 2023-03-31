<?php

namespace Tests\Feature\Admin\Caracteristicas;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;
use Tests\TestCase;

class CaracteristicaDecimalTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeCriarDecimal(): void
    {
        $categoria = Categoria::factory()->create();
        $nome = Str::random(10);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/categorias/$categoria->id/caracteristicas/salvar", [
                'nome' => $nome,
                'tipo' => TipoCaracteristica::Decimal->value,
                'obrigatorio' => false,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.categorias.caracteristicas', $categoria->id);
        $this->assertDatabaseHas(app(Caracteristica::class)->getTable(), [
            'nome' => $nome,
            'tipo' => TipoCaracteristica::Decimal->value,
            'obrigatorio' => false,
        ]);
    }

    public function testPodeCriarDecimalTamanhos(): void
    {
        $categoria = Categoria::factory()->create();
        $nome = Str::random(10);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/categorias/$categoria->id/caracteristicas/salvar", [
                'nome' => $nome,
                'tipo' => TipoCaracteristica::Decimal->value,
                'obrigatorio' => false,
                'minimo' => 100,
                'maximo' => 200,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.categorias.caracteristicas', $categoria->id);
        $this->assertDatabaseHas(app(Caracteristica::class)->getTable(), [
            'nome' => $nome,
            'tipo' => TipoCaracteristica::Decimal->value,
            'obrigatorio' => false,
            'minimo' => 100,
            'maximo' => 200,
        ]);
    }

    public function testPodeCriarDecimalQuantidade(): void
    {
        $categoria = Categoria::factory()->create();
        $nome = Str::random(10);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/categorias/$categoria->id/caracteristicas/salvar", [
                'nome' => $nome,
                'tipo' => TipoCaracteristica::Decimal->value,
                'obrigatorio' => false,
                'quantidade' => 2,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.categorias.caracteristicas', $categoria->id);
        $this->assertDatabaseHas(app(Caracteristica::class)->getTable(), [
            'nome' => $nome,
            'tipo' => TipoCaracteristica::Decimal->value,
            'obrigatorio' => false,
            'quantidade' => 2,
        ]);
    }
}
