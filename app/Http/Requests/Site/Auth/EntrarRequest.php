<?php

namespace App\Http\Requests\Site\Auth;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Str;

class EntrarRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'email' => 'required|string|email',
            'password' => 'required|string',
            'manter_conectado' => 'nullable|boolean',
        ];
    }

    public function autenticar(): void
    {
        $this->verificarRateLimit();

        if (!Auth::attempt($this->only('email', 'password'), $this->boolean('manter_conectado'))) {
            RateLimiter::hit($this->chaveRateLimit());

            throw ValidationException::withMessages([
                'email' => trans('auth.failed'),
            ]);
        }

        $this->limparRateLimit();
    }

    public function verificarRateLimit(): void
    {
        if (!RateLimiter::tooManyAttempts($this->chaveRateLimit(), 5)) {
            return;
        }

        $this->excedeuTentativas();
    }

    public function excedeuTentativas(): void
    {
        event(new Lockout($this));

        $seconds = RateLimiter::availableIn($this->chaveRateLimit());

        throw ValidationException::withMessages([
            'email' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    public function chaveRateLimit(): string
    {
        return Str::transliterate(Str::lower($this->input('email')) . '|' . $this->ip());
    }

    public function limparRateLimit(): void
    {
        RateLimiter::clear($this->chaveRateLimit());
    }
}
