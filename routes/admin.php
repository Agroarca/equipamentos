<?php

use App\Http\Controllers\Admin\CaracteristicaOpcaoController;
use App\Http\Controllers\Admin\CaracteristicaController;
use App\Http\Controllers\Admin\CategoriaController;
use App\Http\Controllers\Admin\EquipamentoController;
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
            Route::get('', [CaracteristicaController::class, 'inicio'])->name('');
            Route::get('criar', [CaracteristicaController::class, 'criar'])->name('.criar');
            Route::post('salvar', [CaracteristicaController::class, 'salvar'])->name('.salvar');
            Route::get('{id}/visualizar', [CaracteristicaController::class, 'visualizar'])->name('.visualizar');
            Route::get('{id}/excluir', [CaracteristicaController::class, 'excluir'])->name('.excluir');

            Route::prefix('{caracteristicaId}/opcoes')->name('.opcoes')->group(function () {
                Route::get('criar', [CaracteristicaOpcaoController::class, 'criar'])->name('.criar');
                Route::post('salvar', [CaracteristicaOpcaoController::class, 'salvar'])->name('.salvar');
                Route::get('{id}/excluir', [CaracteristicaOpcaoController::class, 'excluir'])->name('.excluir');
            });
        });
    });

    Route::prefix('equipamentos')->name('.equipamentos')->group(function () {
        Route::get('', [EquipamentoController::class, 'inicio'])->name('');
        Route::get('criar/{categoriaId?}', [EquipamentoController::class, 'criar'])->name('.criar');
        Route::post('salvar', [EquipamentoController::class, 'salvar'])->name('.salvar');
        Route::get('{id}/editar', [EquipamentoController::class, 'editar'])->name('.editar');
        Route::post('{id}/atualizar', [EquipamentoController::class, 'atualizar'])->name('.atualizar');
        Route::get('{id}/excluir', [EquipamentoController::class, 'excluir'])->name('.excluir');
    });
});
