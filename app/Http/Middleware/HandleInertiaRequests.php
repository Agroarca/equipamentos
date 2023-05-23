<?php

namespace App\Http\Middleware;

use App\Services\Admin\MenuService;
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
            ],
            'admin' => [
                'menus' => MenuService::getAuthMenus(),
            ],
            'dados' => [
                'contato' => [
                    'telefone' => config('equipamentos.contato.telefone'),
                    'link' => config('equipamentos.contato.link'),
                ],
            ],
            'mensagem' => session()->get('mensagem'),
            'tipo_mensagem' => session()->get('tipo_mensagem'),
        ]);
    }
}
