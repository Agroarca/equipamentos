<?php

namespace App\Http\Requests\Admin\Marketing\PaginaInicial\Carrossel;

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
            'descricao' => 'string|required|min:10|max:255',
            'imagem_desktop' => 'file|required|image|dimensions:min_width=1500,ratio=3/1',
            'imagem_mobile' => 'file|required|image|dimensions:min_width=500,ratio=5/4',
        ];
    }

    public function attributes(): array
    {
        return [
            'link' => 'Link',
            'descricao' => 'Descrição',
            'imagem_desktop' => 'Imagem desktop',
            'imagem_mobile' => 'Imagem mobile',
        ];
    }
}
