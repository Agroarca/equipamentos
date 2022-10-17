<?php

namespace App\Http\Requests\Admin;

use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EquipamentoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $ano = Carbon::now()->year + 1;
        return [
            'titulo' => 'string|required|min:10|max:100',
            'valor' => 'numeric|required',
            'ano' => ['integer', 'required', 'min:1900', "max:{$ano}"],
            'modelo_id' => 'integer|required|exists:modelos,id',
            'categoria_id' => 'integer|required|exists:categorias,id'
        ];
    }

    public function attributes()
    {
        return [
            'titulo' => 'Título',
            'valor' => 'Valor',
            'ano' => 'Ano',
            'modelo_id' => 'Modelo',
            'categoria_id' => 'Categoria',
        ];
    }
}
