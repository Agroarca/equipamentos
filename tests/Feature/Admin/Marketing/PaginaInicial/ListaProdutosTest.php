<?php

namespace Tests\Feature\Admin\Marketing\PaginaInicial;

use App\Models\Equipamentos\Lista\Lista as ListaEquipamentos;
use App\Models\Marketing\PaginaInicial\Componente;
use App\Models\Marketing\PaginaInicial\ListaProdutos\Lista;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;

class ListaProdutosTest extends PaginaInicialTestBase
{
    use RefreshDatabase;

    public function testPodeAcessarAdicionar(): void
    {
        $versao = $this->getVersaoBase();
        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/lista/produtos/adicionar");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/ListaProdutos/Adicionar')
                ->has('versao')
                ->has('listasProdutos')
        );
    }

    public function testPodeAcessarAdicionarComDados(): void
    {
        $versao = $this->getVersaoBase();
        ListaEquipamentos::factory()->count(4)->create();
        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/marketing/pagina/inicial/$versao->id/layout/lista/produtos/adicionar");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Marketing/PaginaInicial/ListaProdutos/Adicionar')
                ->has('versao')
                ->has('listasProdutos', 4)
        );
    }

    public function testPodeSalvar(): void
    {
        $versao = $this->getVersaoBase();
        $lista = Lista::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/marketing/pagina/inicial/$versao->id/layout/lista/produtos/salvar", [
                'lista_produtos_id' => $lista->lista_produtos_id,
                'titulo' => $lista->titulo,
                'subtitulo' => $lista->subtitulo,
                'tela_cheia' => false,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.marketing.paginaInicial.layout', $versao->id);
        $this->assertDatabaseHas(app(Lista::class)->getTable(), [
            'lista_produtos_id' => $lista->lista_produtos_id,
        ]);
        $this->assertDatabaseHas(app(Componente::class)->getTable(), [
            'titulo' => $lista->titulo,
            'subtitulo' => $lista->subtitulo,
            'tela_cheia' => false,
        ]);
    }
}