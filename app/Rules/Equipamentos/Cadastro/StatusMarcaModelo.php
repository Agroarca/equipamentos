<?php

namespace App\Rules\Equipamentos\Cadastro;

use App\Enums\Equipamentos\Cadastro\StatusCadastro;
use App\Models\Equipamentos\Cadastro\Marca;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class StatusMarcaModelo implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if ($value != StatusCadastro::Aprovado->value) {
            return;
        }

        $marca = Marca::find(request()->input('marca_id'));

        if (!$marca) {
            $fail("O campo $attribute não pode ser aprovado se a marca não estiver aprovada.");
        }

        if ($marca->status !== StatusCadastro::Aprovado->value) {
            $fail("O campo $attribute não pode ser aprovado se a marca não estiver aprovada.");
        }
    }
}
