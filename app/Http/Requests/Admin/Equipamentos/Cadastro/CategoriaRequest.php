<?php

namespace App\Http\Requests\Admin\Equipamentos\Cadastro;

use App\Rules\Equipamentos\Cadastro\CategoriaCircular;
use App\Rules\Equipamentos\Cadastro\CategoriaPropria;
use Illuminate\Foundation\Http\FormRequest;

class CategoriaRequest extends FormRequest
{
    // phpcs:ignore SlevomatCodingStandard.TypeHints.PropertyTypeHint
    protected $stopOnFirstFailure = true;

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'nome' => 'string|required|min:3|max:100',
            'categoria_mae_id' => [
                'bail',
                'nullable',
                'integer',
                'exists:categorias,id',
                new CategoriaCircular(),
                new CategoriaPropria(),
            ],
            'meta_description' => 'string|nullable|max:500',
        ];
    }

    public function attributes(): array
    {
        return [
            'nome' => 'Nome',
            'categoria_mae_id' => 'Categoria Mãe',
            'meta_description' => 'Meta Description',
        ];
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'categoria_mae_id' => $this->input('categoria_mae_id') ?? null,
        ]);
    }
}
