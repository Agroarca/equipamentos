<?php

namespace App\Models\Equipamentos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marca extends Model
{
    use HasFactory;

    protected $table = 'marcas';
    protected $fillable = ['nome'];

    public function modelos(){
        return $this->hasMany(Modelo::class)
    }
}
