<?php

namespace App\Models\Equipamentos;

use App\Models\Caracteristicas\CaracteristicaEquipamento;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Equipamento extends Model
{
    use HasFactory;

    protected $table = 'equipamentos';
    protected $fillable = [
        'titulo',
        'valor',
        'ano',
        'modelo_id',
        'categoria_id',
    ];

    public function modelo()
    {
        return $this->belongsTo(Modelo::class);
    }

    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }

    public function caracteristicas()
    {
        return $this->hasMany(CaracteristicaEquipamento::class);
    }

    public function imagens()
    {
        return $this->hasMany(EquipamentoImagem::class);
    }
}
