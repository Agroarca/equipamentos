<?php

namespace App\Http\Requests\Admin\Marketing\PaginaInicial\Grid;

use App\Enums\Marketing\PaginaInicial\Grid\Formato;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AdicionarGridRequest extends FormRequest
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
            'formato' => [
                'required',
                'integer',
                Rule::in(Formato::values()),
            ],
        ];
    }

    public function attributes(): array
    {
        return [
            'titulo' => 'Título',
            'subtitulo' => 'Subtítulo',
            'tela_cheia' => 'Tela cheia',
            'formato' => 'Formato',
        ];
    }
}
