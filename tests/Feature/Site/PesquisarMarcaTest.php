<?php

namespace Tests\Feature\Site;

use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Marca;
use App\Models\Equipamentos\Cadastro\MarcaCategoria;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class PesquisarMarcaTest extends TestCase
{
    use RefreshDatabase;

    public function testPodePesquisarMarcaSemCategoria(): void
    {
        Marca::factory()->statusAprovado()->create([
            'nome' => 'Marca1',
        ]);

        $response = $this->get('/pesquisar/marcas?termo=Marca1');

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(1));
    }

    public function testPodePesquisarMarcaNaCategoriaAtual(): void
    {
        Marca::factory()->statusAprovado()->create([
            'nome' => 'Marca1',
        ]);

        $marca = Marca::factory()->statusAprovado()->create([
            'nome' => 'Marca2',
        ]);

        $categoria = Categoria::factory()->create();

        MarcaCategoria::create([
            'marca_id' => $marca->id,
            'categoria_id' => $categoria->id,
        ]);

        $response = $this->get("/pesquisar/marcas/$categoria->id?termo=Marca");

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(2));
    }

    public function testPodePesquisarMarcaCategoriaFilha(): void
    {
        Marca::factory()->statusAprovado()->create([
            'nome' => 'Marca1',
        ]);

        $marca = Marca::factory()->statusAprovado()->create([
            'nome' => 'Marca2',
        ]);

        $categoria = Categoria::factory()->create();
        $categoriaFilha = Categoria::factory()->create([
            'categoria_mae_id' => $categoria->id,
        ]);

        MarcaCategoria::create([
            'marca_id' => $marca->id,
            'categoria_id' => $categoria->id,
        ]);

        $response = $this->get("/pesquisar/marcas/$categoriaFilha->id?termo=Marca");

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(2));
    }

    public function testNaoPodePesquisarMarcaSemAprovar(): void
    {
        Marca::factory()->count(3)->create();
        Marca::factory()->statusAprovado()->count(2)->create();

        $response = $this->get('/pesquisar/marcas');

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(2));
    }

    public function testNaoPodePesquisarMarcaOutraCategoria(): void
    {
        Marca::factory()->statusAprovado()->create([
            'nome' => 'Marca1',
        ]);

        $marca = Marca::factory()->statusAprovado()->create([
            'nome' => 'Marca2',
        ]);

        $categoria = Categoria::factory()->create();

        MarcaCategoria::create([
            'marca_id' => $marca->id,
            'categoria_id' => $categoria->id,
        ]);

        $categoria3 = Categoria::factory()->create();

        $response = $this->get("/pesquisar/marcas/$categoria3->id?termo=Marca");

        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) => $json
            ->has(1));
    }
}
