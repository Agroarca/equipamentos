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
            'modelo_id' => 'integer|required_without:id|prohibits:modelo_nome|required_without:modelo_nome|exists:modelos,id',
            'modelo_nome' => 'string|required_without:modelo_id|prohibits:modelo_id|min:3|max:50',
            'marca_id' => 'integer|nullable|prohibits:marca_nome|exists:marcas,id',
            'marca_nome' => 'string|required_without:marca_id|prohibits:marca_id|min:3|max:50',
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
