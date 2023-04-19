<?php

use App\Http\Controllers\Admin\Marketing\PaginaInicial\BannerController;
use App\Http\Controllers\Admin\Marketing\PaginaInicial\CarrosselController;
use App\Http\Controllers\Admin\Marketing\PaginaInicial\GridController;
use App\Http\Controllers\Admin\Marketing\PaginaInicial\LayoutController;
use App\Http\Controllers\Admin\Marketing\PaginaInicial\ListaProdutosController;
use App\Http\Controllers\Admin\Marketing\PaginaInicial\VersaoController;
use App\Http\Middleware\AcessoAdmin;
use Illuminate\Support\Facades\Route;

/*
 * --------------------------------------------------------------------------
 * Marketing Routes
 * --------------------------------------------------------------------------
 *
 *  Aqui devem ser registradas as rotas do módulo de marketing da Aplicação.
 */

Route::middleware(['auth', AcessoAdmin::class])->prefix('admin/marketing')->name('admin.marketing')->group(function () {

    Route::prefix('pagina/inicial')->name('.paginaInicial')->group(function () {
        Route::get('', [VersaoController::class, 'inicio'])->name('');
        Route::get('criar', [VersaoController::class, 'criar'])->name('.criar');
        Route::post('salvar', [VersaoController::class, 'salvar'])->name('.salvar');
        Route::get('{versao}/visualizar', [VersaoController::class, 'visualizar'])->name('.visualizar');
        Route::get('{versao}/editar', [VersaoController::class, 'editar'])->name('.editar');
        Route::post('{versao}/atualizar', [VersaoController::class, 'atualizar'])->name('.atualizar');
        Route::get('{versao}/excluir', [VersaoController::class, 'excluir'])->name('.excluir');
        Route::get('{versao}/aprovar', [VersaoController::class, 'aprovar'])->name('.aprovar');
        Route::get('{versao}/reprovar', [VersaoController::class, 'reprovar'])->name('.reprovar');
        Route::get('{versao}/publicar', [VersaoController::class, 'publicar'])->name('.publicar');
        Route::get('{versao}/voltar', [VersaoController::class, 'voltar'])->name('.voltar');

        Route::prefix('{versao}/layout')->name('.layout')->group(function () {
            Route::get('', [LayoutController::class, 'inicio'])->name('');
            Route::get('componente/{componente}/excluir', [LayoutController::class, 'excluirComponente'])->name('.componente.excluir');

            Route::prefix('carrossel')->name('.carrossel')->group(function () {
                Route::get('visualizar', [CarrosselController::class, 'visualizar'])->name('.visualizar');
                Route::get('adicionar', [CarrosselController::class, 'adicionar'])->name('.adicionar');
                Route::post('salvar', [CarrosselController::class, 'salvar'])->name('.salvar');
            });

            Route::prefix('banner')->name('.banner')->group(function () {
                Route::get('adicionar', [BannerController::class, 'adicionar'])->name('.adicionar');
                Route::post('salvar', [BannerController::class, 'salvar'])->name('.salvar');
            });

            Route::prefix('grid')->name('.grid')->group(function () {
                Route::get('adicionar', [GridController::class, 'adicionar'])->name('.adicionar');
                Route::post('salvar', [GridController::class, 'salvar'])->name('.salvar');
                Route::get('{grid}/visualizar', [GridController::class, 'visualizar'])->name('.visualizar');
                Route::get('{grid}/imagem/adicionar', [GridController::class, 'adicionarImagem'])->name('.imagem.adicionar');
                Route::post('{grid}/imagem/salvar', [GridController::class, 'salvarImagem'])->name('.imagem.salvar');
                Route::get('{grid}/imagem/{gridImagem}/excluir', [GridController::class, 'excluirImagem'])->name('.imagem.excluir');
            });

            Route::prefix('lista/produtos')->name('.lista.produtos')->group(function () {
                Route::get('adicionar', [ListaProdutosController::class, 'adicionar'])->name('.adicionar');
                Route::post('salvar', [ListaProdutosController::class, 'salvar'])->name('.salvar');
            });
        });
    });
});
