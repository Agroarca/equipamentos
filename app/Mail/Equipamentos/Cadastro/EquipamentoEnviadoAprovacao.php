<?php

namespace App\Mail\Equipamentos\Cadastro;

use App\Models\Usuario;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class EquipamentoEnviadoAprovacao extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        private Usuario $usuario
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
            subject: 'Equipamento enviado para aprovação'
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'equipamentos.cadastro.equipamento-enviado-aprovacao',
            text: 'equipamentos.cadastro.equipamento-enviado-aprovacao-text',
            with: [
                'nome' => $this->usuario->nome,
                'url' => url()->route('admin.equipamentos'),
            ]
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
