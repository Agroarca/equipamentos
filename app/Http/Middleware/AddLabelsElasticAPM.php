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
        Log::info('AddLabelsElasticAPM -> elastic_apm.enabled: ' . ini_get('elastic_apm.enabled') . ' - Auth::check(): ' .
        Auth::check() . ' - Result: ' . (ini_get('elastic_apm.enabled') && Auth::check()) . ' - user: ' . print_r(Auth::user(), true)));
        if (ini_get('elastic_apm.enabled') && Auth::check()) {
            $usuario = Auth::user();
            Log::info('AddLabelsElasticAPM -> userId: ' . $usuario->id);
            ElasticApm::getCurrentTransaction()->context()->setLabel('user.id', $usuario->id);
            ElasticApm::getCurrentTransaction()->context()->setLabel('user.name', $usuario->name);
            ElasticApm::getCurrentTransaction()->context()->setLabel('user.email', $usuario->email);
        }

        return $next($request);
    }
}
