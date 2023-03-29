<?php

namespace App\Models\Equipamentos\Cadastro;

use App\Enums\Cadastro\StatusCadastro;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Modelo extends Model
{
    use HasFactory;

    protected $table = 'modelos';

    protected $fillable = [
        'nome',
        'marca_id',
        'status',
    ];

    public function scopeAprovado(Builder $query): Builder
    {
        return $query->where('status', StatusCadastro::Aprovado->value);
    }

    public function marca(): BelongsTo
    {
        return $this->belongsTo(Marca::class);
    }

    public function equipamentos(): HasMany
    {
        return $this->hasMany(Equipamento::class);
    }
}
