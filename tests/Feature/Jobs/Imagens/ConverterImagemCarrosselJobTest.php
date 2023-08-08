<?php

namespace Tests\Feature\Jobs\Imagens;

use App\Jobs\Imagens\ConverterImagemCarrosselJob;
use App\Models\Marketing\PaginaInicial\Carrossel\CarrosselItem;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Tests\Feature\Admin\Marketing\PaginaInicial\PaginaInicialTestBase;

class ConverterImagemCarrosselJobTest extends PaginaInicialTestBase
{
    use RefreshDatabase;

    public function testConverterImagemCarrosselJob(): void
    {
        Storage::fake();
        $versao = $this->getVersaoBase();
        $carrosselItem = $this->criarCarrosselItemComImagens($versao);

        $nomeDeskOriginal = Str::of($carrosselItem->nome_arquivo_desktop);
        $nomeDesk = $nomeDeskOriginal->beforeLast('.');

        $nomeMobOriginal = Str::of($carrosselItem->nome_arquivo_mobile);
        $nomeMob = $nomeMobOriginal->beforeLast('.');

        $job = new ConverterImagemCarrosselJob($carrosselItem);
        $job->handle();

        $this->assertDatabaseHas(app(CarrosselItem::class)->getTable(), [
            'id' => $carrosselItem->id,
            'nome_arquivo_desktop_secundario' => "$nomeDesk.webp",
            'nome_arquivo_mobile_secundario' => "$nomeMob.webp",
        ]);

        Storage::assertExists(
            config('equipamentos.imagens.pagina_inicial') . "$nomeDesk.webp"
        );

        Storage::assertExists(
            config('equipamentos.imagens.pagina_inicial') . "$nomeMob.webp"
        );
    }
}
