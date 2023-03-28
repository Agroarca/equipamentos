<?php

namespace App\Rules\Usuario;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class Telefone implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $telefone = preg_replace('/\D/', '', (string) $value);

        if (!preg_match('/^\d{2}9?\d{8}$/', $telefone)) {
            $fail("O $attribute informado é inválido.");
        }
    }
}
