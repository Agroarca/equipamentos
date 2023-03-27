<?php

// phpcs:ignoreFile

namespace App\Providers;

use App\Classes\PaginationUrlWindow;
use App\Classes\PHPMailerTransport;
use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\Facades\Config;
use Illuminate\Pagination\UrlWindow;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Pluralizer;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $aliasLoader = AliasLoader::getInstance();
        $aliasLoader->alias(UrlWindow::class, PaginationUrlWindow::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Pluralizer::useLanguage('portuguese');

        if (Str::contains(Config::get('app.url'), 'https://')) {
            URL::forceScheme('https');
        }

        Mail::extend('phpmailer', function ($app) {
            return new PHPMailerTransport();
        });
    }
}
