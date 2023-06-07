<?php

// phpcs:disable SlevomatCodingStandard.Functions.UnusedParameter.UnusedParameter

namespace App\Models\Equipamentos\Cadastro;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;
use App\Services\Equipamentos\Cadastro\EquipamentoService;

class EquipamentoImagem extends Model
{
    use HasFactory;

    protected $table = 'equipamento_imagens';

    protected $fillable = [
        'nome_arquivo',
        'equipamento_id',
    ];

    protected $appends = ['url'];

    public function url(): Attribute
    {
        $equipService = app(EquipamentoService::class);
        return Attribute::make(
            get: fn ($value, $attributes) => Storage::url(
                $equipService->getStoragePathImagem($attributes['equipamento_id']) . $attributes['nome_arquivo']
            )
        );
    }

    public function equipamento(): BelongsTo
    {
        return $this->belongsTo(Equipamento::class);
    }
}
