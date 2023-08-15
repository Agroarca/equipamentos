<?php

namespace App\Http\Requests\Site\Auth;

use App\Rules\Usuario\CNPJ;
use App\Rules\Usuario\CPF;
use App\Rules\Usuario\EmailCpfOuCnpj;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class AcessarRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'email_cpf_cnpj' => [
                'bail',
                'required',
                new EmailCpfOuCnpj(),
            ],
            'email' => 'nullable|string|email|max:255',
            'cpf' => [
                'bail',
                'nullable',
                new CPF(),
            ],
            'cnpj' => [
                'bail',
                'nullable',
                new CNPJ(),
            ],
        ];
    }

    public function attributes(): array
    {
        return [
            'email' => 'E-mail',
            'cpf' => 'CPF',
            'cnpj' => 'CNPJ',
        ];
    }

    public function messages(): array
    {
        return [
            'email.email' => 'O E-mail deve ser um endereço válido',
            'email_cpf_cnpj' => 'O valor deve ser um E-mail, CPF ou CNPJ válido',
        ];
    }

    public function prepareForValidation(): void
    {
        if (Str::of($this->email_cpf_cnpj)->isMatch('/\D/')) {
            $this->merge([
                'email' => $this->email_cpf_cnpj,
            ]);
            return;
        }

        if (strlen($this->email_cpf_cnpj) === 11) {
            $this->merge([
                'cpf' => $this->email_cpf_cnpj,
            ]);
            return;
        }

        if (strlen($this->email_cpf_cnpj) === 14) {
            $this->merge([
                'cnpj' => $this->email_cpf_cnpj,
            ]);
            return;
        }
    }
}
