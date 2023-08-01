<?php

namespace App\Services\Imagens;

use App\Models\Equipamentos\Cadastro\EquipamentoImagem;
use App\Services\Equipamentos\Cadastro\EquipamentoService;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Str;

/**
 * Classe responsável por converter formatos de imagens
 */
class ConverterImagensService
{
    /**
     * Converte a imagem de Equipamento Imagem para webp
     */
    public function converterEquipamentoImagem(EquipamentoImagem $imagem): void
    {
        $equipService = app(EquipamentoService::class);
        $path = $equipService->getStoragePathImagem($imagem->equipamento_id);

        $nomeOriginal = Str::of($imagem->nome_arquivo);
        $nome = $nomeOriginal->beforeLast('.');
        $extOriginal = $nomeOriginal->afterLast('.');

        $this->converterImagensParaWebp($path, $nome, $extOriginal, 'webp');

        $imagem->nome_arquivo_secundario = "$nome.webp";
        $imagem->save();
    }

    /**
     * Converte uma imagem para webp
     */
    public function converterImagensParaWebp($path, $nome, $extOriginal, $novaExt): void
    {
        $imagem = Storage::get("$path$nome.$extOriginal");
        $data = Image::make($imagem)
            ->encode($novaExt);

        Storage::put("$path$nome.$novaExt", $data);
    }
}
