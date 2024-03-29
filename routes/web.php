<?php

use App\Http\Controllers\Site\CategoriaController;
use App\Http\Controllers\Site\ConversaController;
use App\Http\Controllers\Site\EquipamentoController;
use App\Http\Controllers\Site\ListaController;
use App\Http\Controllers\Site\NotificacaoController;
use App\Http\Controllers\Site\PesquisaController;
use App\Http\Controllers\Site\SiteController;
use Illuminate\Support\Facades\Route;

/*
 *--------------------------------------------------------------------------
 * Web Routes
 *--------------------------------------------------------------------------
 *
 * Here is where you can register web routes for your application. These
 * routes are loaded by the RouteServiceProvider within a group which
 * contains the "web" middleware group. Now create something great!
 *
 */

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/marketing.php';
require __DIR__ . '/administracao.php';

Route::name('site')->group(function () {
    Route::get('', [SiteController::class, 'inicio'])->name('.inicio');
    Route::get('equipamento/{id}', [SiteController::class, 'equipamento'])->name('.equipamento');

    Route::get('categoria/{id?}', [ListaController::class, 'categoria'])->name('.categoria');
    Route::get('marca/{id}', [ListaController::class, 'marca'])->name('.marca');
    Route::get('lista/{idOuSlug}', [ListaController::class, 'lista'])->name('.lista');

    Route::get('anunciante/{anunciante}', [ListaController::class, 'anunciante'])->name('.anunciante');

    Route::get('pesquisar/marcas/{categoria_id?}', [EquipamentoController::class, 'pesquisarMarca'])->name('.pesquisar.marca');
    Route::get('pesquisar/{marca_id}/modelos', [EquipamentoController::class, 'pesquisarModelo'])->name('.pesquisar.marca.modelo');
    Route::get('pesquisa/{pesquisa}', [ListaController::class, 'pesquisa'])->name('.pesquisa');
    Route::get('pesquisar/cidade', [PesquisaController::class, 'cidade'])->name('.cidade');

    Route::middleware(['auth'])->group(function () {
        Route::name('.equipamento')->prefix('equipamento')->group(function () {
            Route::get('cadastrar', [EquipamentoController::class, 'cadastrar'])->name('.cadastrar');
            Route::get('cadastro/{id}', [EquipamentoController::class, 'cadastro'])->name('.cadastro');
            Route::get('cadastro/editar/{id}', [EquipamentoController::class, 'editar'])->name('.editar');
            Route::post('salvar', [EquipamentoController::class, 'salvar'])->name('.salvar');
            Route::get('{id}/imagens', [EquipamentoController::class, 'imagens'])->name('.imagens');
            Route::post('{id}/imagens/salvar', [EquipamentoController::class, 'salvarImagens'])->name('.salvarImagens');
            Route::get('{id}/imagens/{imagem_id}/excluir', [EquipamentoController::class, 'excluirImagem'])->name('.excluirImagem');
            Route::get('{id}/imagens/continuar', [EquipamentoController::class, 'imagensContinuar'])->name('.imagensContinuar');
            Route::get('{id}/descricao', [EquipamentoController::class, 'descricao'])->name('.descricao');
            Route::post('{id}/descricao/salvar', [EquipamentoController::class, 'salvarDescricao'])->name('.salvarDescricao');
            Route::get('{id}/caracteristicas', [EquipamentoController::class, 'caracteristicas'])->name('.caracteristicas');
            Route::post('{id}/caracteristicas/salvar', [EquipamentoController::class, 'salvarCaracteristicas'])->name('.salvarCaracteristicas');
            Route::get('{id}/finalizar', [EquipamentoController::class, 'finalizar'])->name('.finalizar');
        });


        Route::post('marca/salvar/ajax', [EquipamentoController::class, 'salvarMarcaAjax'])->name('.cadastrar.marca.salvarajax');
        Route::post('modelo/salvar/ajax', [EquipamentoController::class, 'salvarModeloAjax'])->name('.cadastrar.modelo.salvarajax');

        Route::get('categorias/pesquisar/{id?}', [CategoriaController::class, 'pesquisar'])->name('.categorias.pesquisar');

        Route::get('perfil', [SiteController::class, 'perfil'])->name('.perfil');
        Route::get('perfil/editar', [SiteController::class, 'atualizarPerfil'])->name('.perfil.atualizar');
        Route::post('perfil/salvar', [SiteController::class, 'salvarPerfil'])->name('.perfil.salvar');

        Route::get('perfil/equipamentos', [SiteController::class, 'equipamentosPerfil'])->name('.perfil.equipamentos');
        Route::get('equipamento/reprovado/{id}', [SiteController::class, 'equipamentoReprovado'])->name('.equipamento.reprovado');

        Route::prefix('conversa')->name('.conversa')->group(function () {
            Route::get('{id}', [ConversaController::class, 'conversa'])->name('');
            Route::get('equipamento/{id}', [ConversaController::class, 'conversaEquipamento'])->name('.equipamento');
            Route::post('{id}/enviar', [ConversaController::class, 'enviar'])->name('.enviar');

            Route::get('{id_conversa}/mensagens/anteriores/{id}', [ConversaController::class, 'mensagensAnteriores'])->name('.mensagens.anteriores');
            Route::get('{id_conversa}/mensagens/posteriores/{id}', [ConversaController::class, 'mensagensPosteriores'])->name('.mensagens');
            Route::post('{id_conversa}/mensagens/visualizacao/{id}', [ConversaController::class, 'visualizacao'])->name('.mensagens.visualizacao');
            Route::get('{id_conversa}/mensagem/excluir/{id}', [ConversaController::class, 'excluirMensagem'])->name('.mensagem.excluir');
        });

        Route::prefix('notificacoes')->name('.notificacoes')->group(function () {
            Route::get('', [NotificacaoController::class, 'inicio'])->name('');
            Route::get('{notificacao}', [NotificacaoController::class, 'notificacao'])->name('.notificacao');
            Route::post('token', [NotificacaoController::class, 'salvarToken'])->name('.salvarToken');
        });
    });
});
