<?php

namespace App\Http\Requests\Conversa;

use Illuminate\Foundation\Http\FormRequest;

class EnviarMensagemRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
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
            'mensagem' => 'bail|string|min:3|max:2500',
        ];
    }
}
