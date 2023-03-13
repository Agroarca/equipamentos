<?php

namespace Tests\Feature\Admin\Caracteristicas;

use App\Enums\Caracteristicas\TipoCaracteristica;
use App\Models\Caracteristicas\Caracteristica;
use App\Models\Equipamentos\Categoria;
use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;
use Tests\TestCase;

class CaracteristicaDecimalTest extends TestCase
{
    use RefreshDatabase;

    private $usuario;

    public function setUp(): void
    {
        parent::setUp();
        $this->usuario = $this->usuario = Usuario::factory()->admin()->create();
    }

    public function testPodeCriarDecimal()
    {
        $categoria = Categoria::factory()->create();
        $nome = Str::random(10);

        $response = $this->actingAs($this->usuario)
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

    public function testPodeCriarDecimalTamanhos()
    {
        $categoria = Categoria::factory()->create();
        $nome = Str::random(10);

        $response = $this->actingAs($this->usuario)
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

    public function testPodeCriarDecimalQuantidade()
    {
        $categoria = Categoria::factory()->create();
        $nome = Str::random(10);

        $response = $this->actingAs($this->usuario)
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
