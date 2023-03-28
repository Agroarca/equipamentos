<?php

namespace App\Http\Requests\Admin\Equipamentos\Cadastro;

use App\Enums\Equipamentos\Cadastro\StatusEquipamento;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EquipamentoStatusRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $statusReprovado = StatusEquipamento::Reprovado->value;
        return [
            'status' => [
                'integer',
                'required',
                Rule::in([StatusEquipamento::Aprovado->value, StatusEquipamento::Reprovado->value]),
            ],
            'motivo_reprovado' => [
                "nullable',
                'required_if:status,$statusReprovado',
                 'prohibited_unless:status,$statusReprovado',
                  'string',
                   'min:10",
            ],
        ];
    }

    public function attributes(): array
    {
        return [
            'status' => 'Status',
            'motivo_reprovado' => 'Motivo da reprovação',
        ];
    }

    public function messages(): array
    {
        return [
            // phpcs:ignore Generic.Files.LineLength.MaxExceeded
            'motivo_reprovado.required_if' => 'O campo Motivo da reprovação deve ser um texto caso deseja reprovar um equipamento.',
            // phpcs:ignore Generic.Files.LineLength.MaxExceeded
            'motivo_reprovado.prohibited_unless' => 'Apenas deve ser informado um motivo caso deseja reprovar um equipamento.',
        ];
    }
}
