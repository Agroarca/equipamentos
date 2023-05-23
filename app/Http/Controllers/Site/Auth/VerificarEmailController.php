<?php

namespace App\Http\Controllers\Site\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;

class VerificarEmailController extends Controller
{
    public function verificar(EmailVerificationRequest $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return redirect()->route('site.perfil')
                ->with('mensagem', 'Sua conta já foi verificada.')
                ->with('tipo_mensagem', 'erro');
        }
        $request->fulfill();

        if (!$request->hasValidSignature()) {
            return redirect()->route('site.perfil')
                ->with('mensagem', 'Link de verificação inválido ou expirado')
                ->with('tipo_mensagem', 'erro');
        }
        return redirect()->route('site.perfil')
            ->with('mensagem', 'Email verificado com sucesso')
            ->with('tipo_mensagem', 'sucesso');
    }

    public function reenviarEmail(Request $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return redirect()->route('site.perfil')
                ->with('mensagem', 'Sua conta já foi verificada.')
                ->with('tipo_mensagem', 'erro');
        }
        if (RateLimiter::tooManyAttempts('verificar-email' . $request->user()->id, 1)) {
            $segundos = RateLimiter::availableIn('verificar-email' . $request->user()->id);

            return redirect()
                ->route('site.perfil')
                ->with('mensagem', "Muitas tentativas, tente novamente em $segundos seconds.")
                ->with('tipo_mensagem', 'erro');
        }
        $request->user()->sendEmailVerificationNotification();
        RateLimiter::hit('verificar-email' . $request->user()->id);
        return redirect()->route('site.perfil')
            ->with('mensagem', 'Email de verificação será enviado em instantes.')
            ->with('tipo_mensagem', 'sucesso');
    }
}
