<?php

namespace App\Models\Equipamentos;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EquipamentoImagem extends Model
{
    use HasFactory;

    protected $table = 'equipamento_imagens';
    protected $fillable = [
        'descricao',
        'nome_arquivo',
        'equipamento_id'
    ];
    protected $appends = ['url'];

    public function url(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => asset(config("equipamentos.public_path_imagens") . $attributes['nome_arquivo'])
        );
    }

    public function equipamento()
    {
        return $this->belongsTo(Equipamento::class);
    }
}
