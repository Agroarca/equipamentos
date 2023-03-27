<?php

namespace App\Models\Equipamentos;

use App\Enums\Cadastro\StatusEquipamento;
use App\Models\Caracteristicas\CaracteristicaEquipamento;
use App\Models\Equipamentos\Conversas\EquipamentoConversa;
use App\Models\Usuario;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Equipamento extends Model
{
    use HasFactory;

    protected $table = 'equipamentos';

    protected $fillable = [
        'titulo',
        'valor',
        'ano',
        'descricao',
        'modelo_id',
        'categoria_id',
        'usuario_id',
        'status',
        'passo_cadastro',
        'motivo_reprovado',
    ];

    public function scopeAprovado(Builder $query): Builder
    {
        return $query->where('status', StatusEquipamento::Aprovado->value);
    }

    public function modelo(): BelongsTo
    {
        return $this->belongsTo(Modelo::class);
    }

    public function categoria(): BelongsTo
    {
        return $this->belongsTo(Categoria::class);
    }

    public function caracteristicas(): HasMany
    {
        return $this->hasMany(CaracteristicaEquipamento::class);
    }

    public function imagens(): HasMany
    {
        return $this->hasMany(EquipamentoImagem::class);
    }

    public function conversas(): HasMany
    {
        return $this->hasMany(EquipamentoConversa::class);
    }

    public function usuario(): BelongsTo
    {
        return $this->belongsTo(Usuario::class);
    }
}
