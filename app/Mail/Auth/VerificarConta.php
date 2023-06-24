<?php

namespace App\Mail\Auth;

use App\Models\Usuario;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;

class VerificarConta extends Mailable
{
    public function __construct(
        private Usuario $usuario,
        private string $url
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
            subject: 'Bem vindo a ' . config('app.name')
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'auth.verificar-conta',
            text: 'auth.verificar-conta-text',
            with: [
                'url' => $this->getUrl(),
                'nome' => $this->usuario->nome->explode(' ')[0],
            ]
        );
    }

    public function attachments(): array
    {
        return [];
    }

    private function getUrl(): string
    {
        return $this->url;
    }
}
