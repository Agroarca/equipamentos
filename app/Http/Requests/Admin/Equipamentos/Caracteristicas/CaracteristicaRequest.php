<?php

namespace App\Http\Requests\Admin\Equipamentos\Caracteristicas;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CaracteristicaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'nome' => 'string|required|min:3|max:50',
            'tipo' => [
                'integer',
                'required',
                Rule::in(TipoCaracteristica::values()),
            ],
            'obrigatorio' => 'boolean|required',
            'minimo' => [
                'integer',
                'nullable',
                Rule::prohibitedIf(fn () => !$this->mostrarTamanhos(request()->tipo)),
            ],
            'maximo' => [
                'integer',
                'nullable',
                'gt:minimo',
                Rule::prohibitedIf(fn () => !$this->mostrarTamanhos(request()->tipo)),
            ],
            'quantidade' => [
                'integer',
                'nullable',
                Rule::prohibitedIf(fn () => request()->tipo != TipoCaracteristica::Decimal->value),
            ],
        ];
    }

    public function attributes(): array
    {
        return [
            'nome' => 'Nome',
            'tipo' => 'Tipo',
            'obrigatorio' => 'Obrigatório',
            'minimo' => 'Mínimo',
            'maximo' => 'Máximo',
            'quantidade' => 'Quantidade',
        ];
    }

    private function mostrarTamanhos($tipo): bool
    {
        return in_array($tipo, [
            TipoCaracteristica::Inteiro->value,
            TipoCaracteristica::Decimal->value,
            TipoCaracteristica::TextoCurto->value,
            TipoCaracteristica::TextoLongo->value,
        ]);
    }
}
