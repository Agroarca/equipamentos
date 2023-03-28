<?php

namespace App\Rules\Usuario;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class CpfOuCnpj implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $len = strlen(preg_replace('/\D/', '', (string) $value));

        if ($len == 11 || $len == 14) {
            $fail("O campo $attribute não é um CPF ou CNPJ válido.");
        }
    }
}
