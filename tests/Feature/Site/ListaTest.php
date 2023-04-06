<?php

namespace Tests\Feature;

use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Cadastro\Modelo;
use App\Models\Equipamentos\Lista\Lista;
use App\Models\Equipamentos\Lista\ProdutoLista;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class ListaTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessarCategorias(): void
    {
        Equipamento::factory()->statusAprovado()->count(4)->create();

        $response = $this->actingAs($this->getAdmin())
            ->get('/categoria');
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Categoria')
            ->has('equipamentos.data', 4)
            ->has('categoria'));
    }

    public function testPodeAcessarCategoria(): void
    {
        $categoria = Categoria::factory()->create();
        Equipamento::factory()->statusAprovado()->count(4)->create([
            'categoria_id' => $categoria->id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/categoria/{$categoria->id}");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Categoria')
            ->has('equipamentos.data', 4)
            ->has('categoria')
            ->where('categoria.id', $categoria->id));
    }

    public function testPodeAcessarCetegoriaRetornaApenasCategoriasFilhasDela(): void
    {
        $categoria = Categoria::factory()->create();
        $categoriaFilha = Categoria::factory()->create([
            'categoria_mae_id' => $categoria->id,
        ]);
        Equipamento::factory()->statusAprovado()->count(3)->create([
            'categoria_id' => $categoriaFilha->id,
        ]);

        Equipamento::factory()->statusAprovado()->count(3)->create([
            'categoria_id' => $categoria->id,
        ]);

        Equipamento::factory()->statusAprovado()->count(4)->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/categoria/{$categoria->id}");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Categoria')
            ->has('equipamentos.data', 6)
            ->has('categoria')
            ->where('categoria.id', $categoria->id));
    }

    public function testPodeAcessarMarca(): void
    {
        $modelo1 = Modelo::factory()->create();
        $modelo2 = Modelo::factory()->create();

        Equipamento::factory()->statusAprovado()->count(4)->create([
            'modelo_id' => $modelo1->id,
        ]);

        Equipamento::factory()->statusAprovado()->count(4)->create([
            'modelo_id' => $modelo2->id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/marca/{$modelo1->marca_id}");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Marca')
            ->has('equipamentos.data', 4)
            ->has('marca')
            ->where('marca.id', $modelo1->marca_id));
    }

    public function testNaoPodeAcessarMarcaInexistente(): void
    {
        $response = $this->actingAs($this->getAdmin())
            ->get('/marca/0');
        $response->assertStatus(404);
    }

    public function testNaoPodeAcessarMarcaSemId(): void
    {
        $response = $this->actingAs($this->getAdmin())
            ->get('/marca');
        $response->assertStatus(404);
    }

    public function testPodeAcessarListaComId(): void
    {
        $lista1 = Lista::factory()->create();
        $lista2 = Lista::factory()->create();

        ProdutoLista::factory()->count(4)->create([
            'lista_id' => $lista1->id,
        ]);

        ProdutoLista::factory()->count(4)->create([
            'lista_id' => $lista2->id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/lista/{$lista1->id}");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Lista')
            ->has('equipamentos.data', 4)
            ->has('lista')
            ->where('lista.id', $lista1->id));
    }

    public function testPodeAcessarListaComSlug(): void
    {
        $lista1 = Lista::factory()->create();
        $lista2 = Lista::factory()->create();

        ProdutoLista::factory()->count(4)->create([
            'lista_id' => $lista1->id,
        ]);

        ProdutoLista::factory()->count(4)->create([
            'lista_id' => $lista2->id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/lista/{$lista1->slug}");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Lista')
            ->has('equipamentos.data')
            ->has('lista')
            ->where('lista.id', $lista1->id));
    }
}
