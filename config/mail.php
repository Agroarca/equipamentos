<?php

return [

    /*
     * Default Mailer
     */

    'default' => env('MAIL_MAILER', 'smtp'),

    /*
     * Mailer Configurations
     */

    'mailers' => [
        'smtp' => [
            'transport' => 'smtp',
            'host' => env('MAIL_HOST', 'smtp.mailgun.org'),
            'port' => env('MAIL_PORT', 587),
            'encryption' => env('MAIL_ENCRYPTION', 'tls'),
            'username' => env('MAIL_USERNAME'),
            'password' => env('MAIL_PASSWORD'),
            'timeout' => null,
            'local_domain' => env('MAIL_EHLO_DOMAIN'),
        ],

        'ses' => [
            'transport' => 'ses',
        ],

        'phpmailer' => [
            'transport' => 'phpmailer',
        ],
    ],

    /*
     * "From" Address
     */

    'from' => [
        'address' => env('MAIL_FROM_ADDRESS', 'hello@example.com'),
        'name' => env('MAIL_FROM_NAME', 'Example'),
    ],

    /*
     * Markdown Mail Settings
     */

    'markdown' => [
        'theme' => 'default',

        'paths' => [
            resource_path('views/vendor/mail'),
        ],
    ],

];
