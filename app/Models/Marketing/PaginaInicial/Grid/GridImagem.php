<?php

namespace App\Models\Marketing\PaginaInicial\Grid;

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
}
