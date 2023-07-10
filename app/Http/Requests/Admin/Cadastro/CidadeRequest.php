<?php

namespace App\Http\Requests\Admin\Cadastro;

use Illuminate\Foundation\Http\FormRequest;

class CidadeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return false;
    }

    public function rules(): array
    {
        return [
            'nome' => 'required|string|max:100',
            'estado_id' => 'required|integer|exists:cadastro_estados,id',
        ];
    }

    public function attributes(): array
    {
        return [
            'nome' => 'Nome',
            'estado_id' => 'Estado',
        ];
    }
}
