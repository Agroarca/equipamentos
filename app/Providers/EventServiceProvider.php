<?php

// phpcs:ignoreFile

namespace App\Providers;

use App\Listeners\EnviarEmailVerificacao;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        Registered::class => [
            EnviarEmailVerificacao::class,
        ],
    ];

    public function boot()
    {

    }

    public function shouldDiscoverEvents()
    {
        return false;
    }
}
