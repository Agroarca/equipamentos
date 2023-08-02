<?php

namespace App\Jobs\Imagens;

use App\Models\Marketing\PaginaInicial\Grid\GridImagem;
use App\Services\Imagens\ConverterImagensService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ConverterImagemGridJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        private GridImagem $gridImagem
    ) {
    }

    public function handle(): void
    {
        $converterImagensService = app(ConverterImagensService::class);
        $converterImagensService->converterGridImagem($this->gridImagem);
    }
}
