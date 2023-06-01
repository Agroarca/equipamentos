<?php

namespace App\Http\Middleware;

use App\Services\Admin\MenuService;
use App\Services\Notificacoes\NotificacaoService;
use App\Services\Site\PaginaInicialService;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    // phpcs:ignore SlevomatCodingStandard.TypeHints.PropertyTypeHint.MissingAnyTypeHint
    protected $rootView = 'app';

    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
                'notificacoes' => app(NotificacaoService::class)->getCountNotificacoesNaoLidasUsuario(),
            ],
            'admin' => [
                'menus' => app(MenuService::class)->getAuthMenus(),
            ],
            'mensagem' => session()->get('mensagem'),
            'site' => [
                'menu' => app(PaginaInicialService::class)->getMenu(),
                'contato' => [
                    'telefone' => config('equipamentos.contato.telefone'),
                    'link' => config('equipamentos.contato.link'),
                ],
            ],
        ]);
    }
}
