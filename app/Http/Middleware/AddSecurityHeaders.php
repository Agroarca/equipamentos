<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Symfony\Component\HttpFoundation\Response;

class AddSecurityHeaders
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);
        $response->header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
        $response->header('X-Frame-Options', 'SAMEORIGIN');
        $response->header('X-Frame-Options', 'SAMEORIGIN');
        $response->header('X-Content-Type-Options', 'nosniff');
        $response->header('Referrer-Policy', 'strict-origin-when-cross-origin');

        // Permissions Policy
        // phpcs:ignore Generic.Files.LineLength.MaxExceeded
        $response->header('Permissions-Policy', 'camera=self, microphone=(), payment=(), autoplay=(), display-capture=(), serial=(), usb=(), geolocation=*');

        if (!App::environment('local')) {
            // Content Security Policy
            // phpcs:ignore Generic.Files.LineLength.MaxExceeded
            $response->header('Content-Security-Policy', "default-src 'self'; object-src 'none'; media-src 'none'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; connect-src 'self' https://*.googleapis.com https://www.google-analytics.com wss://agroarca.com.br:*; img-src 'self' https://imagens.agroarca.com.br data: w3.org/svg/2000 blob:");
        }
        return $response;
    }
}
