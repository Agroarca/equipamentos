<?php

namespace App\Models\Lista;

use App\Models\Equipamentos\Equipamento;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProdutoLista extends Model
{
    use HasFactory;

    protected $table = 'lista_produtos';

    protected $fillable = [
        'equipamento_id',
        'lista_id'
    ];

    public function lista()
    {
        return $this->belongsTo(Lista::class);
    }

    public function equipamento()
    {
        return $this->belongsTo(Equipamento::class);
    }
}
