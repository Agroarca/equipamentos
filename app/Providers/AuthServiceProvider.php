<?php

namespace App\Providers;

use App\Mail\Auth\RedefinirSenha;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [];

    public function boot()
    {
        ResetPassword::toMailUsing(function ($notifiable, $token) {
            return new RedefinirSenha($notifiable, $token);
        });
    }
}
