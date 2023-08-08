<?php

namespace App\Jobs\Imagens;

use App\Models\Marketing\PaginaInicial\Banners\Banner;
use App\Services\Imagens\ConverterImagensService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ConverterImagemBannerJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        private Banner $banner
    ) {
    }

    public function handle(): void
    {
        $converterImagensService = app(ConverterImagensService::class);
        $converterImagensService->converterBanner($this->banner);
    }
}
