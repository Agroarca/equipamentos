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
        'nome_arquivo_secundario',
        'equipamento_id',
    ];

    protected $appends = [
        'url',
        'url_secundaria',
    ];

    public function url(): Attribute
    {
        $equipService = app(EquipamentoService::class);
        return Attribute::make(
            get: fn ($value, $attributes) => Storage::url(
                $equipService->getStoragePathImagem($attributes['equipamento_id']) . $attributes['nome_arquivo']
            )
        );
    }

    public function urlSecundaria(): Attribute
    {
        $equipService = app(EquipamentoService::class);
        return Attribute::make(
            get: function ($value, $attributes) use ($equipService) {
                if (!array_key_exists('nome_arquivo_secundario', $attributes)) {
                    return null;
                }

                $path = $equipService->getStoragePathImagem($attributes['equipamento_id']);
                $nome = $attributes['nome_arquivo_secundario'];
                return "$path$nome";
            }
        );
    }

    public function equipamento(): BelongsTo
    {
        return $this->belongsTo(Equipamento::class);
    }
}
