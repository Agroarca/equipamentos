<?php

use App\Http\Controllers\Admin\CaracteristicaOpcoesController;
use App\Http\Controllers\Admin\CaracteristicasController;
use App\Http\Controllers\Admin\CategoriaController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| Aqui devem ser registradas as rotas para o painel administrativo da
| Aplicação.
|
*/

Route::middleware(['auth'])->prefix('admin')->name('admin')->group(function () {
    Route::prefix('categorias')->name('.categorias')->group(function () {
        Route::get('{categoriaId?}', [CategoriaController::class, 'inicio'])->name('');
        Route::get('criar/{categoriaId?}', [CategoriaController::class, 'criar'])->name('.criar');
        Route::post('salvar', [CategoriaController::class, 'salvar'])->name('.salvar');
        Route::get('{id}/editar', [CategoriaController::class, 'editar'])->name('.editar');
        Route::post('{id}/atualizar', [CategoriaController::class, 'atualizar'])->name('.atualizar');
        Route::get('{id}/excluir', [CategoriaController::class, 'excluir'])->name('.excluir');
        Route::get('pesquisar/{categoriaId?}', [CategoriaController::class, 'pesquisar'])->name('.pesquisar');

        Route::prefix('{categoriaId}/caracteristicas')->name('.caracteristicas')->group(function () {
            Route::get('', [CaracteristicasController::class, 'inicio'])->name('');
            Route::get('criar', [CaracteristicasController::class, 'criar'])->name('.criar');
            Route::post('salvar', [CaracteristicasController::class, 'salvar'])->name('.salvar');
            Route::get('{id}/visualizar', [CaracteristicasController::class, 'visualizar'])->name('.visualizar');
            Route::get('{id}/excluir', [CaracteristicasController::class, 'excluir'])->name('.excluir');

            Route::prefix('{caracteristicaId}/opcoes')->name('.opcoes')->group(function () {
                Route::get('criar', [CaracteristicaOpcoesController::class, 'criar'])->name('.criar');
                Route::post('salvar', [CaracteristicaOpcoesController::class, 'salvar'])->name('.salvar');
                Route::get('{id}/excluir', [CaracteristicaOpcoesController::class, 'excluir'])->name('.excluir');
            });
        });
    });
});
