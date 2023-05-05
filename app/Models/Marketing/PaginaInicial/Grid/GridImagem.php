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
        'grid_id',
    ];

    protected $appends = [
        'url_desktop',
        'url_mobile',
    ];

    public function urlDesktop(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => Storage::url(
                config('equipamentos.imagens.pagina_inicial') . $attributes['nome_desktop']
            )
        );
    }

    public function urlMobile(): Attribute
    {
        return Attribute::make(
            get: function ($value, $attributes) {
                if ($attributes['nome_mobile'] === null) {
                    return null;
                }

                return Storage::url(
                    config('equipamentos.imagens.pagina_inicial') . $attributes['nome_mobile']
                );
            }
        );
    }
}
