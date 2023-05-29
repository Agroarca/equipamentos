<?php

namespace App\Rules\Usuario;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class Nome implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $nomes = explode(' ', $value);

        if (count($nomes) < 2) {
            $fail("O campo $attribute deve conter nome e sobrenome.");
        }
    }
}
