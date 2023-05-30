<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Elastic\Apm\ElasticApm;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AddLabelsElasticAPM
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        if (ini_get('elastic_apm.enabled') && Auth::check()) {
            $usuario = Auth::user();
            ElasticApm::getCurrentTransaction()->context()->setLabel('user.id', $usuario->id);
            ElasticApm::getCurrentTransaction()->context()->setLabel('user.name', $usuario->name);
            ElasticApm::getCurrentTransaction()->context()->setLabel('user.email', $usuario->email);
        }

        return $response;
    }
}
