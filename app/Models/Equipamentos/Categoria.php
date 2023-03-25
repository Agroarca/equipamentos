<?php

namespace App\Models\Equipamentos;

use App\Models\Caracteristicas\Caracteristica;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Categoria extends Model
{
    use HasFactory;

    protected $table = 'categorias';

    protected $fillable = [
        'nome',
        'categoria_mae_id',
    ];

    public function categoriaMae(): BelongsTo
    {
        return $this->belongsTo(self::class);
    }

    public function categorias(): HasMany
    {
        return $this->hasMany(self::class, 'categoria_mae_id');
    }

    public function equipamentos(): HasMany
    {
        return $this->hasMany(Equipamento::class);
    }

    public function caracteristicas(): HasMany
    {
        return $this->hasMany(Caracteristica::class);
    }
}
