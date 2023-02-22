<?php

namespace App\Models\Caracteristicas\Valor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CaracteristicaOpcao extends Model
{
    use HasFactory;

    protected $table = 'caracteristicas_opcoes';

    protected $fillable = ['nome', 'caracteristica_id'];

    public function caracteristica()
    {
        return $this->belongsTo(Caracteristica::class);
    }
}
