<?php

namespace App\Models\Marketing\PaginaInicial\Banners;

use App\Models\Marketing\PaginaInicial\Componente;
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

    public function componente(): MorphOne
    {
        return $this->morphOne(Componente::class, 'tipo');
    }
}
