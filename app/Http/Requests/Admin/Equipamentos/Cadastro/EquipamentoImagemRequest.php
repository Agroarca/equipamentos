<?php

namespace App\Http\Requests\Admin\Equipamentos\Cadastro;

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
}
