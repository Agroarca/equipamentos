<?php

namespace App\Models\Equipamentos\Cadastro;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MarcaCategoria extends Model
{
    use HasFactory;

    protected $table = 'equipamentos_marca_categorias';

    protected $fillable = [
        'marca_id',
        'categoria_id',
    ];

    public function marca(): BelongsTo
    {
        return $this->belongsTo(Marca::class, 'marca_id');
    }

    public function categoria(): BelongsTo
    {
        return $this->belongsTo(Categoria::class, 'categoria_id');
    }
}
