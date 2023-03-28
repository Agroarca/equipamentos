<?php

namespace App\Http\Requests\Admin\Equipamentos\Conversa;

use Illuminate\Foundation\Http\FormRequest;

class EnviarMensagemRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return ['mensagem' => 'bail|string|min:3|max:2500'];
    }
}
