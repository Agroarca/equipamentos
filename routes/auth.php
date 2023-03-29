<?php

use App\Http\Controllers\Site\Auth\EntrarController;
use App\Http\Controllers\Site\Auth\RecuperarSenhaController;
use App\Http\Controllers\Site\Auth\RegistroController;
use Illuminate\Support\Facades\Route;

Route::name('auth')->group(function () {
    Route::get('entrar', [EntrarController::class, 'inicio'])->name('.entrar');
    Route::post('entrar', [EntrarController::class, 'entrar'])->name('.autenticar');
    Route::get('registrar', [RegistroController::class, 'inicio'])->name('.registrar');
    Route::post('registrar', [RegistroController::class, 'registrar'])->name('.registro');
    Route::get('senha/recuperar', [RecuperarSenhaController::class, 'inicio'])->name('.recuperar-senha');
    Route::post('senha/recuperar', [RecuperarSenhaController::class, 'recuperarSenha'])->name('.recuperacao-senha');
    Route::get('senha/redefinir/{token}', [RecuperarSenhaController::class, 'inicio'])->name('.redefinir-senha');
    Route::post('senha/redefinir', [RecuperarSenhaController::class, 'redefinirSenha'])->name('.redefinicao-senha');

    Route::middleware('auth')->group(function () {
        Route::get('sair', [EntrarController::class, 'sair'])->name('.sair');
    });
});


/* phpcs:disable

Route::middleware('guest')->group(function () {
     Route::get('register', [RegisteredUserController::class, 'create'])
         ->name('register');

     Route::post('register', [RegisteredUserController::class, 'store']);

     Route::get('login', [AuthenticatedSessionController::class, 'create'])
         ->name('login');

     Route::post('login', [AuthenticatedSessionController::class, 'store']);

     Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
         ->name('password.request');

     Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
         ->name('password.email');

     Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
         ->name('password.reset');

     Route::post('reset-password', [NewPasswordController::class, 'store'])
         ->name('password.update');
 });

 Route::middleware('auth')->group(function () {
     Route::get('verify-email', [EmailVerificationPromptController::class, '__invoke'])
         ->name('verification.notice');

     Route::get('verify-email/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
         ->middleware(['signed', 'throttle:6,1'])
         ->name('verification.verify');

     Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
         ->middleware('throttle:6,1')
         ->name('verification.send');

     Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
         ->name('password.confirm');

     Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

     Route::any('logout', [AuthenticatedSessionController::class, 'destroy'])
         ->name('logout');
 });
*/
