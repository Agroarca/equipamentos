<?php

namespace App\Models\Equipamentos\Conversas;

use App\Models\Equipamentos\Equipamento;
use App\Models\Usuario;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class EquipamentoConversa extends Model
{
    use HasFactory;

    protected $table = 'equipamento_conversas';

    protected $fillable = [
        'equipamento_id',
        'usuario_id',
    ];

    public function equipamento(): BelongsTo
    {
        return $this->belongsTo(Equipamento::class);
    }

    public function usuario(): BelongsTo
    {
        return $this->belongsTo(Usuario::class);
    }

    public function mensagens(): HasMany
    {
        return $this->hasMany(Mensagem::class);
    }

    public function visualizacao(): HasMany
    {
        return $this->hasMany(Visualizacao::class);
    }
}
