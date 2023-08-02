<?php

// phpcs:disable SlevomatCodingStandard.Functions.UnusedParameter.UnusedParameter

namespace App\Models\Marketing\PaginaInicial\Grid;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class GridImagem extends Model
{
    use HasFactory;

    protected $table = 'pagina_inicial_grid_imagens';

    protected $fillable = [
        'link',
        'ordem',
        'descricao',
        'nome_desktop',
        'nome_mobile',
        'nome_desktop_secundario',
        'nome_mobile_secundario',
        'grid_id',
    ];

    protected $appends = [
        'url_desktop',
        'url_mobile',
        'url_desktop_secundario',
        'url_mobile_secundario',
    ];

    private function getImagemUrl($nomeArquivo): string
    {
        if ($nomeArquivo === null) {
            return null;
        }

        return Storage::url(
            config('equipamentos.imagens.pagina_inicial') . $nomeArquivo
        );
    }

    public function urlDesktop(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => $this->getImagemUrl($attributes['nome_desktop'])
        );
    }

    public function urlMobile(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => $this->getImagemUrl($attributes['nome_mobile'])
        );
    }

    public function urlDesktopSecundario(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => $this->getImagemUrl($attributes['nome_desktop_secundario'])
        );
    }

    public function urlMobileSecundario(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => $this->getImagemUrl($attributes['nome_mobile_secundario'])
        );
    }
}
