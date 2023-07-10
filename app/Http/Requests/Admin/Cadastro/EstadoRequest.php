<?php

namespace App\Http\Requests\Admin\Cadastro;

use Illuminate\Foundation\Http\FormRequest;

class EstadoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return false;
    }

    public function rules(): array
    {
        return [
            'nome' => 'required|string|max:100',
            'uf' => 'required|string|size:2',

        ];
    }

    public function attributes(): array
    {
        return [
            'nome' => 'Nome',
            'uf' => 'UF',
        ];
    }
}
