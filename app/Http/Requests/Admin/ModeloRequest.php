<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ModeloRequest extends FormRequest
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
            'marca_id' => 'bail|nullable|integer|exists:marcas,id',
        ];
    }

    public function attributes()
    {
        return [
            'nome' => 'Nome',
            'marca_id' => 'Marca',
        ];
    }
}
