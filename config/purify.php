<?php

use Stevebauman\Purify\Definitions\Html5Definition;

return [

    /*
     * Default Config
     */

    'default' => 'default',

    /*
     * Config sets
     */

    'configs' => [

        'default' => [
            'Core.Encoding' => 'utf-8',
            'HTML.Doctype' => 'HTML 4.01 Transitional',
            'HTML.Allowed' => 'p[style],strong,em,h1[style],h2[style],h3[style],ul,li,ol,blockquote,hr',
            'HTML.ForbiddenElements' => '',
            'CSS.AllowedProperties' => 'text-align',
            'AutoFormat.AutoParagraph' => false,
            'AutoFormat.RemoveEmpty' => false,
        ],

    ],

    /*
     * HTMLPurifier definitions
     */

    'definitions' => Html5Definition::class,

    /*
     * Serializer location
     */

    'serializer' => storage_path('app/purify'),

];
