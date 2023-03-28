<?php

namespace App\Http\Requests\Admin;

use App\Models\Equipamentos\Categoria;
use Illuminate\Contracts\Validation\Factory;
use Illuminate\Foundation\Http\FormRequest;

class CategoriaRequest extends FormRequest
{
    protected $stopOnFirstFailure = true;

    public function __construct(Factory $factory)
    {
        $factory->extend(
            'circular',
            function ($attribute, $value, $parameters) {
                /**
                 * Por conta da posição da regra de validação nunca irá atingir 100% de cobertura
                 * de Coverage, por isso os avisos de @codeCoverageIgnoreStart e @codeCoverageIgnoreEnd
                 */

                $id = $this->route('id');

                if (!$value) {
                    // @codeCoverageIgnoreStart
                    return true;
                    // @codeCoverageIgnoreEnd
                }

                $categoria = Categoria::find($value);

                if (!$categoria) {
                    // @codeCoverageIgnoreStart
                    return true;
                    // @codeCoverageIgnoreEnd
                }

                while ($categoria->categoria_mae_id) {
                    $categoria = $categoria->categoriaMae;
                    if ($categoria->id == $id) {
                        return false;
                    }
                }

                return true;
            },
            'O campo :attribute não pode ser uma categoria filha.'
        );

        $factory->extend(
            'self',
            function ($attribute, $value, $parameters) {
                return $this->route('id') != $value;
            },
            'O campo :attribute não pode ser si mesma.'
        );
    }

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'nome' => 'string|required|min:3|max:100',
            'categoria_mae_id' => 'bail|nullable|integer|exists:categorias,id|self|circular',
        ];
    }

    public function attributes()
    {
        return [
            'nome' => 'Nome',
            'categoria_mae_id' => 'Categoria Mãe',
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'categoria_mae_id' => $this->input('categoria_mae_id') ?? null
        ]);
    }
}