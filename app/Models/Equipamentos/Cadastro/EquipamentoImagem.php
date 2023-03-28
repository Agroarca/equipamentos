<?php

// phpcs:disable SlevomatCodingStandard.Functions.UnusedParameter.UnusedParameter

namespace App\Models\Equipamentos\Cadastro;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EquipamentoImagem extends Model
{
    use HasFactory;

    protected $table = 'equipamento_imagens';

    protected $fillable = [
        'descricao',
        'nome_arquivo',
        'equipamento_id',
    ];

    protected $appends = ['url'];

    public function url(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => asset(
                config('equipamentos.public_path_imagens') . $attributes['nome_arquivo']
            )
        );
    }

    public function equipamento(): BelongsTo
    {
        return $this->belongsTo(Equipamento::class);
    }
}