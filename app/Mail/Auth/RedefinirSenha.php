<?php

// phpcs:disable Squiz.Arrays.ArrayDeclaration.MultiLineNotAllowed

namespace App\Mail\Auth;

use App\Models\Usuario;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;

class RedefinirSenha extends Mailable
{
    public function __construct(
        private Usuario $usuario,
        private string $token
    ) {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address(
                address: config('mail.from.address'),
                name: config('mail.from.name')
            ),
            to: [
                new Address(
                    address: $this->usuario->email,
                    name: $this->usuario->nome
                )
            ],
            subject: 'Redefinir senha'
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'auth.redefinir-senha',
            text: 'auth.redefinir-senha-text',
            with: [
                'url' => $this->getUrl(),
                'minutosExpiracao' => $this->getUrlMinutosExpiracao(),
            ]
        );
    }

    public function attachments(): array
    {
        return [];
    }

    private function getUrl(): string
    {
        return route('auth.redefinir-senha', [
            'token' => $this->token,
            'email' => $this->usuario->email,
        ], true);
    }

    private function getUrlMinutosExpiracao(): int
    {
        return config('auth.passwords.' . config('auth.defaults.passwords') . '.expire');
    }
}
