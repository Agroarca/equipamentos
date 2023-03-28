<?php

namespace App\Http\Requests\Admin\Equipamentos\Caracteristicas;

use Illuminate\Foundation\Http\FormRequest;

class CaracteristicaOpcaoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return ['nome' => 'string|required|min:3|max:50'];
    }

    public function attributes(): array
    {
        return ['nome' => 'Nome'];
    }
}
