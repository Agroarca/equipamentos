<?php

namespace App\Providers;

use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [];

    public function boot()
    {
        ResetPassword::createUrlUsing(function ($user, string $token) {
            return $this->app['config']->get('app.url') . route('auth.redefinir-senha', [
                'token' => $token,
                'email' => $user->getEmailForPasswordReset()
            ], false);
        });
    }
}
