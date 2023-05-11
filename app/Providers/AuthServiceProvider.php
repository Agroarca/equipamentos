<?php

// phpcs:ignoreFile

namespace App\Providers;

use App\Mail\Auth\RedefinirSenha;
use App\Mail\Auth\VerificarConta;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [];

    public function boot()
    {
        ResetPassword::toMailUsing(function ($notifiable, $token) {
            return new RedefinirSenha($notifiable, $token);
        });
        VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
            return new VerificarConta($notifiable, $url);
        });
    }
}
