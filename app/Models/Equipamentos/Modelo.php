<?php

namespace App\Models\Equipamentos;

use App\Enums\Cadastro\StatusCadastro;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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

    public function marca()
    {
        return $this->belongsTo(Marca::class);
    }

    public function equipamentos()
    {
        return $this->hasMany(Equipamento::class);
    }
}
