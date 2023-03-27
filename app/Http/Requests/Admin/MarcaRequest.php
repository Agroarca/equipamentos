<?php

namespace App\Http\Requests\Admin;

use App\Enums\Cadastro\StatusCadastro;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class MarcaRequest extends FormRequest
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
            'status' => ['integer', 'nullable', Rule::in(StatusCadastro::values())]
        ];
    }

    public function attributes()
    {
        return [
            'nome' => 'Nome',
            'status' => 'Status'
        ];
    }
}
