<?php

namespace App\Http\Controllers\Site\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Inertia\Inertia;

class VerificarEmailController extends Controller
{
    public function verificar(EmailVerificationRequest $request)
    {
        $request->fulfill();
        return Inertia::render('Site/Auth/VerificarEmail');
    }

    public function reenviarEmail(Request $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return abort(403, 'Sua conta já foi verificada.');
        }
        if (RateLimiter::tooManyAttempts('verificar-email' . $request->user()->id, 1)) {
            $segundos = RateLimiter::availableIn('verificar-email' . $request->user()->id);

            return abort(403, 'Muitas tentativas, tente novamente em ' . $segundos . ' seconds.');
        }
        $request->user()->sendEmailVerificationNotification();
        RateLimiter::hit('verificar-email' . $request->user()->id);
        return redirect()->route('site.perfil');
    }
}
