<?php

namespace App\Http\Requests\Admin\Marketing\PaginaInicial\Banner;

use Illuminate\Foundation\Http\FormRequest;

class AdicionarBannerRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'titulo' => 'nullable|string|min:5|max:100',
            'subtitulo' => 'nullable|string|min:5|max:255',
            'tela_cheia' => 'required|boolean',
            'link' => 'required|string',
            'descricao' => 'required|string|min:10|max:255',
            'imagem_desktop' => 'file|required|image|dimensions:min_width=1500',
            'imagem_mobile' => 'file|nullable|image|dimensions:min_width=500',
        ];
    }

    public function attributes(): array
    {
        return [
            'titulo' => 'Título',
            'subtitulo' => 'Subtítulo',
            'tela_cheia' => 'Tela cheia',
            'link' => 'Link',
            'descricao' => 'Descrição',
            'imagem_desktop' => 'Imagem desktop',
            'imagem_mobile' => 'Imagem mobile',
        ];
    }
}
