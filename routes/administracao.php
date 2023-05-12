<?php

use App\Http\Controllers\Admin\Administracao\Permissoes\GrupoController;
use App\Http\Controllers\Admin\Administracao\Permissoes\PermissaoGrupoController;
use App\Http\Middleware\AcessoAdmin;
use Illuminate\Support\Facades\Route;

/*
 * --------------------------------------------------------------------------
 * Adminsitracao Routes
 * --------------------------------------------------------------------------
 *
 *  Aqui devem ser registradas as rotas do módulo de administracao da Aplicação.
 */

Route::middleware(['auth', AcessoAdmin::class])->prefix('admin/administracao')->name('admin.administracao')->group(function () {
    Route::prefix('permissoes')->name('.permissoes')->group(function () {
        Route::prefix('grupo')->name('.grupo')->group(function () {
            Route::get('', [GrupoController::class, 'inicio'])->name('');
            Route::get('criar', [GrupoController::class, 'criar'])->name('.criar');
            Route::post('salvar', [GrupoController::class, 'salvar'])->name('.salvar');
            Route::get('{grupo}/editar', [GrupoController::class, 'editar'])->name('.editar');
            Route::post('{grupo}/atualizar', [GrupoController::class, 'atualizar'])->name('.atualizar');
            Route::get('{grupo}/excluir', [GrupoController::class, 'excluir'])->name('.excluir');

            Route::prefix('{grupo}/permissoes')->name('.permissoes')->group(function () {
                Route::get('', [PermissaoGrupoController::class, 'inicio'])->name('');
            });
        });
    });
});
