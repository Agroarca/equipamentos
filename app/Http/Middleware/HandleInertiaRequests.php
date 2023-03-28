<?php

namespace App\Http\Middleware;

use App\Services\Admin\MenuService;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected string $rootView = 'app';

    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'admin' => [
                'menus' => MenuService::getAuthMenus(),
            ],
        ]);
    }
}
