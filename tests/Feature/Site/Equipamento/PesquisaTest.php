<?php

namespace Tests\Feature\Site\Equipamento;

use App\Models\Equipamentos\Cadastro\Equipamento;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class PesquisaTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $response = $this->get('/pesquisa');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Pesquisa'));
    }

    public function testPodePesquisarTodosEquipamentosSemTermo(): void
    {
        Equipamento::factory()->statusAprovado()->count(12)->create();

        $response = $this->get('/pesquisa');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Pesquisa')
            ->has('equipamentos.data', 12));
    }

    public function testPodePesquisarPeloNome(): void
    {
        $equipamento = Equipamento::factory()->statusAprovado()->create();

        $response = $this->get('/pesquisa?termo=' . $equipamento->nome);

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Pesquisa')
            ->has('equipamentos.data', 1)
            ->where('equipamentos.data.0.id', $equipamento->id));
    }

    public function testNaoPodePesquisarEquipamentoNaoAprovado(): void
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->get('/pesquisa?pesquisa=' . $equipamento->nome);

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Pesquisa')
            ->has('equipamentos.data', 0));
    }

    public function testPodePesquisarPeloModelo(): void
    {
        $equipamento = Equipamento::factory()->statusAprovado()->create();

        $response = $this->get('/pesquisa?pesquisa=' . $equipamento->modelo->nome);

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Pesquisa')
            ->has('equipamentos.data', 1)
            ->where('equipamentos.data.0.id', $equipamento->id));
    }

    public function testPodePesquisarPelaMarca(): void
    {
        $equipamento = Equipamento::factory()->statusAprovado()->create();

        $response = $this->get('/pesquisa?pesquisa=' . $equipamento->modelo->marca->nome);

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Pesquisa')
            ->has('equipamentos.data', 1)
            ->where('equipamentos.data.0.id', $equipamento->id));
    }
}
