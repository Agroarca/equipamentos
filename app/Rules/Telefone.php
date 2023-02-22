<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class Telefone implements Rule
{
    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $telefone = preg_replace('/\D/', '', (string) $value);

        // Verifica quantidade de dígitos
        if (! preg_match('/^\d{2}9?\d{8}$/', $telefone)) {
            return false;
        }

        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'O :attribute digitado é inválido';
    }
}
