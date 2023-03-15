<?php

namespace App\Http\Requests\Admin\Lista;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProdutoListaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
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
            'equipamento_id' => [
                'required',
                'exists:equipamentos,id',
                Rule::unique('lista_produtos')->where(function ($query) {
                    return $query->where('lista_id', request()->route('id'));
                }),
            ]
        ];
    }
}
