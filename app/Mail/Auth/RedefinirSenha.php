<?php

// phpcs:disable Squiz.Arrays.ArrayDeclaration.MultiLineNotAllowed

namespace App\Mail\Auth;

use App\Models\Usuario;
use Faker\Core\Number;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;

/**
 * Classe responsável por montar o e-mmail de redefinição de senha.
 */
class RedefinirSenha extends Mailable
{
    /**
     * Criar um novo e-mail de redefinição de senha.
     */
    public function __construct(
        private Usuario $usuario,
        private string $token
    ) {
    }

    /**
     * Montar o envelope do e-mail.
     */
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

    /**
     * Montar o conteúdo do e-mail.
     */
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

    /**
     * Montar os anexos do e-mail.
     *
     * @return array<Attachment>
     */
    public function attachments(): array
    {
        return [];
    }

    /**
     * Montar a URL de redefinição de senha.
     */
    private function getUrl(): string
    {
        return route('auth.redefinir-senha', [
            'token' => $this->token,
        ], true);
    }

    /**
     * Retornar a quantidade de minutos de expiração do token.
     */
    private function getUrlMinutosExpiracao(): Number
    {
        return config('auth.passwords.' . config('auth.defaults.passwords') . '.expire');
    }
}
