<?php

namespace App\Http\Controllers\Site\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Site\Auth\EntrarRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EntrarController extends Controller
{
    public function inicio()
    {
        return Inertia::render('Site/Auth/Entrar', request()->old());
    }

    public function entrar(EntrarRequest $request)
    {
        $request->autenticar();

        $request->session()->regenerate();

        if (session()->has('url.intended')) {
            return redirect()->to(session('url.intended'));
        }

        return redirect()->route('site.perfil');
    }

    public function sair(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
