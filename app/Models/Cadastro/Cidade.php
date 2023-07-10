<?php

namespace App\Models\Cadastro;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Cidade extends Model
{
    use HasFactory;

    protected $table = 'cadastro_cidades';

    protected $fillable = [
        'id',
        'nome',
        'estado_id',
    ];

    protected $appends = [
        'display_name',
    ];

    protected $with = [
        'estado',
    ];

    public function displayName(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => $this->nome . '/' . $this->estado->uf
        );
    }

    public function estado(): BelongsTo
    {
        return $this->belongsTo(Estado::class);
    }
}
