<?php

namespace App\Http\Requests\Auth;

use App\Enums\TipoPessoa;
use App\Rules\CNPJ;
use App\Rules\CPF;
use App\Rules\Telefone;
use Illuminate\Contracts\Validation\Factory;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class RegisteredUserRequest extends FormRequest
{
    public function __construct(Factory $factory)
    {
        $factory->extend(
            'cpf_cnpj',
            function ($attribute, $value, $parameters) {
                $len = strlen(preg_replace('/\D/', '', (string) $value));
                if ($len == 11 || $len == 14) {
                    return true;
                }

                return false;
            },
            'O campo :attribute não é um CPF ou CNPJ válido.'
        );
    }

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'nome' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => ['required', 'confirmed', Password::defaults()],
            'cpf_cnpj' => 'bail|required|cpf_cnpj',
            'celular' => ['bail', 'required', new Telefone()],
            'cpf' => ['bail', 'nullable', new CPF()],
            'cnpj' => ['bail', 'nullable', new CNPJ()],
        ];
    }

    public function attributes()
    {
        return [
            'nome' => 'Nome',
            'email' => 'E-mail',
            'password' => 'Senha',
            'cpf_cnpj' => 'Cpf ou Cnpj',
            'celular' => 'Celular',
            'cpf' => 'CPF',
            'cnpj' => 'CNPJ'
        ];
    }

    protected function failedValidation($validator)
    {
        session()->put('authType', 'register');
        throw new ValidationException($validator);
    }

    protected function prepareForValidation()
    {
        $attributes = [];
        $cpf_cnpj = preg_replace('/\D/', '', (string) $this->input('cpf_cnpj'));
        $len = strlen($cpf_cnpj);

        if ($len == 11) {
            $attributes['cpf'] = $cpf_cnpj;
            $attributes['tipo_pessoa'] = TipoPessoa::Fisica;
        } elseif ($len == 14) {
            $attributes['cnpj'] = $cpf_cnpj;
            $attributes['tipo_pessoa'] = TipoPessoa::Juridica;
        }

        $celular = preg_replace('/\D/', '', (string) $this->input('celular'));
        $attributes['celular'] = $celular;

        $this->merge($attributes);
    }
}
