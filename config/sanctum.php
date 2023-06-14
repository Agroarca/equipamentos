<?php

// phpcs:disable SlevomatCodingStandard.Namespaces.ReferenceUsedNamesOnly.ReferenceViaFullyQualifiedName

use Laravel\Sanctum\Sanctum;

return [

    /*
     * Stateful Domains
     */

    'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', sprintf(
        '%s%s',
        'localhost,localhost:3000,127.0.0.1,127.0.0.1:8000,::1',
        Sanctum::currentApplicationUrlWithPort()
    ))),

    /*
     * Sanctum Guards
     */

    'guard' => ['web'],

    /*
     * Expiration Minutes
     */

    'expiration' => null,

    /*
     * Sanctum Middleware
     */

    'middleware' => [
        'verify_csrf_token' => App\Http\Middleware\VerifyCsrfToken::class,
        'encrypt_cookies' => App\Http\Middleware\EncryptCookies::class,
    ],

];
