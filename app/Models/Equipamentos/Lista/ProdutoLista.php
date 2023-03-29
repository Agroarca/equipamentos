<?php

namespace App\Models\Equipamentos\Lista;

use App\Models\Equipamentos\Cadastro\Equipamento;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProdutoLista extends Model
{
    use HasFactory;

    protected $table = 'lista_produtos';

    protected $fillable = [
        'equipamento_id',
        'lista_id',
    ];

    public function lista(): BelongsTo
    {
        return $this->belongsTo(Lista::class);
    }

    public function equipamento(): BelongsTo
    {
        return $this->belongsTo(Equipamento::class);
    }
}
