<?php

namespace App\Rules\Equipamentos\Cadastro;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class CategoriaPropria implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (request()->route('id') == $value) {
            $fail("O campo $attribute não pode ser si mesmo.");
        }
    }
}
