<?php

namespace App\Http\Requests\Admin\Equipamentos\Caracteristicas;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CaracteristicaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'nome' => 'string|required|min:3|max:50',
            'tipo' => ['integer', 'required', Rule::in(TipoCaracteristica::values())],
            'obrigatorio' => 'boolean|required',
            'minimo' => ['integer', 'nullable', Rule::prohibitedIf(fn () => !$this->mostrarTamanhos(request()->tipo))],
            'maximo' => ['integer', 'nullable', 'gt:minimo', Rule::prohibitedIf(fn () => !$this->mostrarTamanhos(request()->tipo))],
            'quantidade' => ['integer', 'nullable', Rule::prohibitedIf(fn () => request()->tipo != TipoCaracteristica::Decimal->value)],
        ];
    }

    public function attributes()
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
            TipoCaracteristica::TextoLongo->value
        ]);
    }
}
