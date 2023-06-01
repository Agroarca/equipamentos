<?php

// phpcs:ignoreFile

namespace App\Providers;

use App\Events\Notificacoes\NotificacaoSaved;
use App\Listeners\EnviarEmailVerificacao;
use App\Listeners\Notificacoes\NotificacaoSavedListener;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        Registered::class => [
            EnviarEmailVerificacao::class,
        ],
        NotificacaoSaved::class => [
            NotificacaoSavedListener::class,
        ]
    ];

    public function boot()
    {
    }

    public function shouldDiscoverEvents()
    {
        return false;
    }
}
