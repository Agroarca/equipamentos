<?php

namespace App\Models\Marketing\PaginaInicial\Menu;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Marketing\PaginaInicial\Versao;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MenuLink extends Model
{
    use HasFactory;

    protected $table = 'marketing_menu_links';

    protected $fillable = [
        'nome',
        'link',
        'ordem',
        'versao_id',
    ];

    public function versao(): BelongsTo
    {
        return $this->belongsTo(Versao::class, 'versao_id');
    }
}
