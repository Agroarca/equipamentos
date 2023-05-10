<?php

namespace Tests\Feature\Site;

use App\Models\Equipamentos\Cadastro\Categoria;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class CategoriaTest extends TestCase
{
    use RefreshDatabase;

    public function testPodePesquisarTodasCategoriasRaiz(): void
    {
        $categorias = Categoria::factory()->count(10)->create();
        $response = $this->actingAs($this->getUsuario())
            ->get('categorias/pesquisar/');

        $response->assertStatus(200);
        $response->assertJsonCount(10, 'categorias');

        $response->assertJson(fn (AssertableJson $json) => $json
            ->has('categorias', 10)
            ->where('categorias.0.id', $categorias->first()->id)
            ->etc());
    }

    public function testPodePesquisarCategoriasFilhas(): void
    {
        $categoriaMae = Categoria::factory()->create();
        $categorias = Categoria::factory()->count(10)->create([
            'categoria_mae_id' => $categoriaMae->id,
        ]);
        $response = $this->actingAs($this->getUsuario())
            ->get('categorias/pesquisar/' . $categoriaMae->id);

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has('categorias', 10)
            ->where('categorias.0.id', $categorias->first()->id)
            ->etc());
    }

    public function testNaoPodeRetornarPesquisarCasoIdInvalido(): void
    {
        $response = $this->actingAs($this->getUsuario())
            ->get('categorias/pesquisar/0');

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has('categorias', 0)
            ->has('categorias_mae', 0)
            ->etc());
    }
}
