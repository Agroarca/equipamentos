<?php

use App\Http\Controllers\Admin\Marketing\PaginaInicial\MenuController;
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
            Route::get('componente/{componente}/ordem/acima', [LayoutController::class, 'ordemAcima'])->name('.componente.ordem.acima');
            Route::get('componente/{componente}/ordem/abaixo', [LayoutController::class, 'ordemAbaixo'])->name('.componente.ordem.abaixo');

            Route::prefix('menu')->name('.menu')->group(function () {
                Route::get('adicionar', [MenuController::class, 'adicionar'])->name('.adicionar');
                Route::post('salvar', [MenuController::class, 'salvar'])->name('.salvar');
                Route::get('{menuLink}/editar', [MenuController::class, 'editar'])->name('.editar');
                Route::post('{menuLink}/atualizar', [MenuController::class, 'atualizar'])->name('.atualizar');
                Route::get('{menuLink}/visualizar', [MenuController::class, 'visualizar'])->name('.visualizar');
                Route::get('{menuLink}/excluir', [MenuController::class, 'excluir'])->name('.excluir');
                Route::get('{menuLink}/ordem/acima', [MenuController::class, 'ordemAcima'])->name('.ordem.acima');
                Route::get('{menuLink}/ordem/abaixo', [MenuController::class, 'ordemAbaixo'])->name('.ordem.abaixo');
            });

            Route::prefix('carrossel')->name('.carrossel')->group(function () {
                Route::get('visualizar', [CarrosselController::class, 'visualizar'])->name('.visualizar');
                Route::get('adicionar', [CarrosselController::class, 'adicionar'])->name('.adicionar');
                Route::post('salvar', [CarrosselController::class, 'salvar'])->name('.salvar');
                Route::get('{item}/visualizar', [CarrosselController::class, 'visualizarItem'])->name('.item.visualizar');
                Route::get('{item}/excluir', [CarrosselController::class, 'excluir'])->name('.excluir');
                Route::get('{item}/ordem/acima', [CarrosselController::class, 'ordemAcima'])->name('.ordem.acima');
                Route::get('{item}/ordem/abaixo', [CarrosselController::class, 'ordemAbaixo'])->name('.ordem.abaixo');
            });

            Route::prefix('banner')->name('.banner')->group(function () {
                Route::get('adicionar', [BannerController::class, 'adicionar'])->name('.adicionar');
                Route::post('salvar', [BannerController::class, 'salvar'])->name('.salvar');
                Route::get('{banner}/visualizar', [BannerController::class, 'visualizar'])->name('.visualizar');
            });

            Route::prefix('grid')->name('.grid')->group(function () {
                Route::get('adicionar', [GridController::class, 'adicionar'])->name('.adicionar');
                Route::post('salvar', [GridController::class, 'salvar'])->name('.salvar');
                Route::get('{grid}/visualizar', [GridController::class, 'visualizar'])->name('.visualizar');
                Route::get('{grid}/imagem/adicionar', [GridController::class, 'adicionarImagem'])->name('.imagem.adicionar');
                Route::post('{grid}/imagem/salvar', [GridController::class, 'salvarImagem'])->name('.imagem.salvar');
                Route::get('{grid}/imagem/{gridImagem}/visualizar', [GridController::class, 'visualizarImagem'])->name('.imagem.visualizar');
                Route::get('{grid}/imagem/{gridImagem}/excluir', [GridController::class, 'excluirImagem'])->name('.imagem.excluir');
                Route::get('{grid}/imagem/{gridImagem}/ordem/acima', [GridController::class, 'ordemAcima'])->name('.imagem.ordem.acima');
                Route::get('{grid}/imagem/{gridImagem}/ordem/abaixo', [GridController::class, 'ordemAbaixo'])->name('.imagem.ordem.abaixo');
            });

            Route::prefix('lista/produtos')->name('.lista.produtos')->group(function () {
                Route::get('adicionar', [ListaProdutosController::class, 'adicionar'])->name('.adicionar');
                Route::post('salvar', [ListaProdutosController::class, 'salvar'])->name('.salvar');
                Route::get('{lista}/visualizar', [ListaProdutosController::class, 'visualizar'])->name('.visualizar');
            });
        });
    });
});
