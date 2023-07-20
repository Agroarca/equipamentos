<?php

namespace App\Http\Controllers\Site\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Site\Auth\RedefinirSenhaRequest;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class RedefinirSenhaController extends Controller
{
    public function inicio(Request $request)
    {
        return Inertia::render(
            'Site/Auth/RedefinirSenha',
            [
                'email' => $request->email,
                'token' => $request->route('token'),
            ]
        );
    }

    public function redefinirSenha(RedefinirSenhaRequest $request)
    {
        $status = Password::reset(
            $request->only('email', 'password', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60),
                ])->save();

                event(new PasswordReset($user));
            }
        );

        if ($status === Password::PASSWORD_RESET) {
            return redirect()->route('auth.entrar')->with('mensagem', __($status));
        }

        throw ValidationException::withMessages([
            'email' => [trans($status)],
        ]);
    }
}
