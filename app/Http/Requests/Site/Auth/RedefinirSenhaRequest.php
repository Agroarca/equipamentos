<?php

namespace App\Http\Requests\Site\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RedefinirSenhaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'token' => 'required',
            'email' => 'required|email',
            'password' => [
                'required',
                Password::min(8)->mixedCase()->numbers(),
            ],
        ];
    }

    public function attributes(): array
    {
        return [
            'password' => 'Senha',
        ];
    }
}
