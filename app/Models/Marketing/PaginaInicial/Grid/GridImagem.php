<?php

// phpcs:disable SlevomatCodingStandard.Functions.UnusedParameter.UnusedParameter

namespace App\Models\Marketing\PaginaInicial\Grid;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
    ];

    protected $appends = [
        'url_desktop',
        'url_mobile',
    ];

    public function urlDesktop(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => asset(
                config('equipamentos.public_path_imagens') . $attributes['nome_desktop']
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

                return asset(
                    config('equipamentos.public_path_imagens') . $attributes['nome_mobile']
                );
            }
        );
    }
}
