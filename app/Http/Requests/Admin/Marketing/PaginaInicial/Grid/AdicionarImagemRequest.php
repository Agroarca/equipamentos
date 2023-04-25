<?php

namespace App\Http\Requests\Admin\Marketing\PaginaInicial\Grid;

use Illuminate\Foundation\Http\FormRequest;

class AdicionarImagemRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'link' => 'string|required',
            'ordem' => 'integer|required',
            'descricao' => 'string|required|min:10|max:255',
            'imagem_desktop' => 'file|required|image|dimensions:min_width=500',
            'imagem_mobile' => 'file|nullable|image|dimensions:min_width=500'
        ];
    }

    public function attributes(): array
    {
        return [
            'link' => 'Link',
            'ordem' => 'Ordem',
            'descricao' => 'Descrição',
            'imagem_desktop' => 'Imagem desktop',
            'imagem_mobile' => 'Imagem mobile'
        ];
    }
}
