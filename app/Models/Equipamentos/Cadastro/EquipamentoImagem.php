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
        'url_secundario',
    ];

    private function getImagemUrl($equipamentoId, $nomeArquivo): ?string
    {
        if ($nomeArquivo === null) {
            return null;
        }

        $equipService = app(EquipamentoService::class);
        return Storage::url(
            $equipService->getStoragePathImagem($equipamentoId) . $nomeArquivo
        );
    }

    public function url(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) =>
            $this->getImagemUrl($attributes['equipamento_id'], $attributes['nome_arquivo'])
        );
    }

    public function urlSecundario(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) =>
            $this->getImagemUrl($attributes['equipamento_id'], $attributes['nome_arquivo_secundario'])
        );
    }

    public function equipamento(): BelongsTo
    {
        return $this->belongsTo(Equipamento::class);
    }
}
