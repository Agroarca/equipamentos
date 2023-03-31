<?php

namespace App\Http\Requests\Admin\Equipamentos\Caracteristicas;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use App\Services\Equipamentos\EquipamentoCaracteristicaService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\App;
use Illuminate\Validation\Rule;

class CaracteristicasValorRequest extends FormRequest
{
    private ?Collection $caracteristicas = null;

    private ?EquipamentoCaracteristicaService $equipCaracService = null;

    public function authorize(): bool
    {
        return true;
    }

    private function getEquipCaracService(): EquipamentoCaracteristicaService
    {
        if (!$this->equipCaracService) {
            $this->equipCaracService = App::make(EquipamentoCaracteristicaService::class);
        }

        return $this->equipCaracService;
    }

    public function getCaracteristicas(): Collection
    {
        if (!$this->caracteristicas) {
            $equipamento = Equipamento::findOrFail($this->route('id'));

            $this->caracteristicas = $this
                ->getEquipCaracService()
                ->getCaracteristicasCategoria($equipamento->categoria_id);
        }

        return $this->caracteristicas;
    }

    public function rules(): array
    {
        $rules = [];

        foreach ($this->getCaracteristicas() as $caracteristica) {
            $rules["carac-$caracteristica->id"] = $this->getRulesCaracteristica($caracteristica);
        }

        return $rules;
    }

    public function attributes(): array
    {
        $attributes = [];

        foreach ($this->getCaracteristicas() as $caracteristica) {
            $attributes["carac-$caracteristica->id"] = $caracteristica->nome;
        }

        return $attributes;
    }

    public function prepareForValidation(): void
    {
        foreach ($this->getCaracteristicas() as $caracteristica) {
            if ($caracteristica->tipo == TipoCaracteristica::Booleano) {
                $this->mergeIfMissing(["carac-$caracteristica->id" => false]);
            }
        }
    }

    private function getRulesCaracteristica(Caracteristica $caracteristica): array
    {
        $rules = [];
        $rules[] = match ($caracteristica->tipo) {
            TipoCaracteristica::Booleano => 'boolean',
            TipoCaracteristica::Inteiro => 'integer',
            TipoCaracteristica::Decimal => 'numeric',
            TipoCaracteristica::TextoCurto => 'string',
            TipoCaracteristica::TextoLongo => 'string',
            TipoCaracteristica::Selecao => 'integer'
        };

        if ($caracteristica->obrigatorio) {
            $rules[] = 'required';
        } else {
            $rules[] = 'nullable';
        }

        if ($caracteristica->minimo !== null) {
            $rules[] = "min:{$caracteristica->minimo}";
        }

        if ($caracteristica->maximo !== null) {
            $rules[] = "max:{$caracteristica->maximo}";
        }

        if ($caracteristica->quantidade !== null) {
            $rules[] = "regex:/^\d*\.?\d{0,$caracteristica->quantidade}$/";
        }

        if ($caracteristica->tipo == TipoCaracteristica::Selecao) {
            $rules[] = Rule::exists('caracteristicas_opcoes', 'id')
                ->where(function ($query) use ($caracteristica): void {
                    $query->where('caracteristica_id', $caracteristica->id);
                });
        }

        return $rules;
    }
}
