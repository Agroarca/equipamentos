<?php

namespace App\Http\Requests\Admin\Marketing\PaginaInicial\Menu;

use Illuminate\Foundation\Http\FormRequest;

class MenuLinkRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'nome' => 'string|required|min:3|max:50',
            'link' => 'string|required',
        ];
    }

    public function attributes(): array
    {
        return [
            'nome' => 'Nome',
            'link' => 'Link',
        ];
    }
}
