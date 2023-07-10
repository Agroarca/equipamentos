<?php

namespace App\Models\Cadastro;

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

    public function estado(): BelongsTo
    {
        return $this->belongsTo(Estado::class);
    }
}
