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
        $rules = [
            'prioridade' => 'required|integer',
            'nome' => 'required|string|min:5|max:255',
            'data_inicio' => [
                'nullable',
                'date',
                'after:now',
            ],
            'data_fim' => [
                'nullable',
                'date',
                'after:now',
            ],
        ];

        if ($this->has('data_inicio') && $this->has('data_fim')) {
            $rules['data_fim'][] = 'after:data_inicio';
        }

        return $rules;
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
