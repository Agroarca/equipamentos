<?php

namespace App\Http\Requests\Admin;

use App\Enums\Caracteristicas\TipoCaracteristica;
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
            'minimo' => 'integer|nullable',
            'maximo' => 'integer|nullable',
            'quantidade' => 'integer|nullable',
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
}
