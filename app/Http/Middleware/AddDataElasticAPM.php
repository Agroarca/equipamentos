<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Elastic\Apm\ElasticApm;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AddDataElasticAPM
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        try {
            if (ini_get('elastic_apm.enabled') && Auth::check()) {
                $usuario = Auth::user();

                ElasticApm::getCurrentTransaction()->context()->user()->setId($usuario->id);
                ElasticApm::getCurrentTransaction()->context()->user()->setUsername($usuario->nome);
                ElasticApm::getCurrentTransaction()->context()->user()->setEmail($usuario->email);
            }
        } catch (Exception $e) {
            Log::error('Erro ao enviar dados ao ElasticAPM', ['exception' => $e]);
        }

        return $response;
    }
}
