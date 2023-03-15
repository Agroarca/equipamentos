<?php

namespace App\Http\Controllers\Site\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Site\Auth\RecuperarSenhaRequest;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException as ValidationValidationException;
use Inertia\Inertia;

class RecuperarSenhaController extends Controller
{
    public function inicio()
    {
        return Inertia::render('Site/Auth/RecuperarSenha');
    }

    public function recuperarSenha(RecuperarSenhaRequest $request)
    {
        $status = Password::sendResetLink(
            $request->only('email')
        );

        if ($status == Password::RESET_LINK_SENT) {
            return back()->with('status', __($status));
        }

        throw ValidationValidationException::withMessages([
            'email' => [trans($status)],
        ]);
    }
}
