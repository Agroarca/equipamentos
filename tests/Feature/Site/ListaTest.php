<?php

namespace Tests\Feature;

use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Cadastro\Marca;
use App\Models\Equipamentos\Cadastro\Modelo;
use App\Models\Equipamentos\Lista\Lista;
use App\Models\Equipamentos\Lista\ProdutoLista;
use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class ListaTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessarCategorias(): void
    {
        Equipamento::factory()->statusAprovado()->count(4)->create();

        $response = $this->get('/categoria');
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

        $response = $this->get("/categoria/{$categoria->id}");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Categoria')
            ->has('equipamentos.data', 4)
            ->has('categoria')
            ->where('categoria.id', $categoria->id));
    }

    public function testPodeAcessarCategoriaRetornaApenasCategoriasFilhasDela(): void
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

        $response = $this->get("/categoria/{$categoria->id}");
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

        $response = $this->get("/marca/{$modelo1->marca_id}");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Marca')
            ->has('equipamentos.data', 4)
            ->has('marca')
            ->where('marca.id', $modelo1->marca_id));
    }

    public function testNaoPodeAcessarMarcaInexistente(): void
    {
        $response = $this->get('/marca/0');
        $response->assertStatus(404);
    }

    public function testNaoPodeAcessarMarcaSemId(): void
    {
        $response = $this->get('/marca');
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

        $response = $this->get("/lista/{$lista1->id}");
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

        $response = $this->get("/lista/{$lista1->slug}");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Lista')
            ->has('equipamentos.data')
            ->has('lista')
            ->where('lista.id', $lista1->id));
    }

    public function testPodeFiltraPorCatagoria(): void
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

        $response = $this->get("/categoria?categoria_id={$categoriaFilha->id}");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Categoria')
            ->has('equipamentos.data', 3));
    }

    public function testPodeFiltrarPorMarca(): void
    {
        $marca1 = Marca::factory()->create();
        $marca2 = Marca::factory()->create();

        $modelo1 = Modelo::factory()->create([
            'marca_id' => $marca1->id,
        ]);

        $modelo2 = Modelo::factory()->create([
            'marca_id' => $marca2->id,
        ]);

        Equipamento::factory()->statusAprovado()->count(4)->create([
            'modelo_id' => $modelo1->id,
        ]);

        Equipamento::factory()->statusAprovado()->count(4)->create([
            'modelo_id' => $modelo2->id,
        ]);

        $response = $this->get("/categoria?marca_id={$marca2->id}");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Categoria')
            ->has('equipamentos.data', 4));
    }

    public function testPodeFiltrarPorModelo(): void
    {
        $marca1 = Marca::factory()->create();
        $marca2 = Marca::factory()->create();

        $modelo1 = Modelo::factory()->create([
            'marca_id' => $marca1->id,
        ]);

        $modelo2 = Modelo::factory()->create([
            'marca_id' => $marca2->id,
        ]);

        Equipamento::factory()->statusAprovado()->count(4)->create([
            'modelo_id' => $modelo1->id,
        ]);

        Equipamento::factory()->statusAprovado()->count(4)->create([
            'modelo_id' => $modelo2->id,
        ]);

        $response = $this->get("/categoria?modelo_id={$modelo2->id}");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Categoria')
            ->has('equipamentos.data', 4));
    }

    public function testPodeFiltrarPorValorMaximo(): void
    {
        Equipamento::factory()->statusAprovado()->count(4)->create([
            'valor' => 1000,
        ]);

        Equipamento::factory()->statusAprovado()->count(4)->create([
            'valor' => 2000,
        ]);

        $response = $this->get('/categoria?valor_maximo=1500');
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Categoria')
            ->has('equipamentos.data', 4));
    }

    public function testPodeFiltrarPorValorMinimo(): void
    {
        Equipamento::factory()->statusAprovado()->count(4)->create([
            'valor' => 500,
        ]);

        Equipamento::factory()->statusAprovado()->count(4)->create([
            'valor' => 2000,
        ]);

        $response = $this->get('/categoria?valor_minimo=1000');
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Categoria')
            ->has('equipamentos.data', 4));
    }

    public function testPodeFiltrarPorValorMaximoEValorMinimo(): void
    {
        Equipamento::factory()->statusAprovado()->count(4)->create([
            'valor' => 500,
        ]);

        Equipamento::factory()->statusAprovado()->count(4)->create([
            'valor' => 1250,
        ]);

        Equipamento::factory()->statusAprovado()->count(4)->create([
            'valor' => 2000,
        ]);

        $response = $this->get('/categoria?valor_minimo=1000&valor_maximo=1500');
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Categoria')
            ->has('equipamentos.data', 4));
    }

    public function testPodeFiltrarPorAnoMaximo(): void
    {
        Equipamento::factory()->statusAprovado()->count(4)->create([
            'ano' => 2010,
        ]);

        Equipamento::factory()->statusAprovado()->count(4)->create([
            'ano' => 2015,
        ]);

        $response = $this->get('/categoria?ano_maximo=2012');
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Categoria')
            ->has('equipamentos.data', 4));
    }

    public function testPodeFiltrarPorAnoMinimo(): void
    {
        Equipamento::factory()->statusAprovado()->count(4)->create([
            'ano' => 2010,
        ]);

        Equipamento::factory()->statusAprovado()->count(4)->create([
            'ano' => 2015,
        ]);

        $response = $this->get('/categoria?ano_minimo=2012');
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Categoria')
            ->has('equipamentos.data', 4));
    }

    public function testPodeFiltrarPorAnoMaximoEAnoMinimo(): void
    {
        Equipamento::factory()->statusAprovado()->count(4)->create([
            'ano' => 2010,
        ]);

        Equipamento::factory()->statusAprovado()->count(4)->create([
            'ano' => 2013,
        ]);

        Equipamento::factory()->statusAprovado()->count(4)->create([
            'ano' => 2015,
        ]);

        $response = $this->get('/categoria?ano_minimo=2012&ano_maximo=2014');
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Categoria')
            ->has('equipamentos.data', 4));
    }

    public function testPodeFiltrarEmUmaMarca(): void
    {
        $marca = Marca::factory()->create();

        $modelo1 = Modelo::factory()->create([
            'marca_id' => $marca->id,
        ]);

        $modelo2 = Modelo::factory()->create([
            'marca_id' => $marca->id,
        ]);

        Equipamento::factory()->statusAprovado()->count(4)->create([
            'modelo_id' => $modelo1->id,
        ]);

        Equipamento::factory()->statusAprovado()->count(4)->create([
            'modelo_id' => $modelo2->id,
        ]);

        $response = $this->get("/marca/{$marca->id}?modelo_id={$modelo2->id}");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Marca')
            ->has('equipamentos.data', 4));
    }

    public function testPodeFiltrarEmUmaLista(): void
    {
        $lista = Lista::factory()->create();

        $equipamentos = Equipamento::factory()->statusAprovado()->count(4)->create();

        foreach ($equipamentos as $equipamento) {
            ProdutoLista::factory()->create([
                'equipamento_id' => $equipamento->id,
                'lista_id' => $lista->id,
            ]);
        }

        $response = $this->get("/lista/{$lista->id}?modelo_id={$equipamentos[0]->modelo_id}");

        $response->assertStatus(200);

        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Lista')
            ->has('equipamentos.data', 1));
    }

    public function testPodeAcessarPaginaAnunciante()
    {
        $anunciante = Usuario::factory()->create();

        $response = $this->get("/anunciante/$anunciante->id");

        $response->assertStatus(200);

        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Anunciante/Produtos')
            ->has('anunciante'));
    }

    public function testPodeAcessarPaginAnuncianteComDados()
    {
        $anunciante = Usuario::factory()->create();

        $equipamentos = Equipamento::factory()->statusAprovado()->count(4)->create([
            'usuario_id' => $anunciante->id,
        ]);

        $response = $this->get("/anunciante/$anunciante->id");

        $response->assertStatus(200);

        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Anunciante/Produtos')
            ->has('anunciante')
            ->has('equipamentos.data', 4));
    }
}
