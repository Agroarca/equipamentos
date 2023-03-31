<?php

namespace App\Rules\Usuario;

// phpcs:disable SlevomatCodingStandard.Operators.RequireOnlyStandaloneIncrementAndDecrementOperators
// phpcs:disable Squiz.PHP.DisallowInlineIf

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class CPF implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $c = preg_replace('/\D/', '', $value);

        if (strlen($c) != 11 || preg_match("/^{$c[0]}{11}$/", $c)) {
            $fail("O $attribute informado é inválido.");
        }

        for ($s = 10, $n = 0, $i = 0; $s >= 2; $n += $c[$i++] * $s--);

        if ($c[9] != ((($n %= 11) < 2) ? 0 : 11 - $n)) {
            $fail("O $attribute informado é inválido.");
        }

        for ($s = 11, $n = 0, $i = 0; $s >= 2; $n += $c[$i++] * $s--);

        if ($c[10] != ((($n %= 11) < 2) ? 0 : 11 - $n)) {
            $fail("O $attribute informado é inválido.");
        }
    }
}
