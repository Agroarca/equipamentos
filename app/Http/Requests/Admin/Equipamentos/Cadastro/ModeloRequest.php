<?php

namespace App\Http\Requests\Admin\Equipamentos\Cadastro;

use App\Enums\Equipamentos\Cadastro\StatusCadastro;
use App\Rules\Equipamentos\Cadastro\StatusMarcaModelo;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ModeloRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'nome' => 'string|required|min:3|max:50',
            'marca_id' => 'bail|nullable|integer|exists:marcas,id',
            'status' => [
                'integer',
                'nullable',
                Rule::in(StatusCadastro::values()),
                new StatusMarcaModelo(),
            ]
        ];
    }

    public function attributes(): array
    {
        return [
            'nome' => 'Nome',
            'marca_id' => 'Marca',
            'status' => 'Status'
        ];
    }
}
