<?php

namespace App\Http\Requests\Admin;

use App\Enums\Cadastro\StatusEquipamento;
use Carbon\Carbon;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

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
            'id' => 'integer',
            'titulo' => 'string|required|min:10|max:100',
            'valor' => 'numeric|required',
            'ano' => ['integer', 'required', 'min:1900', "max:{$ano}"],
            'modelo_id' => 'integer|required_without:id|exists:modelos,id',
            'marca_id' => 'integer|nullable|exists:marcas,id',
            'categoria_id' => 'integer|required_without:id|exists:categorias,id',
            'status' => ['integer', 'nullable', Rule::in(StatusEquipamento::values())],
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
            'status' => 'Status',
        ];
    }
}