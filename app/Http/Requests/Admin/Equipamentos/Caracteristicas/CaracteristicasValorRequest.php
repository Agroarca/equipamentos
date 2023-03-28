<?php

namespace App\Http\Requests\Admin\Equipamentos\Caracteristicas;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use App\Services\Equipamentos\EquipamentoCaracteristicaService;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\App;
use Illuminate\Validation\Rule;

class CaracteristicasValorRequest extends FormRequest
{
    private $caracteristicas = null;
    private $equipCaracService;

    public function authorize()
    {
        return true;
    }

    private function getEquipCaracService()
    {
        if (is_null($this->equipCaracService)) {
            $this->equipCaracService = App::make(EquipamentoCaracteristicaService::class);
        }

        return $this->equipCaracService;
    }

    public function getCaracteristicas()
    {
        if (is_null($this->caracteristicas)) {
            $equipamento = Equipamento::withoutGlobalScope('aprovado')->findOrFail($this->route('id'));
            $this->caracteristicas = $this->getEquipCaracService()
                ->getCaracteristicasCategoria($equipamento->categoria_id);
        }

        return $this->caracteristicas;
    }

    public function rules()
    {
        $rules = [];

        foreach ($this->getCaracteristicas() as $caracteristica) {
            $rules["carac-$caracteristica->id"] = $this->getRulesCaracteristica($caracteristica);
        }

        return $rules;
    }

    public function attributes()
    {
        $attributes = [];

        foreach ($this->getCaracteristicas() as $caracteristica) {
            $attributes["carac-$caracteristica->id"] = $caracteristica->nome;
        }

        return $attributes;
    }

    public function prepareForValidation()
    {
        foreach ($this->getCaracteristicas() as $caracteristica) {
            if ($caracteristica->tipo == TipoCaracteristica::Booleano->value) {
                $this->mergeIfMissing(["carac-$caracteristica->id" => false]);
            }
        }
    }

    private function getRulesCaracteristica(Caracteristica $caracteristica)
    {
        $rules = [];
        $rules[] = match ($caracteristica->tipo) {
            TipoCaracteristica::Booleano->value => 'boolean',
            TipoCaracteristica::Inteiro->value => 'integer',
            TipoCaracteristica::Decimal->value => 'numeric',
            TipoCaracteristica::TextoCurto->value => 'string',
            TipoCaracteristica::TextoLongo->value => 'string',
            TipoCaracteristica::Selecao->value => 'integer'
        };

        if ($caracteristica->obrigatorio) {
            $rules[] = 'required';
        } else {
            $rules[] = 'nullable';
        }

        if (!is_null($caracteristica->minimo)) {
            $rules[] = "min:{$caracteristica->minimo}";
        }

        if (!is_null($caracteristica->maximo)) {
            $rules[] = "max:{$caracteristica->maximo}";
        }

        if (!is_null($caracteristica->quantidade)) {
            $rules[] = "regex:/^\d*\.?\d{0,$caracteristica->quantidade}$/";
        }

        if ($caracteristica->tipo == TipoCaracteristica::Selecao->value) {
            $rules[] = Rule::exists('caracteristicas_opcoes', 'id')->where(function ($query) use ($caracteristica) {
                $query->where('caracteristica_id', $caracteristica->id);
            });
        }

        return $rules;
    }
}
