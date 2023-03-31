<?php

namespace Tests\Feature\Admin\Equipamentos;

use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Lista\Lista;
use App\Models\Equipamentos\Lista\ProdutoLista;
use Exception;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;

class ListaTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/lista');

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Equipamentos/Lista/Inicio')
                ->has('listas.data', 0)
        );
    }

    public function testPodeAcessarComDados(): void
    {
        $listas = Lista::factory()->count(4)->create();

        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/lista');

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Equipamentos/Lista/Inicio')
                ->has('listas.data', count($listas))
        );
    }

    public function testPodeAcessarCriar(): void
    {
        $response = $this->actingAs($this->getAdmin())
            ->get('/admin/lista/criar');

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Equipamentos/Lista/Criar')
        );
    }

    public function testPodeCriarNovo(): void
    {
        $lista = Lista::factory()->make();

        $response = $this->actingAs($this->getAdmin())
            ->post('/admin/lista/salvar', [
                'nome' => $lista->nome,
                'slug' => $lista->slug,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.lista');
        $this->assertDatabaseHas(app(Lista::class)->getTable(), [
            'nome' => $lista->nome,
            'slug' => $lista->slug,
        ]);
    }

    public function testPodeAcessarEditar(): void
    {
        $lista = Lista::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/lista/$lista->id/editar/");

        $response->assertValid();
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Equipamentos/Lista/Editar')
                ->has('lista')
                ->where('lista.id', $lista->id)
        );
    }

    public function testPodeEditar(): void
    {
        $lista = Lista::factory()->create();
        $novoNome = Str::random(25);
        $novoSlug = 's' . Str::slug(Str::random(25));

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/lista/$lista->id/atualizar", [
                'nome' => $novoNome,
                'slug' => $novoSlug,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.lista');
        $this->assertDatabaseHas(app(Lista::class)->getTable(), [
            'id' => $lista->id,
            'nome' => $novoNome,
            'slug' => $novoSlug,
        ]);
    }

    public function testPodeAdicionarProduto(): void
    {
        $lista = Lista::factory()->create();

        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/lista/$lista->id/adicionar", [
                'equipamento_id' => [$equipamento->id],
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.lista.produtos', [$lista->id]);
        $this->assertDatabaseHas(app(ProdutoLista::class)->getTable(), [
            'lista_id' => $lista->id,
            'equipamento_id' => $equipamento->id,
        ]);
    }
}
