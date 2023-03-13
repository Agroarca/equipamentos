<?php

namespace Tests\Feature\Admin\Caracteristicas;

use App\Enums\Caracteristicas\TipoCaracteristica;
use App\Models\Caracteristicas\Caracteristica;
use App\Models\Equipamentos\Categoria;
use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;
use Tests\TestCase;

class CaracteristicaBoolTest extends TestCase
{
    use RefreshDatabase;

    private $usuario;

    public function setUp(): void
    {
        parent::setUp();
        $this->usuario = $this->usuario = Usuario::factory()->admin()->create();
    }

    public function testPodeCriarBool()
    {
        $categoria = Categoria::factory()->create();
        $nome = Str::random(25);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/categorias/$categoria->id/caracteristicas/salvar", [
                'nome' => $nome,
                'tipo' => TipoCaracteristica::Booleano->value,
                'obrigatorio' => false
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.categorias.caracteristicas', $categoria->id);
        $this->assertDatabaseHas(app(Caracteristica::class)->getTable(), [
            'categoria_id' => $categoria->id,
            'nome' => $nome,
            'tipo' => TipoCaracteristica::Booleano->value,
            'obrigatorio' => false
        ]);
    }

    public function testPodeCriarBoolObrig()
    {
        $categoria = Categoria::factory()->create();
        $nome = Str::random(25);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/categorias/$categoria->id/caracteristicas/salvar", [
                'nome' => $nome,
                'tipo' => TipoCaracteristica::Booleano->value,
                'obrigatorio' => true
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.categorias.caracteristicas', $categoria->id);
        $this->assertDatabaseHas(app(Caracteristica::class)->getTable(), [
            'categoria_id' => $categoria->id,
            'nome' => $nome,
            'tipo' => TipoCaracteristica::Booleano->value,
            'obrigatorio' => true
        ]);
    }

    public function testNaoPodeCriarBoolTamanhosQuantidade()
    {
        $categoria = Categoria::factory()->create();
        $nome = Str::random(10);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/categorias/$categoria->id/caracteristicas/salvar", [
                'nome' => $nome,
                'tipo' => TipoCaracteristica::Booleano->value,
                'obrigatorio' => false,
                'minimo' => 100,
                'maximo' => 200,
                'quantidade' => 2,
            ]);

        $response->assertInvalid(['minimo', 'maximo', 'quantidade']);
        $this->assertDatabaseMissing(app(Caracteristica::class)->getTable(), [
            'nome' => $nome,
            'tipo' => TipoCaracteristica::Booleano->value,
            'obrigatorio' => false,
            'minimo' => 100,
            'maximo' => 200,
            'quantidade' => 2,
        ]);
    }
}
