<?php

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

Route::middleware(['auth'])->prefix('admin')->name('admin')->group(function (){
    Route::prefix('categorias')->name('.categorias')->group(function(){
        Route::get('{categoriaId?}', [CategoriaController::class, 'inicio'])->name('')->where('categoriaId', '\d+');
        Route::get('criar/{categoriaId?}', [CategoriaController::class, 'criar'])->name('.criar')->where('categoriaId', '\d+');
        Route::post('salvar', [CategoriaController::class, 'salvar'])->name('.salvar');
        Route::get('{id}/editar', [CategoriaController::class, 'editar'])->name('.editar');
        Route::post('{id}/atualizar', [CategoriaController::class, 'atualizar'])->name('.atualizar');
        Route::get('{id}/excluir', [CategoriaController::class, 'excluir'])->name('.excluir');
        Route::get('pesquisar/{categoriaId?}', [CategoriaController::class, 'pesquisar'])->name('.pesquisar')->where('categoriaId', '\d+');
    });
});
