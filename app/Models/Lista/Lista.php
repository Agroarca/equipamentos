<?php

namespace App\Models\Lista;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Lista extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'listas';

    protected $fillable = [
        'nome',
        'slug',
    ];

    public function produtoLista()
    {
        return $this->hasMany(ProdutoLista::class);
    }
}
