<?php

namespace App\Jobs\Imagens;

use App\Models\Equipamentos\Cadastro\EquipamentoImagem;
use App\Services\Imagens\ConverterImagensService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ConverterEquipamentoImagemJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        private EquipamentoImagem $imagem
    ) {
    }

    public function handle(): void
    {
        $converterImagensService = app(ConverterImagensService::class);
        $converterImagensService->converterEquipamentoImagem($this->imagem);
    }
}
