<?php

namespace App\Http\Requests\Lista;

use Illuminate\Foundation\Http\FormRequest;

class ListaRequest extends FormRequest
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
            'nome' => 'string|required|min:3|max:100',
            'slug' => 'string|nullable|min:3|max:100|regex:/[\w-]*/i'
        ];
    }

    public function attributes()
    {
        return [
            'nome' => 'Nome',
            'slug' => 'Slug'
        ];
    }
}
