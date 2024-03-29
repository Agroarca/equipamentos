<?php

namespace App\Http\Requests\Site\Auth;

use App\Enums\Usuario\TipoPessoa;
use App\Rules\Usuario\CNPJ;
use App\Rules\Usuario\CPF;
use App\Rules\Usuario\CpfOuCnpj;
use App\Rules\Usuario\Nome;
use App\Rules\Usuario\Telefone;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class RegistroRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $rules = [
            'nome' => [
                'required',
                'string',
                'max:255',
            ],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique('usuarios')->ignore(Auth::id()),
            ],
            'password' => [
                'nullable',
                'string',
                Password::min(8)->mixedCase()->numbers(),
            ],
            'cpf_cnpj' => [
                'bail',
                'required',
                new CpfOuCnpj(),
            ],
            'celular' => [
                'bail',
                'required',
                new Telefone(),
            ],
            'cpf' => [
                'bail',
                'nullable',
                new CPF(),
                Rule::unique('usuarios')->ignore(Auth::id()),
            ],
            'cnpj' => [
                'bail',
                'nullable',
                new CNPJ(),
                Rule::unique('usuarios')->ignore(Auth::id()),
            ],
        ];

        if (Auth::check()) {
            $rules['password'] = [
                'nullable',
                Password::min(8)->mixedCase()->numbers(),
            ];
        } else {
            $rules['password'] = [
                'required',
                Password::min(8)->mixedCase()->numbers(),
            ];
        }
        if ($this->has('cpf')) {
            $rules['nome'] = [
                'required',
                'string',
                'max:255',
                new Nome(),
            ];
        }
        return $rules;
    }

    public function attributes(): array
    {
        return [
            'nome' => 'Nome',
            'email' => 'E-mail',
            'password' => 'Senha',
            'cpf_cnpj' => 'Cpf ou Cnpj',
            'celular' => 'Celular',
            'cpf' => 'CPF',
            'cnpj' => 'CNPJ',
        ];
    }

    protected function failedValidation($validator): void
    {
        session()->put('authType', 'register');
        throw new ValidationException($validator);
    }

    protected function prepareForValidation(): void
    {
        $attributes = [];
        if ($this->has('cpf_cnpj')) {
            $cpfOucnpj = preg_replace('/\D/', '', (string) $this->input('cpf_cnpj'));
            $len = strlen($cpfOucnpj);

            if ($len == 11) {
                $attributes['cpf'] = $cpfOucnpj;
                $attributes['tipo_pessoa'] = TipoPessoa::Fisica->value;
            } else if ($len == 14) {
                $attributes['cnpj'] = $cpfOucnpj;
                $attributes['tipo_pessoa'] = TipoPessoa::Juridica->value;
            }
        }

        if ($this->has('celular')) {
            $celular = preg_replace('/\D/', '', (string) $this->input('celular'));
            $attributes['celular'] = $celular;
        }

        $this->merge($attributes);
    }

    public function messages(): array
    {
        return [
            'nome' => 'O Nome Completo deve conter nome e sobrenome válidos.',
            'nome.required' => 'O Nome é obrigatório.',
            'email.email' => 'O E-mail deve ser um endereço válido.',
            'email.unique' => 'O E-mail já está sendo utilizado.',
            'cpf.unique' => 'O CPF já está sendo utilizado.',
            'cnpj.unique' => 'O CNPJ já está sendo utilizado.',
            'password.min' => 'A Senha deve conter no mínimo 8 caracteres.',
            'cpf_cnpj' => 'O CPF ou CNPJ é inválido.',
        ];
    }
}
