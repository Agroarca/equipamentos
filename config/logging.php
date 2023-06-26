<?php

use Monolog\Handler\NullHandler;

return [

    /*
     * Default Log Channel
     */

    'default' => env('LOG_CHANNEL', 'stack'),

    /*
     * Deprecations Log Channel
     */

    'deprecations' => [
        'channel' => env('LOG_DEPRECATIONS_CHANNEL', 'null'),
        'trace' => false,
    ],

    /*
     * Log Channels
     */

    'channels' => [
        'stack' => [
            'driver' => 'stack',
            'channels' => [
                'daily',
            ],
            'ignore_exceptions' => false,
        ],

        'single' => [
            'driver' => 'single',
            'path' => storage_path('logs/laravel.log'),
            'level' => env('LOG_LEVEL', 'debug'),
        ],

        'daily' => [
            'driver' => 'daily',
            'path' => storage_path('logs/laravel.log'),
            'level' => env('LOG_LEVEL', 'debug'),
            'days' => 30,
        ],

        'null' => [
            'driver' => 'monolog',
            'handler' => NullHandler::class,
        ],
    ],

];
