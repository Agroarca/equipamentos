<?php

namespace App\Services\Util;

use Stevebauman\Purify\Facades\Purify;

class HTMLPurifier
{
    public static function purify($html)
    {
        $config = [
            'HTML.Allowed' => 'p[style],strong,em,h1[style],h2[style],h3[style],ul,li,ol,blockquote,hr',
            'CSS.AllowedProperties' => 'text-align',
        ];

        return Purify::config($config)->clean($html);
    }
}
