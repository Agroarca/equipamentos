<?php

namespace App\Services\Imagens;

use App\Models\Equipamentos\Cadastro\EquipamentoImagem;
use App\Models\Marketing\PaginaInicial\Banners\Banner;
use App\Models\Marketing\PaginaInicial\Carrossel\CarrosselItem;
use App\Models\Marketing\PaginaInicial\Grid\GridImagem;
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
     * Converte uma imagem para webp
     */
    public function converterImagensParaWebp($path, $nome, $extOriginal, $novaExt): void
    {
        $imagem = Storage::get("$path$nome.$extOriginal");
        $data = Image::make($imagem)
            ->encode($novaExt);

        Storage::put("$path$nome.$novaExt", $data);
    }

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
     * Converte as imagens de um banner para webp
     */
    public function converterBanner(Banner $banner): void
    {
        $path = config('equipamentos.imagens.pagina_inicial');
        $nomeOriginal = Str::of($banner->nome_desktop);
        $nome = $nomeOriginal->beforeLast('.');
        $extOriginal = $nomeOriginal->afterLast('.');

        $this->converterImagensParaWebp($path, $nome, $extOriginal, 'webp');

        $banner->nome_desktop_secundario = "$nome.webp";
        $banner->save();

        if ($banner->nome_mobile === null) {
            return;
        }

        $nomeOriginal = Str::of($banner->nome_mobile);
        $nome = $nomeOriginal->beforeLast('.');
        $extOriginal = $nomeOriginal->afterLast('.');

        $this->converterImagensParaWebp($path, $nome, $extOriginal, 'webp');

        $banner->nome_mobile_secundario = "$nome.webp";
        $banner->save();
    }

    /**
     * Converte as imagens de um carrossel para webp
     */
    public function converterCarrossel(CarrosselItem $carrosselItem): void
    {
        $path = config('equipamentos.imagens.pagina_inicial');
        $nomeOriginal = Str::of($carrosselItem->nome_arquivo_desktop);
        $nome = $nomeOriginal->beforeLast('.');
        $extOriginal = $nomeOriginal->afterLast('.');

        $this->converterImagensParaWebp($path, $nome, $extOriginal, 'webp');

        $carrosselItem->nome_arquivo_desktop_secundario = "$nome.webp";
        $carrosselItem->save();

        $nomeOriginal = Str::of($carrosselItem->nome_arquivo_mobile);
        $nome = $nomeOriginal->beforeLast('.');
        $extOriginal = $nomeOriginal->afterLast('.');

        $this->converterImagensParaWebp($path, $nome, $extOriginal, 'webp');

        $carrosselItem->nome_arquivo_mobile_secundario = "$nome.webp";
        $carrosselItem->save();
    }

    /**
     * Converte as imagens de um grid para webp
     */
    public function converterGridImagem(GridImagem $gridImagem): void
    {
        $path = config('equipamentos.imagens.pagina_inicial');
        $nomeOriginal = Str::of($gridImagem->nome_desktop);
        $nome = $nomeOriginal->beforeLast('.');
        $extOriginal = $nomeOriginal->afterLast('.');

        $this->converterImagensParaWebp($path, $nome, $extOriginal, 'webp');

        $gridImagem->nome_desktop_secundario = "$nome.webp";
        $gridImagem->save();

        if ($gridImagem->nome_mobile === null) {
            return;
        }

        $nomeOriginal = Str::of($gridImagem->nome_mobile);
        $nome = $nomeOriginal->beforeLast('.');
        $extOriginal = $nomeOriginal->afterLast('.');

        $this->converterImagensParaWebp($path, $nome, $extOriginal, 'webp');

        $gridImagem->nome_mobile_secundario = "$nome.webp";
        $gridImagem->save();
    }
}
