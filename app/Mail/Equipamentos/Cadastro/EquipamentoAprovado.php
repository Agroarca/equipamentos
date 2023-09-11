<?php

namespace App\Mail\Equipamentos\Cadastro;

use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Usuario;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class EquipamentoAprovado extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        private Usuario $usuario,
        private Equipamento $equipamento
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
            subject: 'Equipamento aprovado'
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'equipamentos.cadastro.equipamento-aprovado',
            text: 'equipamentos.cadastro.equipamento-aprovado-text',
            with: [
                'nome' => $this->usuario->nome,
                'nomeEquipamento' => $this->equipamento->titulo,
                'url' => url()->route('site.equipamento', $this->equipamento->id),
            ]
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
