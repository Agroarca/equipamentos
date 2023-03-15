<?php

namespace App\Http\Controllers\Site\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Site\Auth\RegistroRequest;
use App\Models\Usuario;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class RegistroController extends Controller
{
    public function inicio()
    {
        return Inertia::render('Site/Auth/Registrar');
    }

    public function registrar(RegistroRequest $request)
    {
        $usuario = new Usuario($request->only([
            'nome',
            'email',
            'celular',
            'cpf',
            'cnpj',
            'tipo_pessoa',
        ]));

        $usuario->password = Hash::make($request->password);
        $usuario->save();

        event(new Registered($usuario));
        Auth::login($usuario);
        return redirect(RouteServiceProvider::HOME);
    }
}
