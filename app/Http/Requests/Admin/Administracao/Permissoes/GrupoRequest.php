<?php

namespace App\Http\Requests\Admin\Administracao\Permissoes;

use App\Models\Administracao\Permissoes\Grupo;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class GrupoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'nome' => [
                'string',
                'required',
                'min:3',
                'max:255',
                Rule::unique(app(Grupo::class)->getTable())->ignore($this->route('grupo')),
            ],
        ];
    }

    public function attributes(): array
    {
        return [
            'nome' => 'Nome',
        ];
    }
}
