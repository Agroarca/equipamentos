<?php

namespace Tests\Feature\Site;

use App\Models\Equipamentos\Cadastro\Categoria;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CategoriaTest extends TestCase
{
    use RefreshDatabase;

    public function testPodePesquisarTodasCategoriasRaiz(): void
    {
        Categoria::factory()->count(10)->create();
        $response = $this->actingAs($this->getUsuario())
            ->get('categorias/pesquisar/');

        $response->assertStatus(200);
        $response->assertJsonCount(10, 'categorias');
    }

    public function testPodePesquisarCategoriasFilhas(): void
    {
        $categoriaMae = Categoria::factory()->create();
        Categoria::factory()->count(10)->create([
            'categoria_mae_id' => $categoriaMae->id,
        ]);
        $response = $this->actingAs($this->getUsuario())
            ->get('categorias/pesquisar/' . $categoriaMae->id);

        $response->assertStatus(200);
        $response->assertJsonCount(10, 'categorias');
    }

    public function testNaoPodeRetornarPesquisarCasoIdInvalido(): void
    {
        $response = $this->actingAs($this->getUsuario())
            ->get('categorias/pesquisar/0');

        $response->assertStatus(200);
        $response->assertJsonCount(0, 'categorias');
    }
}
