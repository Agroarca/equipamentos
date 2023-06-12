<?php

namespace App\Http\Requests\Admin\Equipamentos\Cadastro;

use App\Enums\Equipamentos\Cadastro\StatusEquipamento;
use Carbon\Carbon;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class EquipamentoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $ano = Carbon::now()->year + 1;

        return [
            'id' => 'integer',
            'titulo' => 'string|required|min:10|max:100',
            'valor' => 'numeric|required',
            'ano' => [
                'integer',
                'required',
                'min:1900',
                "max:{$ano}",
            ],
            'modelo_id' => 'required_without:id|exists:modelos,id',
            'categoria_id' => 'required_without:id|exists:categorias,id',
            'status' => [
                'integer',
                'nullable',
                Rule::in(StatusEquipamento::values()),
            ],
        ];
    }

    public function attributes(): array
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

    public function messages(): array
    {
        return [
            'modelo_id.required_without' => 'O campo modelo e marca são obrigatórios',
        ];
    }
}
