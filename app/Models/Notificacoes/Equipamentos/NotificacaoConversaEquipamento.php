<?php

// phpcs:disable SlevomatCodingStandard.Functions.UnusedParameter.UnusedParameter

namespace App\Models\Notificacoes\Equipamentos;

use App\Models\Notificacoes\Notificacao;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class NotificacaoConversaEquipamento extends Model
{
    use HasFactory;

    protected $table = 'notificacao_conversa_equipamentos';

    protected $fillable = [
        'equipamento_id',
    ];

    protected $appends = [
        'url',
    ];

    public function url(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => route('site.conversa.equipamento', [$attributes['equipamento_id']])
        );
    }

    public function notificacao(): MorphOne
    {
        return $this->morphOne(Notificacao::class, 'tipo');
    }

    public function equipamento(): BelongsTo
    {
        return $this->belongsTo(Equipamento::class);
    }
}
