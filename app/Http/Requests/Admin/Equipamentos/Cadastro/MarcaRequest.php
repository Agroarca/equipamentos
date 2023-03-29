<?php

namespace App\Http\Requests\Admin\Equipamentos\Cadastro;

use App\Enums\Equipamentos\Cadastro\StatusCadastro;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class MarcaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'nome' => 'string|required|min:3|max:50',
            'status' => [
                'integer',
                'nullable',
                Rule::in(StatusCadastro::values()),
            ],
        ];
    }

    public function attributes(): array
    {
        return [
            'nome' => 'Nome',
            'status' => 'Status',
        ];
    }
}
