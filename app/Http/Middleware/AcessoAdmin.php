<?php
// phpcs:ignoreFile

namespace App\Http\Middleware;

use App\Enums\Usuario\TipoUsuario;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AcessoAdmin
{
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->user()->tipo_usuario == TipoUsuario::Admin->value) {
            abort(403);
        }

        return $next($request);
    }
}
