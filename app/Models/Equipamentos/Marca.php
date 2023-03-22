<?php

namespace App\Models\Equipamentos;

use App\Enums\Cadastro\StatusCadastro;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Marca extends Model
{
    use HasFactory;

    protected $table = 'marcas';

    protected $fillable = ['nome', 'status'];

    public static function booted(): void
    {
        static::addGlobalScope('aprovado', function (Builder $builder) {
            $builder->where('status', StatusCadastro::Aprovado->value);
        });
    }

    public function modelos()
    {
        return $this->hasMany(Modelo::class);
    }
}
