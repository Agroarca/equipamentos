<?php

use App\Http\Controllers\Site\Auth\AcessarController;
use App\Http\Controllers\Site\Auth\EntrarController;
use App\Http\Controllers\Site\Auth\RecuperarSenhaController;
use App\Http\Controllers\Site\Auth\RedefinirSenhaController;
use App\Http\Controllers\Site\Auth\RegistroController;
use App\Http\Controllers\Site\Auth\VerificarEmailController;
use Illuminate\Support\Facades\Route;

Route::name('auth')->group(function () {
    Route::get('acessar', [AcessarController::class, 'inicio'])->name('.acessar.inicio');
    Route::post('acessar', [AcessarController::class, 'acessar'])->name('.acessar');
    Route::get('entrar', [EntrarController::class, 'inicio'])->name('.entrar');
    Route::post('entrar', [EntrarController::class, 'entrar'])->name('.autenticar');
    Route::get('registrar', [RegistroController::class, 'inicio'])->name('.registrar');
    Route::post('registrar', [RegistroController::class, 'registrar'])->name('.registro');
    Route::get('senha/recuperar', [RecuperarSenhaController::class, 'inicio'])->name('.recuperar-senha');
    Route::post('senha/recuperar', [RecuperarSenhaController::class, 'recuperarSenha'])->name('.recuperacao-senha');
    Route::get('senha/redefinir/{token}', [RedefinirSenhaController::class, 'inicio'])->name('.redefinir-senha');
    Route::post('senha/redefinir', [RedefinirSenhaController::class, 'redefinirSenha'])->name('.redefinicao-senha');

    Route::middleware('auth')->group(function () {
        Route::get('sair', [EntrarController::class, 'sair'])->name('.sair');
        Route::get('perfil/verificar/{id}/{hash}', [VerificarEmailController::class, 'verificar'])->middleware(['auth'])->name('.verificar.email');
        Route::get('perfil/verificar/reenviar', [VerificarEmailController::class, 'reenviarEmail'])->name('.reenviar.email');
    });
});
