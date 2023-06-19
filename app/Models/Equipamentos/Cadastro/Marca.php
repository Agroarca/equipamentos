<?php

namespace App\Models\Equipamentos\Cadastro;

use App\Enums\Equipamentos\Cadastro\StatusCadastro;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Marca extends Model
{
    use HasFactory;

    protected $table = 'marcas';

    protected $fillable = [
        'nome',
        'status',
        'meta_description',
    ];

    protected $casts = [
        'status' => StatusCadastro::class,
    ];

    public function scopeAprovado(Builder $query): Builder
    {
        return $query->where('status', StatusCadastro::Aprovado);
    }

    public function modelos(): HasMany
    {
        return $this->hasMany(Modelo::class);
    }
}
