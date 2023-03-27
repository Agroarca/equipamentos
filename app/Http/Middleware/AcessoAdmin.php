<?php
// phpcs:ignoreFile

namespace App\Http\Middleware;

use App\Enums\Usuario\TipoUsuario;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AcessoAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->user()->tipo_usuario == TipoUsuario::Admin->value) {
            abort(403);
        }

        return $next($request);
    }
}
