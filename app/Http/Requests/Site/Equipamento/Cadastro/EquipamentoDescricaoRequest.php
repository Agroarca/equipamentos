<?php

namespace App\Http\Requests\Equipamento;

use Illuminate\Foundation\Http\FormRequest;

class EquipamentoDescricaoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'descricao' => 'required|string|min:10|max:255',
        ];
    }
}
