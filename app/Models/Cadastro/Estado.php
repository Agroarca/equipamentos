<?php

namespace App\Models\Cadastro;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Estado extends Model
{
    use HasFactory;

    protected $table = 'cadastro_estados';

    protected $fillable = [
        'id',
        'nome',
        'uf',
    ];

    public function cidades(): HasMany
    {
        return $this->hasMany(Cidade::class);
    }
}
