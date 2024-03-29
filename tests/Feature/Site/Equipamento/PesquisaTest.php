<?php

namespace Tests\Feature\Site\Equipamento;

use App\Models\Equipamentos\Cadastro\Equipamento;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class PesquisaTest extends TestCase
{
    use RefreshDatabase;

    public function testNaoPodePesquisarSemTermo(): void
    {
        Equipamento::factory()->statusAprovado()->count(12)->create();

        $response = $this->get('/pesquisa');

        $response->assertStatus(404);
    }

    public function testPodePesquisarPeloTitulo(): void
    {
        $equipamento = Equipamento::factory()->statusAprovado()->create();

        $response = $this->get("/pesquisa/$equipamento->titulo");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Pesquisa')
            ->has('equipamentos.data', 1)
            ->has('filtros')
            ->has('filtrosSelecionados')
            ->where('equipamentos.data.0.id', $equipamento->id));
    }

    public function testNaoPodeRetornarEquipamentoNaoAprovado(): void
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->get("/pesquisa/$equipamento->titulo");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Pesquisa')
            ->has('equipamentos.data', 0)
            ->has('filtros')
            ->has('filtrosSelecionados'));
    }

    public function testPodePesquisarPeloModelo(): void
    {
        $equipamento = Equipamento::factory()->statusAprovado()->create();

        $response = $this->get('/pesquisa/' . $equipamento->modelo->nome);

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Pesquisa')
            ->has('equipamentos.data', 1)
            ->has('filtros')
            ->has('filtrosSelecionados')
            ->where('equipamentos.data.0.id', $equipamento->id));
    }

    public function testPodePesquisarPelaMarca(): void
    {
        $equipamento = Equipamento::factory()->statusAprovado()->create();

        $response = $this->get('/pesquisa/' . $equipamento->modelo->marca->nome);

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Pesquisa')
            ->has('equipamentos.data', 1)
            ->has('filtros')
            ->has('filtrosSelecionados')
            ->where('equipamentos.data.0.id', $equipamento->id));
    }

    //phpcs:disable Generic.Files.LineLength.MaxExceeded
    public function testPodeFiltrarNaPesquisa(): void
    {
        $equipamento = Equipamento::factory()->statusAprovado()->create();

        $response = $this->get('/pesquisa/' . $equipamento->modelo->marca->nome . '?categoria_id=' . $equipamento->categoria_id);

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Lista/Pesquisa')
            ->has('equipamentos.data', 1)
            ->has('filtros')
            ->has('filtrosSelecionados')
            ->where('equipamentos.data.0.id', $equipamento->id));
    }
}
