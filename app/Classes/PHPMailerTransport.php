<?php

namespace App\Classes;

use Symfony\Component\Mailer\SentMessage;
use Symfony\Component\Mailer\Transport\AbstractTransport;
use Symfony\Component\Mime\MessageConverter;
use PHPMailer\PHPMailer\PHPMailer;

/**
 * Classe para sobrescrever o envio de e-mail padrão do Laravel
 */
class PHPMailerTransport extends AbstractTransport
{
    /**
     * Converte a mensagem e envia o e-mail usando o PHPMailer
     *
     * @param SentMessage $message SentMessage recebido do Laravel.
     *
     * @return void
     */
    public function doSend(SentMessage $message): void
    {
        $mailer = $this->getClient();
        $mailer->setFrom(
            $message->getEnvelope()->getSender()->getAddress(),
            $message->getEnvelope()->getSender()->getName()
        );

        foreach ($message->getEnvelope()->getRecipients() as $recipient) {
            $mailer->addAddress(
                $recipient->getAddress(),
                $recipient->getName()
            );
        }
        $converted = MessageConverter::toEmail($message->getOriginalMessage());
        $mailer->Subject = $converted->getSubject();
        $mailer->Body = $converted->getHtmlBody();
        $mailer->AltBody = $converted->getTextBody();

        $mailer->send();
    }

    /**
     * Retorna o nome do transportador
     *
     * @return string
     */
    public function __toString(): string
    {
        return 'phpmailer';
    }

    /**
     * Retorna o cliente PHPMailer Configurado
     *
     * @return PHPMailer
     */
    private function getClient(): PHPMailer
    {
        $mailer = new PHPMailer();
        $mailer->isSMTP();
        $mailer->Host = config('mail.mailers.smtp.host');
        $mailer->Port = config('mail.mailers.smtp.port');
        $mailer->Username = config('mail.mailers.smtp.username');
        $mailer->Password = config('mail.mailers.smtp.password');
        $mailer->SMTPSecure  = config('mail.mailers.smtp.encryption');
        $mailer->SMTPAuth = true;
        $mailer->CharSet = 'UTF-8';
        $mailer->isHTML(true);

        return $mailer;
    }
}
