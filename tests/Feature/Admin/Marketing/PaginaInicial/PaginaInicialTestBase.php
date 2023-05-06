<?php

namespace Tests\Feature\Admin\Marketing\PaginaInicial;

use App\Models\Marketing\PaginaInicial\Banners\Banner;
use App\Models\Marketing\PaginaInicial\Carrossel\CarrosselItem;
use App\Models\Marketing\PaginaInicial\Componente;
use App\Models\Marketing\PaginaInicial\Grid\Grid;
use App\Models\Marketing\PaginaInicial\Grid\GridImagem;
use App\Models\Marketing\PaginaInicial\ListaProdutos\Lista;
use App\Models\Marketing\PaginaInicial\Versao;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Tests\TestCase;

class PaginaInicialTestBase extends TestCase
{
    protected function getVersaoCompleto(): Versao
    {
        $versao = Versao::factory()->create();
        $this->criarCarrosselItem($versao, 2);
        $this->criarBanner($versao);
        $this->criarLista($versao);
        $grid = $this->criarGrid($versao);
        $this->criarGridImagem($grid, 3);

        return $versao;
    }

    protected function getVersaoBase(): Versao
    {
        return Versao::factory()->create();
    }

    protected function criarCarrosselItem(Versao $versao, ?int $quantidade = 1): Collection
    {
        return CarrosselItem::factory()->count($quantidade)->create([
            'versao_id' => $versao->id,
        ]);
    }

    protected function criarBanner(Versao $versao): Banner
    {
        $banner = Banner::factory()->create();
        $componente = new Componente([
            'versao_id' => $versao->id,
            'tela_cheia' => false,
            'ordem' => 0,
        ]);

        $componente->tipo()->associate($banner);
        $componente->save();

        return $banner;
    }

    protected function criarLista(Versao $versao): Lista
    {
        $lista = Lista::factory()->create();
        $componente = new Componente([
            'versao_id' => $versao->id,
            'tela_cheia' => false,
            'ordem' => 0,
        ]);

        $componente->tipo()->associate($lista);
        $componente->save();

        return $lista;
    }

    protected function criarGrid(Versao $versao): Grid
    {
        $grid = Grid::factory()->create();
        $componente = new Componente([
            'versao_id' => $versao->id,
            'tela_cheia' => false,
            'ordem' => 0,
        ]);

        $componente->tipo()->associate($grid);
        $componente->save();

        return $grid;
    }

    protected function criarGridImagem(Grid $grid, ?int $quantidade = 1): Collection
    {
        return GridImagem::factory()->count($quantidade)->create([
            'grid_id' => $grid->id,
        ]);
    }

    protected function criarBannerComImagem(Versao $versao): Banner
    {
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 500, 500);
        $imagemDesktop->store(config('equipamentos.imagens.pagina_inicial'));

        $banner = Banner::factory()->create([
            'nome_desktop' => $imagemDesktop->hashName(),
            'link' => Str::random(10),
            'descricao' => Str::random(10),
        ]);
        $componente = new Componente([
            'versao_id' => $versao->id,
            'tela_cheia' => false,
            'ordem' => 0,
        ]);

        $componente->tipo()->associate($banner);
        $componente->save();

        return $banner;
    }

    protected function criarCarrosselItemComImagens(Versao $versao): CarrosselItem
    {
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 500, 500);
        $imagemDesktop->store(config('equipamentos.imagens.pagina_inicial'));

        $imagemMobile = UploadedFile::fake()->image('imagem.png', 500, 500);
        $imagemMobile->store(config('equipamentos.imagens.pagina_inicial'));

        return CarrosselItem::factory()->create([
            'versao_id' => $versao->id,
            'nome_arquivo_desktop' => $imagemDesktop->hashName(),
            'nome_arquivo_mobile' => $imagemMobile->hashName(),
        ]);
    }

    protected function criarGridImagemComImagem(Grid $grid): GridImagem
    {
        $imagemDesktop = UploadedFile::fake()->image('imagem.png', 500, 500);
        $imagemDesktop->store(config('equipamentos.imagens.pagina_inicial'));

        return GridImagem::factory()->create([
            'grid_id' => $grid->id,
            'nome_desktop' => $imagemDesktop->hashName(),
        ]);
    }
}
