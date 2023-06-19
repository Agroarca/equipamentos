<?php

namespace App\Http\Requests\Admin\Equipamentos\Lista;

use Illuminate\Foundation\Http\FormRequest;

class ListaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'nome' => 'string|required|min:3|max:100',
            'slug' => [
                'string',
                'nullable',
                'min:3',
                'max:100',
                'unique:listas,slug',
                'regex:/^[a-z]+[a-z0-9-]*$/',
            ],
            'meta_description' => 'string|required|max:500',
        ];
    }

    public function attributes(): array
    {
        return [
            'nome' => 'Nome',
            'slug' => 'Slug',
            'meta_description' => 'Meta Description',
        ];
    }
}
