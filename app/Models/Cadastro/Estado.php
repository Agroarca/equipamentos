<?php

namespace App\Models\Cadastro;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
    use HasFactory;

    protected $table = 'cadastro_estados';

    protected $fillable = [
        'id',
        'nome',
        'uf',
    ];
}
