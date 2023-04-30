<?php

// phpcs:disable SlevomatCodingStandard.Functions.UnusedParameter.UnusedParameter

namespace App\Models\Marketing\PaginaInicial\Carrossel;

use App\Models\Marketing\PaginaInicial\Versao;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;

class CarrosselItem extends Model
{
    use HasFactory;

    protected $table = 'pagina_inicial_carrossel_item';

    protected $fillable = [
        'ordem',
        'link',
        'descricao',
        'nome_arquivo_desktop',
        'nome_arquivo_mobile',
        'versao_id',
    ];

    protected $appends = [
        'url_desktop',
        'url_mobile',
    ];

    public function urlDesktop(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => Storage::url(
                config('equipamentos.imagens.pagina_inicial') . $attributes['nome_arquivo_desktop']
            )
        );
    }

    public function urlMobile(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => Storage::url(
                config('equipamentos.imagens.pagina_inicial') . $attributes['nome_arquivo_mobile']
            )
        );
    }

    public function versao(): BelongsTo
    {
        return $this->belongsTo(Versao::class);
    }
}
