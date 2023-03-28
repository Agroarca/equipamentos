<?php

use App\Http\Controllers\Admin\Equipamentos\Cadastro\CategoriaController;
use App\Http\Controllers\Admin\Equipamentos\Cadastro\EquipamentoController;
use App\Http\Controllers\Admin\Equipamentos\Cadastro\MarcaController;
use App\Http\Controllers\Admin\Equipamentos\Cadastro\ModeloController;
use App\Http\Controllers\Admin\Equipamentos\Caracteristicas\CaracteristicaController;
use App\Http\Controllers\Admin\Equipamentos\Caracteristicas\CaracteristicaOpcaoController;
use App\Http\Controllers\Admin\Equipamentos\Lista\ListaController;
use App\Http\Middleware\AcessoAdmin;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
    |--------------------------------------------------------------------------
    | Admin Routes
    |--------------------------------------------------------------------------
    |
    | Aqui devem ser registradas as rotas para o painel administrativo da
    | Aplicação.
    |
*/

Route::middleware(['auth', AcessoAdmin::class])->prefix('admin')->name('admin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('.dashboard');

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
        Route::get('criar/', [EquipamentoController::class, 'criar'])->name('.criar');
        Route::post('salvar', [EquipamentoController::class, 'salvar'])->name('.salvar');
        Route::get('{id}/editar', [EquipamentoController::class, 'editar'])->name('.editar');
        Route::post('{id}/atualizar', [EquipamentoController::class, 'atualizar'])->name('.atualizar');
        Route::post('{id}/atualizardescricao', [EquipamentoController::class, 'atualizarDescricao'])->name('.atualizarDescricao');
        Route::get('{id}/excluir', [EquipamentoController::class, 'excluir'])->name('.excluir');
        Route::get('pesquisar', [EquipamentoController::class, 'pesquisar'])->name('.pesquisar');
        Route::post('{id}/status/atualizar', [EquipamentoController::class, 'atualizarStatus'])->name('.status.atualizar');
        Route::post('{id}/caracteristicas/salvar', [EquipamentoController::class, 'salvarCaracteristicas'])->name('.caracteristicas.salvar');
        Route::post('{id}/imagens/adicionar', [EquipamentoController::class, 'adicionarImagem'])->name('.imagens.adicionar');
        Route::get('{id}/imagens/{imagemId}/deletar', [EquipamentoController::class, 'deletarImagem'])->name('.imagens.delete');
    });

    Route::prefix('lista')->name('.lista')->group(function () {
        Route::get('', [ListaController::class, 'inicio'])->name('');
        Route::get('criar', [ListaController::class, 'criar'])->name('.criar');
        Route::post('salvar', [ListaController::class, 'salvar'])->name('.salvar');
        Route::get('{id}/editar', [ListaController::class, 'editar'])->name('.editar');
        Route::post('{id}/atualizar', [ListaController::class, 'atualizar'])->name('.atualizar');
        Route::get('{id}/excluir', [ListaController::class, 'excluir'])->name('.excluir');
        Route::post('{id}/adicionar/', [ListaController::class, 'adicionar'])->name('.adicionar');
        Route::get('{lista_id}/produtos', [ListaController::class, 'produtos'])->name('.produtos');
        Route::get('{lista_id}/produtos/{produto_id}/excluir', [ListaController::class, 'remover'])->name('.produtos.excluir');
    });

    Route::prefix('marcas')->name('.marcas')->group(function () {
        Route::get('', [MarcaController::class, 'inicio'])->name('');
        Route::get('criar', [MarcaController::class, 'criar'])->name('.criar');
        Route::post('salvar', [MarcaController::class, 'salvar'])->name('.salvar');
        Route::get('{id}/editar', [MarcaController::class, 'editar'])->name('.editar');
        Route::post('{id}/atualizar', [MarcaController::class, 'atualizar'])->name('.atualizar');
        Route::get('{id}/excluir', [MarcaController::class, 'excluir'])->name('.excluir');
        Route::post('salvar/ajax', [MarcaController::class, 'salvarAjax'])->name('.salvar.ajax');
        Route::get('pesquisar', [MarcaController::class, 'pesquisar'])->name('.pesquisar');
    });

    Route::prefix('modelos')->name('.modelos')->group(function () {
        Route::get('', [ModeloController::class, 'inicio'])->name('');
        Route::get('criar/', [ModeloController::class, 'criar'])->name('.criar');
        Route::post('salvar', [ModeloController::class, 'salvar'])->name('.salvar');
        Route::get('{id}/editar', [ModeloController::class, 'editar'])->name('.editar');
        Route::post('{id}/atualizar', [ModeloController::class, 'atualizar'])->name('.atualizar');
        Route::get('{id}/excluir', [ModeloController::class, 'excluir'])->name('.excluir');
        Route::post('salvar/ajax', [ModeloController::class, 'salvarAjax'])->name('.salvar.ajax');
        Route::get('pesquisar/{marca_id}', [ModeloController::class, 'pesquisar'])->name('.pesquisar');
    });
});
