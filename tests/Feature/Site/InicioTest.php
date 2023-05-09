<?php

namespace Tests\Feature\Site;

use App\Enums\Marketing\PaginaInicial\StatusVersao;
use App\Models\Marketing\PaginaInicial\Banners\Banner;
use App\Models\Marketing\PaginaInicial\Grid\Grid;
use App\Models\Marketing\PaginaInicial\ListaProdutos\Lista;
use App\Models\Marketing\PaginaInicial\Versao;
use App\Services\Site\PaginaInicialService;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\Feature\Admin\Marketing\PaginaInicial\PaginaInicialTestBase;

class InicioTest extends PaginaInicialTestBase
{
    use RefreshDatabase;

    public function testPodeAcessarInicio(): void
    {
        $versao = $this->getVersaoCompleto();
        $versao->status = StatusVersao::Publicado;
        $versao->save();

        $response = $this->get('/');
        $response->assertStatus(200);
        $response->assertInertia(
            fn ($page) => $page
            ->component('Site/PaginaInicial/Inicio')
            ->has('versaoPaginaInicial')
            ->where('versaoPaginaInicial.id', $versao->id)
            ->has('versaoPaginaInicial.carrossel_itens', 2)
            ->has('versaoPaginaInicial.componentes', 3)
            ->where('versaoPaginaInicial.componentes.0.tipo_type', Banner::class)
            ->where('versaoPaginaInicial.componentes.1.tipo_type', Lista::class)
            ->where('versaoPaginaInicial.componentes.2.tipo_type', Grid::class)
            ->has('versaoPaginaInicial.componentes.2.tipo.imagens', 3)
        );
    }

    public function testPrioridadeVersao(): void
    {
        $paginaInicialService = app(PaginaInicialService::class);
        Versao::factory([
            'prioridade' => 1,
            'status' => StatusVersao::Publicado
        ])->create();

        $versao2 = Versao::factory([
            'prioridade' => 10,
            'status' => StatusVersao::Publicado
        ])->create();

        Versao::factory([
            'prioridade' => 5,
            'status' => StatusVersao::Publicado
        ])->create();

        $versaoAtual = $paginaInicialService->getVersaoAtual();
        $this->assertEquals($versao2->id, $versaoAtual->id);
    }

    public function testPrioridadeVersaoData(): void
    {
        $paginaInicialService = app(PaginaInicialService::class);
        Versao::factory([
            'prioridade' => 1,
            'status' => StatusVersao::Publicado
        ])->create();

        $versao2 = Versao::factory([
            'prioridade' => 10,
            'status' => StatusVersao::Publicado,
            'data_inicio' => Carbon::now()->subDays(10),
            'data_fim' => Carbon::now()->addDays(10),
        ])->create();

        Versao::factory([
            'prioridade' => 5,
            'status' => StatusVersao::Publicado
        ])->create();
        $versaoAtual = $paginaInicialService->getVersaoAtual();

        $this->assertEquals($versao2->id, $versaoAtual->id);
    }

    public function testPrioridadeVersaoDataPassada(): void
    {
        $paginaInicialService = app(PaginaInicialService::class);
        Versao::factory([
            'prioridade' => 1,
            'status' => StatusVersao::Publicado
        ])->create();

        Versao::factory([
            'prioridade' => 10,
            'status' => StatusVersao::Publicado,
            'data_inicio' => Carbon::now()->subDays(5),
            'data_fim' => Carbon::now()->subDays(1),
        ])->create();

        $versao3 = Versao::factory([
            'prioridade' => 5,
            'status' => StatusVersao::Publicado
        ])->create();

        $versaoAtual = $paginaInicialService->getVersaoAtual();
        $this->assertEquals($versao3->id, $versaoAtual->id);
    }

    public function testPrioridadeVersaoDataFutura(): void
    {
        $paginaInicialService = app(PaginaInicialService::class);
        Versao::factory([
            'prioridade' => 1,
            'status' => StatusVersao::Publicado
        ])->create();

        Versao::factory([
            'prioridade' => 10,
            'status' => StatusVersao::Publicado,
            'data_inicio' => Carbon::now()->addDays(1),
            'data_fim' => Carbon::now()->addDays(5),
        ])->create();

        $versao3 = Versao::factory([
            'prioridade' => 5,
            'status' => StatusVersao::Publicado
        ])->create();

        $versaoAtual = $paginaInicialService->getVersaoAtual();
        $this->assertEquals($versao3->id, $versaoAtual->id);
    }
}
