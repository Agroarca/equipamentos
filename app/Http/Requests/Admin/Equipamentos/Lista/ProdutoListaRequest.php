<?php

namespace App\Http\Requests\Admin\Equipamentos\Lista;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProdutoListaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'equipamento_id' => [
                'required',
                'integer',
                'exists:equipamentos,id',
                Rule::unique('lista_produtos')->where(function ($query) {
                    return $query->where('lista_id', request()->route('id'));
                }),
            ],
        ];
    }
}
