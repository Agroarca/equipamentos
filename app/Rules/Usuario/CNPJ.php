<?php

namespace App\Rules\Usuario;

// phpcs:disable SlevomatCodingStandard.Operators.RequireOnlyStandaloneIncrementAndDecrementOperators
// phpcs:disable Squiz.Arrays.ArrayDeclaration.SingleLineNotAllowed
// phpcs:disable Squiz.PHP.DisallowInlineIf

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class CNPJ implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $c = preg_replace('/\D/', '', $value);

        $b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

        if (strlen($c) != 14) {
            $fail("O $attribute informado é inválido.");
        }

        if (preg_match("/^{$c[0]}{14}$/", $c) > 0) {
            $fail("O $attribute informado é inválido.");
        }

        for ($i = 0, $n = 0; $i < 12; $n += $c[$i] * $b[++$i]);

        if ($c[12] != ((($n %= 11) < 2) ? 0 : 11 - $n)) {
            $fail("O $attribute informado é inválido.");
        }

        for ($i = 0, $n = 0; $i <= 12; $n += $c[$i] * $b[$i++]);

        if ($c[13] != ((($n %= 11) < 2) ? 0 : 11 - $n)) {
            $fail("O $attribute informado é inválido.");
        }
    }
}
