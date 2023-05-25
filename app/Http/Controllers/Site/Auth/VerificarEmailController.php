<?php

namespace App\Http\Controllers\Site\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;

class VerificarEmailController extends Controller
{
    // phpcs:disable SlevomatCodingStandard.Functions.FunctionLength.FunctionLength

    public function verificar(EmailVerificationRequest $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return redirect()->route('site.perfil')
                ->with('mensagem', [
                    'class' => 'alert-warning',
                    'texto' => 'Sua conta já foi verificada.',
                ]);
        }
        $request->fulfill();

        if (!$request->hasValidSignature()) {
            return redirect()->route('site.perfil')
                ->with('mensagem', [
                    'class' => 'alert-warning',
                    'texto' => 'Link de verificação inválido ou expirado.',
                ]);
        }
        return redirect()->route('site.perfil')
            ->with('mensagem', [
                'class' => 'alert-success',
                'texto' => 'Email verificado com sucesso',
            ]);
    }

    public function reenviarEmail(Request $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return redirect()->route('site.perfil')
                ->with('mensagem', [
                    'class' => 'alert-warning',
                    'texto' => 'Sua conta já foi verificada.',
                ]);
        }
        if (RateLimiter::tooManyAttempts('verificar-email' . $request->user()->id, 1)) {
            $segundos = RateLimiter::availableIn('verificar-email' . $request->user()->id);

            return redirect()
                ->route('site.perfil')
                ->with('mensagem', [
                    'class' => 'alert-warning',
                    'texto' => "Muitas tentativas, tente novamente em $segundos seconds.",
                ]);
        }
        $request->user()->sendEmailVerificationNotification();
        RateLimiter::hit('verificar-email' . $request->user()->id);
        return redirect()->route('site.perfil')
            ->with('mensagem', [
                'class' => 'alert-success',
                'texto' => 'Email de verificação será enviado em instantes.',
            ]);
    }
}
