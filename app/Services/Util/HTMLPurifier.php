<?php

namespace App\Services\Util;

use Stevebauman\Purify\Facades\Purify;

/**
 * Classe responsável por remover tags e attributos indesejados do HTML.
 */
class HTMLPurifier
{
    /**
     * Remove tags e attributos indesejados do HTML.
     *
     * @param string $html HTML.
     *
     * @return string HTML limpo.
     */
    public static function purify(string $html): string
    {
        $config = [
            'HTML.Allowed' => 'p[style],strong,em,h1[style],h2[style],h3[style],ul,li,ol,blockquote,hr',
            'CSS.AllowedProperties' => 'text-align',
        ];

        return Purify::config($config)->clean($html);
    }
}
