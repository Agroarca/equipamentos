<?php

use App\Http\Controllers\Admin\ModeloController;
use App\Http\Controllers\Site\ConversaController;
use App\Http\Controllers\Site\ListaController;
use App\Http\Controllers\Site\NotificacaoController;
use App\Http\Controllers\Site\SiteController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';

Route::name('site')->group(function () {
    Route::get('', [SiteController::class, 'inicio'])->name('.inicio');
    Route::get('equipamento/{id}', [SiteController::class, 'equipamento'])->name('.equipamento');
    Route::get('categoria/{id?}', [ListaController::class, 'categoria'])->name('.categoria');
    Route::get('marca/{id}', [ListaController::class, 'marca'])->name('.marca');

    Route::middleware(['auth'])->group(function () {
        Route::get('perfil', [SiteController::class, 'perfil'])->name('.perfil');
        Route::post('perfil/atualizar', [SiteController::class, 'atualizarPerfil'])->name('.perfil.atualizar');

        Route::prefix('conversa')->name('.conversa')->group(function () {
            Route::get('{id}', [ConversaController::class, 'conversa'])->name('');
            Route::get('equipamento/{id}', [ConversaController::class, 'conversaEquipamento'])->name('.equipamento');
            Route::post('{id}/enviar', [ConversaController::class, 'enviar'])->name('.enviar');

            Route::get('{id_conversa}/mensagens/anteriores/{id}', [ConversaController::class, 'mensagensAnteriores'])->name('.mensagens.anteriores');
            Route::get('{id_conversa}/mensagens/posteriores/{id}', [ConversaController::class, 'mensagensPosteriores'])->name('.mensagens');
            Route::post('{id_conversa}/mensagens/visualizacao/{id}', [ConversaController::class, 'visualizacao'])->name('.mensagens.visualizacao');
        });

        Route::prefix('notificacao')->name('.notificacao')->group(function () {
            Route::get('{id}', [NotificacaoController::class, 'notificacao'])->name('');
            Route::post('token', [NotificacaoController::class, 'salvarToken'])->name('.salvarToken');
        });
    });
});
