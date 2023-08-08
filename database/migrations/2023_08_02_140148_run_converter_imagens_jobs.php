<?php

use App\Jobs\Imagens\ConverterEquipamentoImagemJob;
use App\Jobs\Imagens\ConverterImagemBannerJob;
use App\Jobs\Imagens\ConverterImagemCarrosselJob;
use App\Jobs\Imagens\ConverterImagemGridJob;
use App\Models\Equipamentos\Cadastro\EquipamentoImagem;
use App\Models\Marketing\PaginaInicial\Banners\Banner;
use App\Models\Marketing\PaginaInicial\Carrossel\CarrosselItem;
use App\Models\Marketing\PaginaInicial\Grid\GridImagem;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up(): void
    {
        foreach (EquipamentoImagem::all() as $equipamentoImagem) {
            ConverterEquipamentoImagemJob::dispatch($equipamentoImagem);
        }

        foreach (Banner::all() as $banner) {
            ConverterImagemBannerJob::dispatch($banner);
        }

        foreach (GridImagem::all() as $gridImagem) {
            ConverterImagemGridJob::dispatch($gridImagem);
        }

        foreach (CarrosselItem::all() as $carrosselItem) {
            ConverterImagemCarrosselJob::dispatch($carrosselItem);
        }
    }

    public function down(): void
    {
        // Nada a fazer
    }
};
