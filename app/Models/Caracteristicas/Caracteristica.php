<?php

namespace App\Models\Caracteristicas;

use App\Models\Equipamentos\Categoria;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Caracteristica extends Model
{
    use HasFactory;

    protected $table = 'caracteristicas';
    protected $fillable = [
        'nome',
        'tipo', //Enum TipoCaracteristica
        'ordem',
        'obrigatorio',
        'minimo',
        'maximo',
        'quantidade', //Casas decimais, Opções
        'modelo', // se radio ou lista suspensa
        'categoria_id',
    ];

    public function categoria(){
        return $this->belongsTo(Categoria::class);
    }

    public function opcoes(){
        return $this->hasMany(CaracteristicaOpcao::class);
    }
}
