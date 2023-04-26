<?php

namespace App\Models\Equipamentos\Lista;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Lista extends Model
{
    use HasFactory;

    protected $table = 'listas';

    protected $fillable = [
        'nome',
        'slug',
    ];

    public function produtoLista(): HasMany
    {
        return $this->hasMany(ProdutoLista::class);
    }
}
