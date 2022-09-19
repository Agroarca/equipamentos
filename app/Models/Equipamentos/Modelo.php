<?php

namespace App\Models\Equipamentos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Modelo extends Model
{
    use HasFactory;

    protected $table = 'modelos';
    protected $fillable = ['nome', 'marca_id'];

    public function marca(){
        return $this->belongsTo(Marca::class);
    }

    public function equipamentos(){
        return $this->hasMany(Equipamento::class);
    }
}
