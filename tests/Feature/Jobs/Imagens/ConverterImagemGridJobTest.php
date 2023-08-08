<?php

namespace Tests\Feature\Jobs\Imagens;

use App\Jobs\Imagens\ConverterImagemGridJob;
use App\Models\Marketing\PaginaInicial\Grid\GridImagem;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use Tests\Feature\Admin\Marketing\PaginaInicial\PaginaInicialTestBase;
use Illuminate\Support\Str;

class ConverterImagemGridJobTest extends PaginaInicialTestBase
{
    use RefreshDatabase;

    public function testConverterImagemGridJob(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);
        $gridImagem = $this->criarGridImagemComImagem($grid);

        $nomeDeskOriginal = Str::of($gridImagem->nome_desktop);
        $nomeDesk = $nomeDeskOriginal->beforeLast('.');

        $job = new ConverterImagemGridJob($gridImagem);
        $job->handle();

        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $gridImagem->id,
            'nome_desktop_secundario' => "$nomeDesk.webp",
            'nome_mobile_secundario' => null,
        ]);

        Storage::assertExists(
            config('equipamentos.imagens.pagina_inicial') . "$nomeDesk.webp"
        );
    }

    public function testConverterImagemGridJobDeskEMobile(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $grid = $this->criarGrid($versao);
        $gridImagem = $this->criarGridImagemComImagemDeskEMobile($grid);

        $nomeDeskOriginal = Str::of($gridImagem->nome_desktop);
        $nomeDesk = $nomeDeskOriginal->beforeLast('.');

        $nomeMobOriginal = Str::of($gridImagem->nome_mobile);
        $nomeMob = $nomeMobOriginal->beforeLast('.');

        $job = new ConverterImagemGridJob($gridImagem);
        $job->handle();

        $this->assertDatabaseHas(app(GridImagem::class)->getTable(), [
            'id' => $gridImagem->id,
            'nome_desktop_secundario' => "$nomeDesk.webp",
            'nome_mobile_secundario' => "$nomeMob.webp",
        ]);

        Storage::assertExists(
            config('equipamentos.imagens.pagina_inicial') . "$nomeDesk.webp"
        );

        Storage::assertExists(
            config('equipamentos.imagens.pagina_inicial') . "$nomeMob.webp"
        );
    }
}
