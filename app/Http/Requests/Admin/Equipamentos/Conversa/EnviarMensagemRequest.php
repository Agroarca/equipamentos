<?php

namespace App\Http\Requests\Admin\Equipamentos\Conversa;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Str;

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

    public function enviar(): void
    {
        $this->verificarRateLimit();
        RateLimiter::hit($this->chaveRateLimit());
    }

    public function verificarRateLimit(): void
    {
        if (!RateLimiter::tooManyAttempts($this->chaveRateLimit(), 10)) {
            return;
        }

        $this->excedeuTentativas();
    }

    public function excedeuTentativas(): void
    {
        event(new Lockout($this));

        $seconds = RateLimiter::availableIn($this->chaveRateLimit());

        throw ValidationException::withMessages([
            'mensagem' => "Muitas tentativas de envio de mensagens. Tente novamente em $seconds segundos.",
        ]);
    }

    public function chaveRateLimit(): string
    {
        return Str::transliterate(Str::lower('conversa.' . Auth::Id()));
    }
}
