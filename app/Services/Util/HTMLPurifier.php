<?php

namespace App\Services\Util;

use Mews\Purifier\Facades\Purifier;

class HTMLPurifier
{
    public static function purify($html)
    {
        $config = [
            'HTML.Allowed' => 'p[style],strong,em,h1[style],h2[style],h3[style],ul,li,ol,blockquote,hr',
            'CSS.AllowedProperties' => 'text-align',
        ];

        return Purifier::clean($html, $config);
    }
}
