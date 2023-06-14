<?php

// phpcs:disable Generic.Files.LineLength

return [

    /*
     * Debugbar Settings
     */

    'enabled' => env('DEBUGBAR_ENABLED', null),
    'except' => [
        'telescope*',
        'horizon*',
    ],

    /*
     * Storage settings
     */

    'storage' => [
        'enabled' => false,
    ],

    /*
     * Editor
     */

    'editor' => env('DEBUGBAR_EDITOR', 'vscode'),

    /*
     * Remote Path Mapping
     */

    'remote_sites_path' => env('DEBUGBAR_REMOTE_SITES_PATH', ''),
    'local_sites_path' => env('DEBUGBAR_LOCAL_SITES_PATH', ''),

    /*
     * Vendors
     */

    'include_vendors' => true,

    /*
     * Capture Ajax Requests
     */

    'capture_ajax' => true,
    'add_ajax_timing' => false,

    /*
     * Custom Error Handler for Deprecated warnings
     */

    'error_handler' => false,

    /*
     * Clockwork integration
     */

    'clockwork' => false,

    /*
     * DataCollectors
     */

    'collectors' => [
        'phpinfo' => false, // Php version
        'messages' => true, // Messages
        'time' => true, // Time Datalogger
        'memory' => true, // Memory usage
        'exceptions' => true, // Exception displayer
        'log' => true, // Logs from Monolog (merged in messages if enabled)
        'db' => true, // Show database (PDO) queries and bindings
        'views' => false, // Views with their data
        'route' => true, // Current route information
        'auth' => false, // Display Laravel authentication status
        'gate' => true, // Display Laravel Gate checks
        'session' => true, // Display session data
        'symfony_request' => true, // Only one can be enabled..
        'mail' => false, // Catch mail messages
        'laravel' => false, // Laravel version and environment
        'events' => false, // All events fired
        'default_request' => false, // Regular or special Symfony request logger
        'logs' => false, // Add the latest log messages
        'files' => false, // Show the included files
        'config' => false, // Display config settings
        'cache' => true, // Display cache events
        'models' => true, // Display models
        'livewire' => false, // Display Livewire (when available)
    ],

    /*
     * Extra options
     */

    'options' => [
        'auth' => [
            'show_name' => true, // Also show the users name/email in the debugbar
        ],
        'db' => [
            'with_params' => true, // Render SQL with the parameters substituted
            'backtrace' => true, // Use a backtrace to find the origin of the query in your files.
            'backtrace_exclude_paths' => [], // Paths to exclude from backtrace. (in addition to defaults)
            'timeline' => false, // Add the queries to the timeline
            'duration_background' => true, // Show shaded background on each query relative to how long it took to execute.
            'explain' => [ // Show EXPLAIN output on queries
                'enabled' => false,
                'types' => ['SELECT'], // Deprecated setting, is always only SELECT
            ],
            'hints' => false, // Show hints for common mistakes
            'show_copy' => false, // Show copy button next to the query,
            'slow_threshold' => false, // Only track queries that last longer than this time in ms
        ],
        'mail' => [
            'full_log' => false,
        ],
        'views' => [
            'timeline' => false, // Add the views to the timeline (Experimental)
            'data' => false, // Note: Can slow down the application, because the data can be quite large..
            'exclude_paths' => [], // Add the paths which you don't want to appear in the views
        ],
        'route' => [
            'label' => true, // Show complete route on bar
        ],
        'logs' => [
            'file' => null,
        ],
        'cache' => [
            'values' => true, // Collect cache values
        ],
    ],

    /*
     * Inject Debugbar in Response
     */

    'inject' => true,

    /*
     * DebugBar route prefix
     */

    'route_prefix' => '_debugbar',

    /*
     * DebugBar route domain
     */

    'route_domain' => null,

    /*
     * DebugBar theme
     */

    'theme' => env('DEBUGBAR_THEME', 'auto'),

    /*
     * Backtrace stack limit
     */

    'debug_backtrace_limit' => 50,
];
