<?php

// phpcs:disable SlevomatCodingStandard.Functions.UnusedParameter.UnusedParameter

namespace App\Models\Marketing\PaginaInicial;

use App\Models\Marketing\PaginaInicial\Banners\Banner;
use App\Models\Marketing\PaginaInicial\Grid\Grid;
use App\Models\Marketing\PaginaInicial\ListaProdutos\Lista;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Componente extends Model
{
    use HasFactory;

    protected $table = 'pagina_inicial_componentes';

    protected $fillable = [
        'titulo',
        'subtitulo',
        'ordem',
        'tela_cheia',
        'tipo_id',
        'tipo_type',
        'versao_id',
    ];

    protected $appends = [
        'tipo_nome',
        'url',
    ];

    public function tipoNome(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => match ($attributes['tipo_type']) {
                Grid::class => 'Grade de imagens',
                Banner::class => 'Banner',
                Lista::class => 'Lista de Produtos',
            }
        );
    }

    public function url(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => match ($attributes['tipo_type']) {
                Grid::class => 'grid',
                Banner::class => 'banner',
                Lista::class => 'lista/produtos',
            }
        );
    }

    public function tipo(): MorphTo
    {
        return $this->morphTo();
    }

    public function versao(): BelongsTo
    {
        return $this->belongsTo(Versao::class);
    }
}
