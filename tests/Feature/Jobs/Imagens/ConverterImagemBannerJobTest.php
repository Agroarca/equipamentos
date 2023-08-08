<?php

namespace Tests\Feature\Jobs\Imagens;

use App\Jobs\Imagens\ConverterImagemBannerJob;
use App\Models\Marketing\PaginaInicial\Banners\Banner;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use Tests\Feature\Admin\Marketing\PaginaInicial\PaginaInicialTestBase;
use Illuminate\Support\Str;

class ConverterImagemBannerJobTest extends PaginaInicialTestBase
{
    use RefreshDatabase;

    public function testConverterImagemBannerJob(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $banner = $this->criarBannerComImagem($versao);

        $nomeOriginal = Str::of($banner->nome_desktop);
        $nome = $nomeOriginal->beforeLast('.');

        $job = new ConverterImagemBannerJob($banner);
        $job->handle();

        $this->assertDatabaseHas(app(Banner::class)->getTable(), [
            'id' => $banner->id,
            'nome_desktop_secundario' => "$nome.webp",
            'nome_mobile_secundario' => null,
        ]);

        Storage::assertExists(
            config('equipamentos.imagens.pagina_inicial') . "$nome.webp"
        );
    }

    public function testConverterImagemBannerJobDeskEMobile(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $banner = $this->criarBannerComImagemDeskEMobile($versao);

        $nomeDeskOriginal = Str::of($banner->nome_desktop);
        $nomeDesk = $nomeDeskOriginal->beforeLast('.');

        $nomeMobOriginal = Str::of($banner->nome_mobile);
        $nomeMob = $nomeMobOriginal->beforeLast('.');

        $job = new ConverterImagemBannerJob($banner);
        $job->handle();

        $this->assertDatabaseHas(app(Banner::class)->getTable(), [
            'id' => $banner->id,
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
