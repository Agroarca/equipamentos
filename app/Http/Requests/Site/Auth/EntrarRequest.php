<?php

namespace App\Http\Requests\Site\Auth;

use App\Rules\Usuario\CNPJ;
use App\Rules\Usuario\CPF;
use App\Rules\Usuario\EmailCpfOuCnpj;
use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Str;

class EntrarRequest extends FormRequest
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
            'email' => [
                'nullable',
                'string',
                'email',
                'max:255',
            ],
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
            'password' => 'required|string',
            'manter_conectado' => 'nullable|boolean',
        ];
    }

    public function attributes(): array
    {
        return [
            'email_cpf_cnpj' => 'E-mail, CPF ou CNPJ',
            'email' => 'E-mail',
            'cpf' => 'CPF',
            'cnpj' => 'CNPJ',
            'password' => 'Senha',
        ];
    }

    public function messages(): array
    {
        return [
            'email.email' => 'O E-mail deve ser um endereço válido',
            'email_cpf_cnpj' => 'O valor deve ser um E-mail, CPF ou CNPJ válido',
        ];
    }

    public function autenticar(): void
    {
        $this->verificarRateLimit();

        $credenciais = [
            'password' => $this->password,
        ];

        $credenciais += match (true) {
            !empty($this->cpf) => ['cpf' => $this->cpf],
            !empty($this->cnpj) => ['cnpj' => $this->cnpj],
            default => ['email' => $this->email],
        };

        $auth = Auth::attempt($credenciais, $this->boolean('manter_conectado'));

        if (!$auth) {
            RateLimiter::hit($this->chaveRateLimit());

            $campo = match (true) {
                !empty($this->cpf) => 'CPF',
                !empty($this->cnpj) => 'CNPJ',
                default => 'E-mail',
            };

            throw ValidationException::withMessages([
                'email' => "O $campo e/ou a senha estão incorretos.",
            ]);
        }

        $this->limparRateLimit();
    }

    public function verificarRateLimit(): void
    {
        if (!RateLimiter::tooManyAttempts($this->chaveRateLimit(), 5)) {
            return;
        }

        $this->excedeuTentativas();
    }

    public function excedeuTentativas(): void
    {
        event(new Lockout($this));

        $seconds = RateLimiter::availableIn($this->chaveRateLimit());

        throw ValidationException::withMessages([
            'email' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    public function chaveRateLimit(): string
    {
        return Str::transliterate(Str::lower($this->input('email')) . '|' . $this->ip());
    }

    public function limparRateLimit(): void
    {
        RateLimiter::clear($this->chaveRateLimit());
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
