<?php

namespace App\Http\Requests\Admin;

use App\Enums\Cadastro\StatusCadastro;
use App\Models\Equipamentos\Marca;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Factory;
use Illuminate\Validation\Rule;

class ModeloRequest extends FormRequest
{
    public function __construct(Factory $factory)
    {
        $factory->extend(
            'status_modelo_marca',
            function ($attribute, $value, $parameters) {
                return $this->validarStatusModelo($value);
            },
            'O campo :attribute não pode ser aprovado se a marca não estiver aprovada.'
        );
    }
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'nome' => 'string|required|min:3|max:50',
            'marca_id' => 'bail|nullable|integer|exists:marcas,id',
            'status' => ['integer', 'required', Rule::in(StatusCadastro::values()), 'status_modelo_marca']
        ];
    }

    public function attributes()
    {
        return [
            'nome' => 'Nome',
            'marca_id' => 'Marca',
            'status' => 'Status'
        ];
    }

    public function validarStatusModelo($value)
    {
        if ($value != StatusCadastro::Aprovado->value) {
            return true;
        }

        $marca = Marca::find($this->input('marca_id'));

        if (!$marca) {
            return false;
        }

        return $marca->status == StatusCadastro::Aprovado->value;
    }
}
