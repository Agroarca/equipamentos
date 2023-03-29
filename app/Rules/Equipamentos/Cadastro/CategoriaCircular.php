<?php

namespace App\Rules\Equipamentos\Cadastro;

use App\Models\Equipamentos\Cadastro\Categoria;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class CategoriaCircular implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        /*
         * Por conta da posição da regra de validação nunca irá atingir 100% de cobertura
         * de Coverage, por isso os avisos de @codeCoverageIgnoreStart e @codeCoverageIgnoreEnd
         */

        if (!$value) {
            // @codeCoverageIgnoreStart
            return;
            // @codeCoverageIgnoreEnd
        }

        $categoria = Categoria::find($value);

        if (!$categoria) {
            // @codeCoverageIgnoreStart
            return;
            // @codeCoverageIgnoreEnd
        }

        $id = request()->route('id');
        while ($categoria->categoria_mae_id) {
            $categoria = $categoria->categoriaMae;
            if ($categoria->id == $id) {
                $fail("O campo $attribute não pode ser uma categoria filha.");
            }
        }
    }
}
