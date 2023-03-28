<?php

namespace App\Http\Requests\Equipamento;

use Illuminate\Foundation\Http\FormRequest;

class EquipamentoDescricaoRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'descricao' => 'required|string|min:10|max:255',
        ];
    }
}
