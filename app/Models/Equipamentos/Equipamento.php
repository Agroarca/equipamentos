<?php

namespace App\Models\Equipamentos;

use App\Enums\Cadastro\StatusEquipamento;
use App\Models\Caracteristicas\CaracteristicaEquipamento;
use App\Models\Equipamentos\Conversas\EquipamentoConversa;
use App\Models\Usuario;
use Illuminate\Database\Eloquent\Builder;
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
        'descricao',
        'modelo_id',
        'categoria_id',
        'usuario_id',
        'status',
        'passo_cadastro',
        'motivo_reprovado'
    ];

    public function scopeAprovado(Builder $query): Builder
    {
        return $query->where('status', StatusEquipamento::Aprovado->value);
    }

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

    public function conversas()
    {
        return $this->hasMany(EquipamentoConversa::class);
    }

    public function usuario()
    {
        return $this->belongsTo(Usuario::class);
    }
}
