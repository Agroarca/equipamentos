<?php

namespace App\Http\Requests\Site\Equipamento\Cadastro;

use Illuminate\Foundation\Http\FormRequest;

class EquipamentoImagemRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'imagem' => 'file|required|image|dimensions:min_width=800,ratio=4/3',
        ];
    }

    public function messages(): array
    {
        return ['imagem.dimensions' => 'A imagem deve ter no mínimo 800px de largura e proporção 4:3'];
    }
}
