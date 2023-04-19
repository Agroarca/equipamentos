<?php

// phpcs:disable SlevomatCodingStandard.Functions.UnusedParameter.UnusedParameter

namespace App\Models\Marketing\PaginaInicial\Banners;

use App\Models\Marketing\PaginaInicial\Componente;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Banner extends Model
{
    use HasFactory;

    protected $table = 'pagina_inicial_banners';

    protected $fillable = [
        'link',
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
            get: fn ($value, $attributes) => asset(
                config('equipamentos.public_path_imagens') . $attributes['nome_mobile']
            )
        );
    }

    public function componente(): MorphOne
    {
        return $this->morphOne(Componente::class, 'tipo');
    }
}
