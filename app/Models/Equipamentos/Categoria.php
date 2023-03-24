<?php

namespace App\Models\Equipamentos;

use App\Models\Caracteristicas\Caracteristica;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;

    protected $table = 'categorias';

    protected $fillable = [
        'nome',
        'categoria_mae_id',
    ];

    public function categoriaMae()
    {
        return $this->belongsTo(self::class);
    }

    public function categorias()
    {
        return $this->hasMany(self::class, 'categoria_mae_id');
    }

    public function equipamentos()
    {
        return $this->hasMany(Equipamento::class);
    }

    public function caracteristicas()
    {
        return $this->hasMany(Caracteristica::class);
    }
}
