<?php

namespace App\Http\Controllers\Site\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
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
        $request->user()->sendEmailVerificationNotification();
        return redirect()->route('site.perfil');
    }
}
