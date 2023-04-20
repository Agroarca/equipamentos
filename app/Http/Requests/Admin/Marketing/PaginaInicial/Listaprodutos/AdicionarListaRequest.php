<?php

namespace App\Http\Requests\Admin\Marketing\PaginaInicial\Listaprodutos;

use Illuminate\Foundation\Http\FormRequest;

class AdicionarListaRequest extends FormRequest
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
            'lista_produtos_id' => 'bail|nullable|integer|exists:listas,id',
        ];
    }

    public function attributes(): array
    {
        return [
            'titulo' => 'Título',
            'subtitulo' => 'Subtítulo',
            'tela_cheia' => 'Tela cheia',
            'lista_produtos_id' => 'Lista de Produtos',
        ];
    }
}
