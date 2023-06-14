<?php

return [

    /*
     * Cross-Origin Resource Sharing (CORS) Configuration
     * To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
     */

    'paths' => [
        'api/*',
        'sanctum/csrf-cookie',
    ],

    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
