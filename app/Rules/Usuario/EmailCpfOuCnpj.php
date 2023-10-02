<?php

namespace App\Rules\Usuario;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Str;

class EmailCpfOuCnpj implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (Str::of($value)->contains('@')) {
            return;
        }

        $cleaned = Str::of($value)->replaceMatches('/\W/', '');
        $digitos = Str::of($value)->replaceMatches('/\D/', '');

        if ($cleaned->length() === $digitos->length()) {
            if ($digitos->length() === 14) {
                return;
            }

            if ($digitos->length() === 11) {
                return;
            }
        }

        $fail("O $attribute deve ser um e-mail, CPF ou CNPJ válido.");
    }
}
