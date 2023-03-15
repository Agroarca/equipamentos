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
        $status = session('status');
        return Inertia::render('Site/Auth/RecuperarSenha', compact('status'));
    }

    public function recuperarSenha(RecuperarSenhaRequest $request)
    {
        $status = Password::sendResetLink(
            $request->only('email')
        );

        if ($status == Password::RESET_LINK_SENT) {
            return redirect()->route('auth.recuperar-senha')->with('status', __($status));
        }

        throw ValidationValidationException::withMessages([
            'email' => [trans($status)],
        ]);
    }
}
