<?php

namespace Tests\Feature\Admin\Caracteristicas;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;
use Tests\TestCase;

class CaracteristicaBoolTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeCriarBool(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:criar');
        $categoria = Categoria::factory()->create();
        $nome = Str::random(25);

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/caracteristicas/salvar", [
                'nome' => $nome,
                'tipo' => TipoCaracteristica::Booleano->value,
                'obrigatorio' => false,
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

    public function testPodeCriarBoolObrig(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:criar');
        $categoria = Categoria::factory()->create();
        $nome = Str::random(25);

        $response = $this->actingAs($usuario)
            ->post("/admin/categorias/$categoria->id/caracteristicas/salvar", [
                'nome' => $nome,
                'tipo' => TipoCaracteristica::Booleano->value,
                'obrigatorio' => true,
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

    public function testNaoPodeCriarBoolTamanhosQuantidade(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.caracteristicas.caracteristica:criar');
        $categoria = Categoria::factory()->create();
        $nome = Str::random(10);

        $response = $this->actingAs($usuario)
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
