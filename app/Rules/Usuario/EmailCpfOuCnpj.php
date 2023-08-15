<?php

namespace App\Rules\Usuario;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Str;

class EmailCpfOuCnpj implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (Str::of($value)->isMatch('/\D/')) {
            return;
        }

        if (strlen($value) === 11 || strlen($value) === 14) {
            return;
        }

        $fail("O $attribute deve ser um e-mail, CPF ou CNPJ válido.");
    }
}
