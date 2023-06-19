<?php

// phpcs:disable SlevomatCodingStandard.Functions.UnusedParameter.UnusedParameter

namespace App\Models\Equipamentos\Cadastro;

use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use App\Services\Equipamentos\EquipamentoCaracteristicaService;
use Illuminate\Database\Eloquent\Casts\Attribute;
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
        'meta_description',
    ];

    public function temCaracteristicas(): Attribute
    {
        $equipCaracService = app(EquipamentoCaracteristicaService::class);

        return Attribute::make(
            get: fn ($value, $attributes) =>
            $equipCaracService->getCaracteristicasCategoria($attributes['id'])->count() > 0
        );
    }

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
