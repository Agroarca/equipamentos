<?php

namespace Tests\Feature;

use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Marca;
use App\Models\Equipamentos\Lista\Lista;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class ListaTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessarCategorias(): void
    {
        $response = $this->actingAs($this->getAdmin())
            ->get('/categoria');
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Categoria'));
    }

    public function testPodeAcessarCategoria(): void
    {
        $categoria = Categoria::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/categoria/{$categoria->id}");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Categoria'));
    }

    public function testPodeAcessarMarca(): void
    {
        $marca = Marca::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/marca/{$marca->id}");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Marca'));
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

    /*
    public function testPodeAcessarListaComId(): void
    {
        $lista = Lista::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/lista/{$lista->id}");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Lista'));
    }

    public function testPodeAcessarListaComSlug(): void
    {
        $lista = Lista::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/lista/{$lista->slug}");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Lista'));
    }*/
}
