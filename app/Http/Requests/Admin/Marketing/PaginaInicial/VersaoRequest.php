<?php

namespace App\Http\Requests\Admin\Marketing\PaginaInicial;

use Illuminate\Foundation\Http\FormRequest;

class VersaoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'prioridade' => 'required|integer',
            'nome' => 'required|string|min:5|max:255',
            'data_inicio' => 'nullable|date',
            'data_fim' => 'nullable|date',
        ];
    }

    public function attributes(): array
    {
        return [
            'prioridade' => 'Prioridade',
            'nome' => 'Nome',
            'data_inicio' => 'Data Inicial',
            'data_fim' => 'Data Final',
        ];
    }
}
