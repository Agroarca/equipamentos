<?php

namespace App\Notifications\Usuario;

use App\Mail\Auth\VerificarConta;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Notification;
use Carbon\Carbon;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\URL;
use Illuminate\Mail\Mailable;

class VerificarEmail extends Notification implements ShouldQueue
{
    use Queueable;

    // phpcs:disable SlevomatCodingStandard.Functions.UnusedParameter.UnusedParameter
    public function via($notifiable): array
    {
        return ['mail'];
    }

    public function toMail($notifiable): Mailable
    {
        $verificationUrl = $this->verificationUrl($notifiable);
        return new VerificarConta($notifiable, $verificationUrl);
    }

    protected function verificationUrl($notifiable): string
    {
        return URL::temporarySignedRoute(
            'auth.verificar.email',
            Carbon::now()->addMinutes(Config::get('auth.verification.expire', 720)),
            [
                'id' => $notifiable->getKey(),
                'hash' => sha1($notifiable->getEmailForVerification()),
            ]
        );
    }
}
