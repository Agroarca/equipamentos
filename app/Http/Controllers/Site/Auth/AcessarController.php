<?php

namespace App\Http\Controllers\Site\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Site\Auth\AcessarRequest;
use App\Models\Usuario;
use Inertia\Inertia;

class AcessarController extends Controller
{
    public function inicio(): mixed
    {
        return Inertia::render('Site/Auth/Acessar');
    }

    public function acessar(AcessarRequest $request): mixed
    {
        $usuario = Usuario::query()
            ->when($request->cpf, fn ($query) => $query->where('cpf', $request->cpf))
            ->when($request->cnpj, fn ($query) => $query->where('cnpj', $request->cnpj))
            ->when($request->email, fn ($query) => $query->where('email', $request->email))
            ->first();

        if ($usuario) {
            return redirect()
                ->route('auth.entrar')
                ->withInput([
                    'email_cpf_cnpj' => $request->email_cpf_cnpj,
                ])->with('mensagem', [
                    'classeAlert' => 'alert-success',
                    'texto' => 'Encontramos seu cadastro, agora digite sua senha para acessar sua conta.',
                ]);
        }

        return redirect()
            ->route('auth.registrar')
            ->withInput([
                'cpf' => $request->cpf,
                'cnpj' => $request->cnpj,
                'email' => $request->email,
            ])->with('mensagem', [
                'classeAlert' => 'alert-info',
                'texto' => 'Não encontramos seu cadastro, registre uma nova conta',
            ]);
    }
}
