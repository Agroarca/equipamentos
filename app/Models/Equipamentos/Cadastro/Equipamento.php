<?php

namespace App\Models\Equipamentos\Cadastro;

use App\Enums\Equipamentos\Cadastro\StatusEquipamento;
use App\Events\Equipamento\Cadastro\EquipamentoSaved;
use App\Models\Cadastro\Cidade;
use App\Models\Equipamentos\Caracteristicas\CaracteristicaEquipamento;
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
        'cidade_id',
    ];

    protected $casts = [
        'status' => StatusEquipamento::class,
    ];

    protected $dispatchesEvents = [
        'saved' => EquipamentoSaved::class,
    ];

    public function scopeAprovado(Builder $query): Builder
    {
        return $query->where('status', StatusEquipamento::Aprovado);
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

    public function cidade(): BelongsTo
    {
        return $this->belongsTo(Cidade::class);
    }
}
